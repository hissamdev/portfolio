import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { parseAuthCookie, verifyJwt } from "./utils/jwt";

export async function proxy(request: NextRequest) {
    const token = parseAuthCookie(request.headers.get('cookies'))

    const isProtectedRoute = !request.nextUrl.pathname.startsWith('/login');
    if (isProtectedRoute) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const payload = verifyJwt(token)
        if (!payload) {
            // Error would mean invalid or expired token. Delete if so.
            const response = NextResponse.redirect(new URL('/login', request.url))
            response.cookies.delete('authToken')
            return response;
        }
    } else {
        if (token && verifyJwt(token)) {
            return NextResponse.redirect(new URL('dashboard', request.url))
        }
    }

    return NextResponse.next();
}

const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.icon).*)']
};