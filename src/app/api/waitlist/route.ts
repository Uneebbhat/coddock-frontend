import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import WaitlistSchema from "@/schema/waitlist-schema.schema";
import { APIResponse } from "@/types/response-types";


export async function POST(req: NextRequest) {
  try {
    const parsed = WaitlistSchema.safeParse(await req.json());

    if (!parsed.success) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 400,
          error: parsed.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const normalizedEmail = email.toLowerCase().trim();

    const existingWaitlistUser = await prisma.waitlist.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingWaitlistUser) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 409,
          error: "This email is already on the waitlist. We'll be in touch when we launch.",
        },
        { status: 409 }
      );
    }

    const newWaitlistUser = await prisma.waitlist.create({
      data: {
        email: normalizedEmail,
      },
    });

    return NextResponse.json<APIResponse>(
      {
        success: true,
        status: 201,
        message: "You're on the list. Check your inbox.",
        data: newWaitlistUser
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("[waitlist] Unexpected error:", error.message);
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 500,
          error: "Something went wrong on our end. Please try again in a moment.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json<APIResponse>(
      {
        success: false,
        status: 500,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}