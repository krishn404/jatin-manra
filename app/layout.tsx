import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeScript } from '@/components/theme-script'
import './globals.css'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jatin Manra | Social Media Strategist & Meta Ads Specialist',
  description:
    'Jatin Manra helps brands build stronger content systems through social media strategy, short-form production, creative direction, and Meta Ads lead generation.',
  generator: ' ',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${schibsted.variable} bg-background`}>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
