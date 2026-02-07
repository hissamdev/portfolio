import jwt from 'jsonwebtoken';
import Cookie from 'cookie';

export type JWTPayload = {
    userId: string;
    iat?: number;
    exp?: number;

}

// Return authToken string, otherwise null if cookieHeader or authToken doesn't exist
export function parseAuthCookie(cookieHeader: string | null): string | null {
    if (!cookieHeader) return null;
    const cookies = Cookie.parse(cookieHeader);
    return cookies.authToken || null;
}

export function verifyJwt(token: string): JWTPayload | null {
    try {
        return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
    } catch (err) {
        console.error('JWT verification failed:', err);
        return null;
    }
}