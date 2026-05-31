import type { Metadata } from 'next';
import { Bai_Jamjuree, Geist_Mono, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

import { Container } from '@/components/ui/Container';

import '../styles/globals.scss';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const baiJamjuree = Bai_Jamjuree({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: '600',
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'REEL',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${geistMono.variable} ${baiJamjuree.variable}`}
    >
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
