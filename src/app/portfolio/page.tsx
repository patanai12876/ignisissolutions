import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

const siteUrl = 'https://ignisissolutions.com'

export const metadata: Metadata = {
  title: 'Web Development & Digital Marketing Portfolio | Ignisis Solutions',
  description:
    'Explore the Ignisis Solutions portfolio featuring websites, e-commerce platforms, custom software, branding and digital marketing projects built for businesses in Lahore, Pakistan and beyond.',
  keywords: [
    'Ignisis Solutions portfolio',
    'web development portfolio Lahore',
    'web development projects Pakistan',
    'website development portfolio',
    'digital marketing portfolio Lahore',
    'e-commerce development portfolio Pakistan',
    'custom software development portfolio',
    'branding portfolio Lahore',
    'digital agency portfolio Pakistan',
    'website design portfolio Lahore',
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  openGraph: {
    title: 'Web Development & Digital Marketing Portfolio | Ignisis Solutions',
    description:
      'Explore websites, e-commerce platforms, custom software, branding and digital marketing projects created by Ignisis Solutions.',
    url: `${siteUrl}/portfolio`,
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignisis Solutions Portfolio | Web, Software & Digital Marketing',
    description:
      'Explore our web development, e-commerce, software, branding and digital marketing projects.',
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

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/portfolio#collection`,
  name: 'Ignisis Solutions Portfolio',
  url: `${siteUrl}/portfolio`,
  description:
    'Portfolio of websites, e-commerce platforms, custom software, branding and digital marketing projects created by Ignisis Solutions.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Ignisis Solutions',
    url: siteUrl,
  },
  about: {
    '@type': 'ProfessionalService',
    name: 'Ignisis Solutions',
    url: siteUrl,
  },
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />

      <PortfolioClient />
    </>
  )
}