// apps/my-app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const loggedInCookie = request.cookies.get('isLoggedIn');

  // Logic: If the user is NOT logged in and tries to go to /dashboard,
  // send them back to the /login page.
  if (!loggedInCookie && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Otherwise, let them through
  return NextResponse.next();
}

// Only run this middleware on specific routes
export const config = {
  matcher: ['/dashboard/:path*'],
};