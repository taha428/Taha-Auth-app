import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const sessionToken = request.cookies.get("next-auth.session-token");

  // Allow signin page and auth routes without session
  if (pathname.startsWith("/signin") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Protect all other routes - check for session cookie
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)",
  ],
};
