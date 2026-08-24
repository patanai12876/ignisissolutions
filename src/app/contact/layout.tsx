import type { Metadata } from 'next'

const siteUrl = 'https://ignisissolutions.com'

export const metadata: Metadata = {
  title: 'Contact Ignisis Solutions | Digital Agency in Lahore',
  description:
    'Contact Ignisis Solutions, a digital marketing and web development agency in Lahore, Pakistan. Get in touch for web development, custom software, SEO, e-commerce, branding and digital marketing services.',

  keywords: [
    'contact digital marketing agency Lahore',
    'contact web development company Lahore',
    'digital agency Lahore',
    'web development agency Lahore',
    'SEO agency Lahore',
    'custom software development Lahore',
    'e-commerce development Lahore',
    'Ignisis Solutions contact',
  ],

  alternates: {
    canonical: '/contact',
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: `${siteUrl}/contact`,
    siteName: 'Ignisis Solutions',
    title: 'Contact Ignisis Solutions | Digital Agency in Lahore',
    description:
      'Get in touch with Ignisis Solutions for web development, custom software, SEO, e-commerce, branding and digital marketing services in Lahore and beyond.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ignisis Solutions | Digital Agency in Lahore',
    description:
      'Get in touch with Ignisis Solutions for web development, SEO, digital marketing, e-commerce, branding and custom software solutions.',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}