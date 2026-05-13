import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '/';

  // Even though Next.js has built-in safety, we use this to see 
  // if our Middleware blocks the malicious input first.
  return NextResponse.redirect(new URL(page, request.url), {
    headers: { 'X-Lab-Revalidation': 'Enabled' }
  });
}