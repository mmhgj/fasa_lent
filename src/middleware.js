import { NextResponse } from 'next/server';

export async function middleware(request) {
  const response = NextResponse.next();
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/:path',
    '/auth/:path*',
    '/user/panel/:path*',
    '/admin/panel/:path*',
  ],
};
