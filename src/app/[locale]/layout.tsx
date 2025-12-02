import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MSWProvider } from '../../components/MSWProvider';

import './globals.css';
import { api } from '@/lib/api';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const homeData = await api.getHomeData(locale);

  if (!homeData.success) {
    return {
      title: 'Sunwell',
      description: 'Sunwell',
    };
  }

  const { data } = homeData;

  return {
    title: data.home_title.title,
    description: data.seo.description,
    keywords: data.seo.keyword,
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <MSWProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen bg-gray-50">
              <Header />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
