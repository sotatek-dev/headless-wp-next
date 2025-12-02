import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locale || !locales.includes(locale as any)) {
    // Return default locale for invalid/undefined locales
    return {
      locale: 'jp',
      messages: (await import(`../messages/jp.json`)).default,
    };
  }

  return {
    locale: locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
