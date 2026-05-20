// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    const lang = request.headers.get("accept-language") || "es";
    const locale = lang.startsWith("en") ? "en" : "es";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip _next/static, _next/image, api routes, and files with extensions (images, fonts, etc.)
    "/((?!_next/static|_next/image|api|favicon\\.ico|.*\\..*).*)",
  ],
};

