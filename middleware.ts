import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { parseAuthCookie, verifyJwt } from "./utils/jwt";

export const runtime = 'experimental-edge'

export async function middleware(request: NextRequest) {
    return NextResponse.next()
}

const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.icon).*)']
};