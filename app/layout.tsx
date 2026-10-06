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
    'Build a content system that earns attention and enquiries. Jatin Manra combines social media strategy, short-form production, and Meta Ads.',
  verification: {
    google: 'DtrzszlNNCSwRNl7xk9bVEwD7-Wd0RuURkUrfySvKs8',
  },
  openGraph: {
    title: 'Jatin Manra | Social Media Strategist & Meta Ads Specialist',
    description:
      'Build a content system that earns attention and enquiries. Jatin Manra combines social media strategy, short-form production, and Meta Ads.',
    type: 'website',
    siteName: 'Jatin Manra',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Jatin Manra | Social Media Strategist & Meta Ads Specialist',
    description:
      'Build a content system that earns attention and enquiries. Jatin Manra combines social media strategy, short-form production, and Meta Ads.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': '#jatin-manra',
      name: 'Jatin Manra',
      jobTitle: 'Social Media Strategist & Meta Ads Specialist',
      description:
        'Social media strategist and Meta Ads specialist working across content strategy, short-form production, lead generation, creative performance, and content operations.',
      email: 'manrajatin@gmail.com',
      telephone: '+91 6284 177 294',
      sameAs: [
        'https://www.instagram.com/clipsbymanra/',
        'https://www.linkedin.com/in/manrajatin/',
      ],
      knowsAbout: [
        'Social media strategy',
        'Social media management',
        'Content strategy',
        'Short-form content production',
        'Meta Ads',
        'Lead generation',
        'Creative testing',
        'Content operations',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': '#jatin-manra-professional-service',
      name: 'Jatin Manra',
      description:
        'Social media strategy, short-form production, creative operations, and Meta Ads lead generation for brands.',
      email: 'manrajatin@gmail.com',
      telephone: '+91 6284 177 294',
      sameAs: [
        'https://www.instagram.com/clipsbymanra/',
        'https://www.linkedin.com/in/manrajatin/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Marketing and content services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Media Strategy & Management',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Content Strategy & Short-form Production',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Meta Ads & Lead Generation',
            },
          },
        ],
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
