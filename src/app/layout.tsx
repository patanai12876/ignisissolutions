import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import './home-concept.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import Chatbot from '@/components/layout/Chatbot'
import MobileActionBar from '@/components/layout/MobileActionBar'
import ScrollToTop from '@/components/layout/ScrollToTop'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
})

const siteUrl = 'https://ignisissolutions.com'
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Ignisis Solutions',

  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },

  title: {
default:
  'Digital Marketing & Web Development Agency in Lahore | Ignisis Solutions',    template: '%s | Ignisis Solutions',
  },

  description:
  'Ignisis Solutions is a digital marketing and web development agency in Lahore, Pakistan, helping businesses grow with web development, SEO, custom software, e-commerce, branding, Google Ads and Meta Ads.' ,

  keywords: [
  'Ignisis Solutions',
  'digital marketing agency Lahore',
  'digital marketing agency Pakistan',
  'web development company Lahore',
  'web development agency Pakistan',
  'SEO agency Lahore',
  'branding agency Lahore',
  'branding agency Pakistan',
  'custom software development Pakistan',
  'SaaS development company Pakistan',
  'e-commerce development company Pakistan',
],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Ignisis Solutions',
title:
  'Digital Marketing & Web Development Agency in Lahore | Ignisis Solutions',
      description:
  'Ignisis Solutions provides web development, custom software, SEO, e-commerce, branding, Google Ads, Meta Ads and digital marketing services for businesses in Lahore, Pakistan and beyond.',  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ignisis Solutions | Digital Agency in Lahore',
    description:
      'Web development, software, SEO, e-commerce, branding and digital marketing services in Lahore, Pakistan and beyond.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#organization`,
  name: 'Ignisis Solutions',
  alternateName: 'Ignisis Solutions Digital Agency',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  description:
    'Digital agency offering web development, custom software, e-commerce, branding and digital marketing services.',
  telephone: '+92 302 5708769',
  email: 'ignisissolutions@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '280 N Block, Model Town',
    addressLocality: 'Lahore',
    postalCode: '54700',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.4697,
    longitude: 74.3425,
  },
  areaServed: [
    { '@type': 'City', name: 'Lahore' },
    { '@type': 'Country', name: 'Pakistan' },
  ],
  sameAs: [
    'https://instagram.com/ignisissolutions',
    'https://www.linkedin.com/company/ignisis-solutions/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ignisis Solutions Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding and Graphic Design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Solutions',
        },
      },
    ],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Ignisis Solutions',
  alternateName: 'Ignisis Solutions Digital Agency',
  url: siteUrl,
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${poppins.className} bg-white text-[#071039]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1 pb-16 md:pb-0">{children}</main>

          <WhatsAppButton />
         
          <MobileActionBar />
          <ScrollToTop />

          <Footer />
        </div>
      </body>
    </html>
  )
}
