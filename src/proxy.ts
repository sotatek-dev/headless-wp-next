import createMiddleware from 'next-intl/middleware';

const proxy = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'jp', 'vi'],

  // Used when no locale matches
  defaultLocale: 'jp',
});

export const config = {
  // Match all pathnames except for
  // - API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

export default proxy;
