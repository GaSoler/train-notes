import { ThemeProvider } from '@/components/layout/theme-provider';
import { Toaster } from '@/components/ui/toaster'

import "./globals.css";
import { Roboto_Mono as Roboto } from 'next/font/google'
import { cn } from '@/lib/utils';
import type { Metadata } from 'next'
import { HeaderWrapper } from '@/components/layout/header.wrapper';

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Train Notes',
  description:
    '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
        )}
      >
        <ThemeProvider>
          <HeaderWrapper />
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
