import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Header } from '@/components/ui';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Front End Test',
  description: 'Manuel Reyes - Shyfter.co',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className=' h-full min-h-full min-w-full w-full'
    >
      <body
        className={`${poppins.variable} antialiased h-full min-h-full min-w-full w-full overflow-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
