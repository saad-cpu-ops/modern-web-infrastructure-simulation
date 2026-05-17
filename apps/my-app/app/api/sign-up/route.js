import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    // ----------------------------
    // 1. Basic validation (mock)
    // ----------------------------
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }

    // ----------------------------
    // 2. Mock "database check"
    // (later you replace with Postgres)
    // ----------------------------
    if (email === "admin@gmail.com") {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // ----------------------------
    // 3. Mock user creation
    // ----------------------------
    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
    };

    // ----------------------------
    // 4. Response
    // ----------------------------
    return NextResponse.json(
      {
        message: "User created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}