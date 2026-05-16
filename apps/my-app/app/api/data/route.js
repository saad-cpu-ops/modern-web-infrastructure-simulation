import { NextResponse } from 'next/server';

export async function GET(request) {
  // Get the 'page' query parameter from the URL, defaulting to '/' if not provided.
  const { searchParams } = new URL(request.url); // 
  // This is the page we want to redirect to after processing the request.
  // this is vulnerable to open redirect if not properly handled, we can rely on our Middleware to block malicious input, but we should also validate the input'go as well.
  // 
  const allowedPages = ['/', '/about', '/contact', '/login', '/register', '/dashboard']; // Define a list of allowed pages
  const page = searchParams.get('page') || '/'; // searchPramas.get('page') it grab the value of the 'page' query parameter in this case page and || '/' is a fallback value if the 'page' query parameter is not provided in the URL, it will default to '/' which is the root of the website.

  // Even though Next.js has built-in safety, we use this to see 
  // if our Middleware blocks the malicious input first.
  if (!allowedPages.includes(page)) {
    return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
  }

  return NextResponse.redirect(new URL(page, request.url), {
    headers: { 'X-Lab-Revalidation': 'Enabled' }
  });
}