import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
    default: 'Ignisis Solutions | Digital Agency for Web, Software & Marketing',
    template: '%s | Ignisis Solutions',
  },

  description:
    'Ignisis Solutions builds websites, software, e-commerce stores, branding and digital marketing systems that help businesses grow.',

  keywords: [
    'digital agency Lahore',
    'web development agency',
    'custom software development Pakistan',
    'digital marketing agency Lahore',
    'branding agency Pakistan',
    'e-commerce development Pakistan',
    'Ignisis Solutions',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Ignisis Solutions',
    title: 'Ignisis Solutions | Digital Agency for Web, Software & Marketing',
    description:
      'Web development, software, branding, e-commerce and digital marketing for ambitious businesses.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ignisis Solutions',
    description:
      'Web development, software, branding, e-commerce and digital marketing for ambitious businesses.',
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
  name: 'Ignisis Solutions',
  url: siteUrl,
  description:
    'Digital agency offering web development, custom software, e-commerce, branding and digital marketing services.',
  telephone: '+92 302 5708769',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '280 Model, Block N Town',
    addressLocality: 'Lahore',
    postalCode: '54700',
    addressCountry: 'PK',
  },
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
  name: 'Ignisis Solutions',
  alternateName: 'Ignisis Solutions Digital Agency',
  url: siteUrl,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A1930] text-white`}>
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

          <main className="flex-1">{children}</main>

          <WhatsAppButton />

          <Footer />
        </div>
      </body>
    </html>
  )
}