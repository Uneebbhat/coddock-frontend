import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { Payload } from "@/helper/generateToken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get("refreshToken")?.value;
    const cookieStore = await cookies();

    if (!refreshToken) throw new Error("Unauthorized");

    const payload = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!,
    ) as Payload;

    const newAccessToken = jwt.sign(
      { id: payload.id },
      process.env.JWT_ACCESS_SECRET!,
      { expiresIn: "15m" },
    );

    cookieStore.set("accessToken", newAccessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return NextResponse.json({ accessToken: newAccessToken });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
