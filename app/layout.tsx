import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';

// Premium font combination
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://burojx.vercel.app'),
  title: 'Burojx — Crafting Digital Excellence',
  description: 'Award-winning creative studio specializing in premium web experiences, innovative design, and cutting-edge development.',
  keywords: 'web design, web development, creative studio, digital agency, premium websites',
  authors: [{ name: 'Burojx Studio' }],
  openGraph: {
    title: 'Burojx — Crafting Digital Excellence',
    description: 'Award-winning creative studio specializing in premium web experiences',
    type: 'website',
    url: 'https://burojx.vercel.app',
    siteName: 'Burojx Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burojx — Crafting Digital Excellence',
    description: 'Award-winning creative studio specializing in premium web experiences',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
