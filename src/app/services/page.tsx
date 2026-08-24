import type { Metadata } from 'next'
import Services from './Services'

export const metadata: Metadata = {
  title: 'Digital Services in Lahore | Web Development, SEO & Marketing',
  description:
    'Ignisis Solutions offers professional web development, SaaS and custom software development, e-commerce solutions, SEO, digital marketing, branding, graphic design and business growth services in Lahore, Pakistan.',

  keywords: [
    'ignisis solutions services',
    'digital agency Lahore',
    'digital marketing agency Lahore',
    'web development company Lahore',
    'web development agency Lahore',
    'software development company Lahore',
    'SaaS development company Pakistan',
    'custom software development Pakistan',
    'ecommerce development Lahore',
    'SEO services Lahore',
    'branding agency Lahore',
    'social media management Lahore',
    'graphic design services Lahore',
    'business consultancy Lahore',
    'Ignisis Solutions',
  ],

  alternates: {
    canonical: 'https://ignisissolutions.com/services',
  },

  openGraph: {
    title: 'Digital Services in Lahore | Ignisis Solutions',
    description:
      'Explore web development, custom software, SaaS, e-commerce, SEO, digital marketing, branding and business growth services from Ignisis Solutions.',
    url: 'https://ignisissolutions.com/services',
    siteName: 'Ignisis Solutions',
    locale: 'en_PK',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services in Lahore | Ignisis Solutions',
    description:
      'Web development, software, SaaS, e-commerce, SEO, digital marketing, branding and business growth services.',
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
    'Professional web development, software, SaaS, e-commerce, digital marketing, SEO, branding and business growth services.',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Web Development',
      serviceType: 'Web Development',
      provider: {
        '@type': 'Organization',
        name: 'Ignisis Solutions',
        url: 'https://ignisissolutions.com',
      },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'SaaS Development',
      serviceType: 'SaaS Development',
      provider: {
        '@type': 'Organization',
        name: 'Ignisis Solutions',
      },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Custom Software Development',
      serviceType: 'Custom Software Development',
      provider: {
        '@type': 'Organization',
        name: 'Ignisis Solutions',
      },
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Digital Marketing',
      serviceType: 'Digital Marketing',
      provider: {
        '@type': 'Organization',
        name: 'Ignisis Solutions',
      },
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'E-commerce Solutions',
      serviceType: 'E-commerce Development',
      provider: {
        '@type': 'Organization',
        name: 'Ignisis Solutions',
      },
    },
  ],
}

export default function ServicesPage() {
  return <Services />
}