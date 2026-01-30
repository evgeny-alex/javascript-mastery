import { NextResponse } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export default function middleware(req) {
  const url = req.nextUrl.clone();

  // NextAuth cookies (names differ between dev/prod)
  const sessionToken =
    req.cookies.get("authjs.session-token")?.value ||
    req.cookies.get("__Secure-authjs.session-token")?.value ||
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!sessionToken) {
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
