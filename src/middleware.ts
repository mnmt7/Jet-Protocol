import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const sessionExists = session !== null;

  if (
    sessionExists &&
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname == "/sign-up")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!sessionExists && req.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}
