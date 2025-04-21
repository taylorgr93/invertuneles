// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Solo hacer redirección si están en "/"
  if (pathname === "/") {
    const lang = request.headers.get("accept-language") || "es";
    const locale = lang.startsWith("en") ? "en" : "es";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}
