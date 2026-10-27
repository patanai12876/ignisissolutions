import type { Metadata } from 'next'
import Services from './Services'

export const metadata: Metadata = {
  title: 'Digital Services in Lahore | Web Development, SEO & Marketing',
  description:
    'Explore digital marketing, web development, branding, social media management, SaaS development, graphic design and digital business growth services from Ignisis Solutions.',

  keywords: [
    'ignisis solutions services',
    'digital agency Lahore',
    'digital marketing agency Lahore',
    'web development company Lahore',
    'web development agency Lahore',
    'SaaS development company Pakistan',
    'digital business growth Lahore',
    'branding agency Lahore',
    'social media management Lahore',
    'graphic design services Lahore',
    'Ignisis Solutions',
  ],

  alternates: {
    canonical: 'https://ignisissolutions.com/services',
  },

  openGraph: {
    title: 'Digital Services in Lahore | Ignisis Solutions',
    description:
      'Explore digital marketing, web development, branding, social media management, SaaS development, graphic design and digital business growth services from Ignisis Solutions.',
    url: 'https://ignisissolutions.com/services',
    siteName: 'Ignisis Solutions',
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services in Lahore | Ignisis Solutions',
    description: 'Digital marketing, web development, branding, social media, SaaS, graphic design and business growth services.',
  },

  robots: {
    index: true,
    follow: true,
  },
}
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital Services by Ignisis Solutions',
  description:
    'Digital marketing, web development, branding, social media management, SaaS development, graphic design and digital business growth services.',
  itemListElement: [
    'Digital Marketing',
    'Web Development',
    'Branding',
    'Social Media Management',
    'SaaS Development',
    'Graphic Designing',
    'Digital Business Growth',
  ].map((name, index) => ({
    '@type': 'Service',
    position: index + 1,
    name,
    serviceType: name,
    provider: {
      '@type': 'Organization',
      name: 'Ignisis Solutions',
      url: 'https://ignisissolutions.com',
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <Services />
    </>
  )
}
