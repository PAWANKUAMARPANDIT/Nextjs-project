import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isProtectedPath = ['/', '/about', '/login', '/contact', '/blog'].includes(path);
  const token = request.cookies.get('token')?.value || '';

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/about', '/login', '/contact', '/blog'],
};
