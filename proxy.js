import { NextResponse } from 'next/server';

//First line of defense
export default function proxy(request) {
  const cookieStore = request.cookies;

  if (!cookieStore.has('believe-access-token')) {
    console.log("🔒 proxy hit")
    return NextResponse.redirect(new URL('/auth', request.url));
  }
}

export const config = {
  matcher: ['/profile/:path*'], // note the '*' to match all nested paths
};