import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();

    // 1. DATA VALIDATION
    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // 2. DATABASE STEP (Placeholder)
    console.log(`Ready to save user: ${name} (${email}) to PostgreSQL`);
    
    // LATER: 
    // const user = await pool.query('INSERT INTO users...')
    
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}