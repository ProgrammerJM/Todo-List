import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Load environment variables
const allowedOrigin = process.env.NEXT_PUBLIC_API_URL || "";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: response.headers,
    });
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
