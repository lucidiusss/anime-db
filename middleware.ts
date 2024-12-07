import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/animes/:path*",
};
