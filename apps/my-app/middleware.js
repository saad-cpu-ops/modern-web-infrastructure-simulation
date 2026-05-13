import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.url;

  // 🛡️ BLOCKING ATTACK: Detect CRLF injection in the URL or headers
  // This prevents the "HTTP Response Splitting" required for poisoning.
  if (url.includes('%0d') || url.includes('%0a') || url.includes('\r') || url.includes('\n')) {
    console.error("🚨 SECURITY ALERT: Cache Poisoning Attempt Blocked");
    return new NextResponse("Security Block: Potential HTTP Response Splitting", { status: 400 });
  }

  // 🔑 AUTH PROTECTION: Check for the session cookie
  const isLoggedIn = request.cookies.get('isLoggedIn');
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

  if (isDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'], // Monitor every single request
};