import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from './providers';
import { Header } from '@/components/layout/header/header';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './globals.css';
import { ErrorFallback } from './error-fallback';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'GACHDONG',
    template: '%s | GACHDONG',
  },
  description: '가츠동',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'GACHDONG',
    description: '가츠동',
    locale: 'ko-KR',
    type: 'website',
    siteName: 'GACHDONG',
    images: [
      {
        url: '/text-logo.svg',
        width: 100,
        height: 30,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground h-screen`}>
        <Providers>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense>
              <Header />
              {children}
            </Suspense>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
