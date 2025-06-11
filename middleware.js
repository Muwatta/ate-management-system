import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow unauthenticated access to the admin signup page
  if (pathname === '/dashboard/admin/signup') {
    return NextResponse.next();
  }

  // Protect all other dashboard routes
  if (pathname.startsWith('/dashboard')) {
    const accessToken = request.cookies.get('sb-access-token');
    if (!accessToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};