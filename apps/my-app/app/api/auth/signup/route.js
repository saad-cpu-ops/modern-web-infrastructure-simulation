import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();

    // 🛡️ SANITIZATION: Kill newlines at the variable level
    const cleanName = name?.replace(/[\r\n]/g, '').trim();
    const cleanEmail = email?.replace(/[\r\n]/g, '').trim();

    // 🛡️ CACHE DEFENSE: Force CDNs and Proxies NOT to cache this response
    const response = NextResponse.json(
      { message: `Account created for ${cleanName}` },
      { status: 201 }
    );

    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    console.log(`Ready for Postgres: Saving ${cleanEmail}...`);
    return response;
    
  } catch (err) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}