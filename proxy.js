import { NextResponse } from 'next/server';
import { checkTokenValidity } from './lib/utils';


export default function proxy(request) {
  const cookieStore = request.cookies;

  //First line of defense: check if token at all
  if (!cookieStore.has('believe-access-token')) {
    console.log("🔒 proxy: no token")
    //Redirect to auth
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  //Check if token expired
  const token = cookieStore.get("believe-access-token");
  const tokenExpired = checkTokenValidity(token.value)

  if (tokenExpired) {
    console.log("🔒 proxy: token expired ")
    //Delete old token and redirect to auth
    const response = NextResponse.redirect(new URL('/auth', request.url));
    response.cookies.delete('believe-access-token')
    return response
  }
}

export const config = {
  matcher: ['/profile/:path*'], // note the '*' to match all nested paths
};