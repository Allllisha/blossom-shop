import { NextResponse, type NextRequest } from "next/server";

const ALLOWED_COUNTRIES = new Set([
  // USA
  "US",
  // Europe
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // Non-EU Europe
  "GB", "CH", "NO", "IS",
]);

export function middleware(request: NextRequest) {
  // Vercel sets x-vercel-ip-country header
  const country = request.headers.get("x-vercel-ip-country");

  // Allow if no geo data (localhost/dev)
  if (!country) return NextResponse.next();

  if (!ALLOWED_COUNTRIES.has(country)) {
    return NextResponse.rewrite(new URL("/unavailable", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|images|favicon.ico|unavailable).*)"],
};
