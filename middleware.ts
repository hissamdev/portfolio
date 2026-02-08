import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { parseAuthCookie, verifyJwt } from "./utils/jwt";

export const runtime = 'experimental-edge'

export async function middleware(request: NextRequest) {
    const token = parseAuthCookie(request.headers.get('cookie'))
    console.log('Token is:', token)

    const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard');
    const loginRoute = request.nextUrl.pathname.startsWith('/login')

    if (isProtectedRoute) {
        console.log('Dashboard page hit')
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const payload = verifyJwt(token)
        if (!payload) {
            console.error('Payload empty:', payload, 'Deleting the cookie')
            // Error would mean invalid or expired token. Delete if so.
            const response = NextResponse.redirect(new URL('/login', request.url))
            response.cookies.delete('authToken')
            return response;
        }
    } else if (loginRoute) {
        if (token && verifyJwt(token)) {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }

    return NextResponse.next();
}

const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.icon).*)']
};