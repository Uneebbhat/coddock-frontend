import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = (await cookies()).get("token")?.value;
  const { pathname } = request.nextUrl;

  // If not logged in, allow auth pages, block protected pages (if matched)
  if (!token) {
    if (pathname === "/login" || pathname === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If logged in, don't let user stay on auth pages
  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/onboarding"
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/signup",
    "/login",
    "/onboarding",
    "/dashboard",
    "/community-forum/:path*",
    "/profile/:path*",
    "/learning-roadmaps/:path*",
  ],
};
