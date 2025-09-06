import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digi Solence - Social Media Marketing & Web Development Agency',
  description: 'Transform your business with our expert social media marketing and web development services. We create engaging digital experiences that drive results.',
  keywords: 'social media marketing, web development, digital agency, SEO, content marketing, branding',
  authors: [{ name: 'Digi Solence' }],
  openGraph: {
    title: 'Digi Solence - Social Media Marketing & Web Development Agency',
    description: 'Transform your business with our expert social media marketing and web development services.',
    url: 'https://digitalcraftpro.com',
    siteName: 'Digi Solence',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digi Solence - Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digi Solence - Social Media Marketing & Web Development Agency',
    description: 'Transform your business with our expert digital services.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L698RD33TH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L698RD33TH');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 