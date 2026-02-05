import jwt from 'jsonwebtoken';
import Cookie from 'cookie';

export function parseAuthCookie(cookieHeader: string | undefined): string | null {
    if (!cookieHeader) return null;
    const cookies = Cookie.parse(cookieHeader);
    return cookies.authToken || null;
}

export function verifyJwt(token: string) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET!)
    } catch (err) {
        console.error('JWT verification failed:', err);
        return null;
    }
}