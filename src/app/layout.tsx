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
    icon: '/IS%20favicon.png',
    shortcut: '/IS%20favicon.png',
    apple: '/IS%20favicon.png',
  },

  title: {
    default: 'Digital Agency in Lahore | Ignisis Solutions',
    template: '%s | Ignisis Solutions',
  },

  description:
    'Ignisis Solutions is a Lahore-based digital agency offering digital marketing, web development, branding, social media management, SaaS development, graphic design and digital business growth.',

  keywords: [
    'Ignisis Solutions',
    'digital agency Lahore',
    'digital marketing agency Lahore',
    'web development company Lahore',
    'branding agency Lahore',
    'social media management Lahore',
    'SaaS development Pakistan',
    'graphic design services Lahore',
    'digital business growth Lahore',
],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Ignisis Solutions',
    title: 'Digital Agency in Lahore | Ignisis Solutions',
    description: 'Digital marketing, web development, branding, social media, SaaS, graphic design and business growth for Lahore businesses.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ignisis Solutions | Digital Agency in Lahore',
    description: 'Digital marketing, web development, branding, social media, SaaS, graphic design and business growth in Lahore, Pakistan.',
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
    'Lahore-based digital agency offering digital marketing, web development, branding, social media management, SaaS development, graphic design and digital business growth.',
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
    'https://www.facebook.com/profile.php?id=61592162813345',
    'https://instagram.com/ignisissolutions',
    'https://www.linkedin.com/company/ignisis-solutions/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ignisis Solutions Services',
    itemListElement: [
      'Digital Marketing',
      'Web Development',
      'Branding',
      'Social Media Management',
      'SaaS Development',
      'Graphic Designing',
      'Digital Business Growth',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
      },
    })),
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
