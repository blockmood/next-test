import { NextResponse, NextRequest } from 'next/server';
import { fallbackLng, languages } from './app/i18n/settings';

export function middleware(req: NextRequest) {
  //为了兼容以前的SEO
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/${fallbackLng}${req.nextUrl.pathname}`);
  }

  return NextResponse.next();
}
