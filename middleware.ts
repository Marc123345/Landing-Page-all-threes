import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || '';
  const subdomain = hostname.split('.')[0].toLowerCase();

  if (subdomain === 'lp2') {
    const url = req.nextUrl.clone();
    url.pathname = '/lp2' + (req.nextUrl.pathname === '/' ? '' : req.nextUrl.pathname);
    return NextResponse.rewrite(url);
  }

  if (subdomain === 'lp3') {
    const url = req.nextUrl.clone();
    url.pathname = '/lp3' + (req.nextUrl.pathname === '/' ? '' : req.nextUrl.pathname);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
