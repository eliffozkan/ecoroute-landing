import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EcoRoute - Go 4 a Greener Route',
  description: 'Bridging the gap between environmental intent and daily action. EcoRoute turns your sustainable habits into a rewarding global currency.',
  metadataBase: new URL('https://ecoroute-landing.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EcoRoute - Go 4 a Greener Route',
    description: 'Bridging the gap between environmental intent and daily action. EcoRoute turns your sustainable habits into a rewarding global currency.',
    url: 'https://ecoroute-landing.vercel.app',
    siteName: 'EcoRoute',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EcoRoute - Go 4 a Greener Route',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoRoute - Go 4 a Greener Route',
    description: 'Bridging the gap between environmental intent and daily action. EcoRoute turns your sustainable habits into a rewarding global currency.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EcoRoute',
  url: 'https://ecoroute-landing.vercel.app',
  logo: 'https://ecoroute-landing.vercel.app/icon.svg',
  description: 'Bridging the gap between environmental intent and daily action. EcoRoute turns your sustainable habits into a rewarding global currency.',
  email: 'g4ecoroute@gmail.com',
  foundingLocation: {
    '@type': 'Place',
    name: 'Ankara, Turkey',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} bg-bg`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-21492Z7W5H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-21492Z7W5H');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}