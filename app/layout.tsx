import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Digi Solence - #1 Social Media Marketing & Web Development Agency in Mumbai',
    template: '%s | Digi Solence - Digital Marketing Agency'
  },
  description: 'Transform your business with Mumbai\'s leading social media marketing and web development agency. Expert SEO, content marketing, branding, and digital solutions that drive real results. Free hosting, domain & SSL included.',
  keywords: [
    'social media marketing',
    'web development',
    'digital marketing agency',
    'SEO services',
    'content marketing',
    'branding',
    'WhatsApp integration',
    'Google Analytics',
    'free hosting',
    'free domain',
    'SSL certificate',
    'digital marketing Mumbai',
    'social media management',
    'website development',
    'ecommerce development',
    'mobile app development',
    'digital transformation',
    'online marketing',
    'lead generation',
    'conversion optimization'
  ],
  authors: [{ name: 'Digi Solence Team' }],
  creator: 'Digi Solence',
  publisher: 'Digi Solence',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://digisolence.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digi Solence - #1 Social Media Marketing & Web Development Agency in Mumbai',
    description: 'Transform your business with Mumbai\'s leading digital marketing agency. Expert social media marketing, web development, SEO, and digital solutions with free hosting & domain.',
    url: 'https://digisolence.in',
    siteName: 'Digi Solence',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digi Solence - Mumbai\'s Leading Digital Marketing Agency',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digi Solence - #1 Digital Marketing Agency in Mumbai',
    description: 'Transform your business with expert social media marketing, web development, and digital solutions. Free hosting & domain included!',
    images: ['/og-image.jpg'],
    creator: '@digisolence',
    site: '@digisolence',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VNCeSjZ5TYoRFJeIW58Vqju0LD7tQqvfHpNOkRyKFis',
    yandex: '16c5760756cf61c0',

  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/fav-icon.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/fav-icon.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/fav-icon.jpeg" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Digi Solence",
              "alternateName": "Digi Solence Digital Marketing Agency",
              "url": "https://digisolence.in",
              "logo": "https://digisolence.in/fav-icon.jpeg",
              "description": "Mumbai's leading social media marketing and web development agency providing expert digital solutions, SEO services, and comprehensive online marketing strategies.",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Digi Solence Team"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8949648309",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/digisolence",
                "https://www.instagram.com/digisolence",
                "https://www.linkedin.com/company/digisolence",
                "https://twitter.com/digisolence"
              ],
              "serviceArea": {
                "@type": "City",
                "name": "Mumbai",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Maharashtra",
                  "containedInPlace": {
                    "@type": "Country",
                    "name": "India"
                  }
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Marketing",
                      "description": "Expert social media management and marketing strategies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom website development and design services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Services",
                      "description": "Search engine optimization and digital marketing"
                    }
                  }
                ]
              }
            }
          `}
        </Script>
        
        {/* Structured Data - Local Business */}
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://digisolence.in",
              "name": "Digi Solence",
              "image": "https://digisolence.in/fav-icon.jpeg",
              "description": "Professional digital marketing and web development services in Mumbai",
              "url": "https://digisolence.in",
              "telephone": "+91-8949648309",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "areaServed": {
                "@type": "City",
                "name": "Mumbai",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Maharashtra"
                }
              },
              "serviceType": "Digital Marketing Agency"
            }
          `}
        </Script>
        
        {/* Structured Data - WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digi Solence",
              "url": "https://digisolence.in",
              "description": "Mumbai's leading digital marketing and web development agency",
              "publisher": {
                "@type": "Organization",
                "name": "Digi Solence"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://digisolence.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        
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
            gtag('config', 'G-L698RD33TH', {
              page_title: 'Digi Solence - Digital Marketing Agency',
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'service_type'
              }
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 