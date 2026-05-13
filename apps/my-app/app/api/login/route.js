import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  // Mock check for now (Postgres logic goes here later)
  if (email === "admin@gmail.com" && password === "password123") {
    const response = NextResponse.json({ message: "Login Successful" });

    // Set HttpOnly cookie - JavaScript cannot touch this!
    response.cookies.set('isLoggedIn', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      path: '/',
      sameSite: 'lax',
      maxAge: 3600 // Valid for 1 hour
    });

    return response;
  }

  return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
}