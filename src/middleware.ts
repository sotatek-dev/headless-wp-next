import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'jp'],

  // Used when no locale matches
  defaultLocale: 'jp',
});

export const config = {
  // Match all pathnames except for
  // - API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|favicon.ico|.*\\..*).*)'],
};
