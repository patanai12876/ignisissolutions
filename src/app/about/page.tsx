// app/about/page.tsx

import type { Metadata } from 'next'
import About from '@/components/about/About'

export const metadata: Metadata = {
  title: 'About Us | Digital Agency in Lahore | Ignisis Solutions',
  description:
    'Learn about Ignisis Solutions, a digital agency in Lahore helping businesses grow through web development, custom software, e-commerce, branding, SEO and digital marketing.',
  keywords: [
    'Ignisis Solutions',
    'digital agency Lahore',
    'digital agency Pakistan',
    'web development agency Lahore',
    'digital marketing agency Lahore',
    'software development company Lahore',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Ignisis Solutions | Digital Agency in Lahore',
    description:
      'Meet Ignisis Solutions, a Lahore-based digital agency combining technology, design and digital marketing to help businesses grow.',
    url: 'https://ignisissolutions.com/about',
    siteName: 'Ignisis Solutions',
    type: 'website',
  },
}

export default function AboutPage() {
  return <About />
}