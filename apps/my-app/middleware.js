import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname === '/dashboard') {
    // No authentication check here, anyone can access /dashboard
    // This is the vulnerability: Missing Authentication
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard']
}
