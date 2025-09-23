import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/shared/lib/utils/cn';
import { NextIntlClientProvider } from 'next-intl';
import { Footer } from '@/shared/ui/components/footer';
import { Metadata } from 'next';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  openGraph: {
    images: 'https://domain.com/meta.jpg',
  },
  twitter: {
    images: ['https://domain.com/meta.jpg'],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;

  return (
    <html lang={locale ?? 'en'}>
      <body className={cn(poppins.variable, 'antialiased')}>
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
