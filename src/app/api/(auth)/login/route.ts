import UserDTO from "@/dto/user-dto.dto";
import generateToken from "@/helper/generateToken";
import { comparePassword } from "@/helper/passwordHashing";
import prisma from "@/lib/prisma";
import LoginSchema from "@/schema/login-schema.schema";
import { APIResponse } from "@/types/response-types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const body = await req.json();

    const validateBody = LoginSchema.safeParse(body);
    if (validateBody.error) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 400,
          error: validateBody.error.issues[0].message,
        },
        { status: 400 },
      );
    }

    const { email, password } = validateBody.data;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 404,
          error: "Email not found",
        },
        { status: 404 },
      );
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 401,
          error: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    const token = await generateToken(user);

    cookieStore.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    const userDTO = new UserDTO(user);

    return NextResponse.json<APIResponse>(
      {
        success: true,
        status: 200,
        message: "Logged in successfully",
        data: {
          user: userDTO,
          token,
        },
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 500,
          error: `Internal Server Error: ${error.message}`,
        },
        { status: 500 },
      );
    } else {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 500,
          error: `An unknown error occurred: ${error}`,
        },
        { status: 500 },
      );
    }
  }
}
