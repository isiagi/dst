import './globals.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/src/components/theme-provider';
// import { ModeToggle } from '@/src/components/mode-toggle';
import Script from 'next/script';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'DST - Data meets Integrity',
  description:
    'Datahub Systems Technologies (DST) is a trusted provider of innovative IT solutions designed to help businesses navigate the fast-evolving digital landscape.',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <AOSInit />
      <body>
        <Script
          id="messenger-widget-b"
          src="https://cdn.botpenguin.com/website-bot.js"
          strategy="afterInteractive"
        >
          {`685685cca306b60e50548224,68568595c78c450f35f8c36a`}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
            )}
          >
            <main>{children}</main>
            {/* <ModeToggle /> */}
          </div>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
