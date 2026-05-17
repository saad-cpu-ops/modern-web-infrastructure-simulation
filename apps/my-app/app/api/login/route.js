import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  // Mock check for now
  if (email === "admin@gmail.com" && password === "password123") {

    const user_id = "1"; // FIXED

    const response = NextResponse.json({ message: "Login Successful" });

    response.cookies.set('isLoggedIn', user_id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 3600
    });

    return response;
  }

  return NextResponse.json(
    { message: "Invalid Credentials" },
    { status: 401 }
  );
}