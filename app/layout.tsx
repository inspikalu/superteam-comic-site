import type React from 'react';
import type { Metadata } from 'next';
import { Archivo, Bangers } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-archivo',
});

const bangers = Bangers({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
  weight: ['400'],
  style: ['normal'],
  variable: '--font-bangers',
});

export const metadata: Metadata = {
  title: 'SuperteamNG - Once Upon a Web3 Dream',
  description:
    "The epic tale of SuperteamNG - Africa's first Solana Superteam chapter",
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${bangers.variable} font-bangers`}>
        {children}
      </body>
    </html>
  );
}
