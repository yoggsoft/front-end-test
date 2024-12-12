import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Header } from '@/components';

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
      className='flex h-full min-h-full min-w-full w-full bg-grey'
    >
      <body
        className={`${poppins.variable} antialiased flex h-full min-h-full min-w-full w-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
