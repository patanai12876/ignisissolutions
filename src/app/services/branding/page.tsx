import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Palette,
  Target,
  Sparkles,
  Layers3,
  PenTool,
  BookOpen,
  Megaphone,
  RefreshCw,
} from 'lucide-react'

export const metadata = {
  title: 'Branding Agency in Lahore | Brand Identity Design – Ignisis Solutions',
  description:
    'Ignisis Solutions is a branding agency in Lahore, Pakistan helping businesses build memorable brand identities through logo design, brand strategy, visual identity, typography, color systems and brand guidelines.',
  keywords: [
    'branding agency in Lahore',
    'branding services Lahore',
    'brand identity design Lahore',
    'branding company Pakistan',
    'brand strategy services',
    'logo design Lahore',
    'visual identity design',
    'corporate branding Lahore',
    'business branding services',
    'brand identity Pakistan',
    'professional branding agency',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/branding',
  },
  openGraph: {
    title: 'Branding Agency in Lahore | Brand Identity Design – Ignisis Solutions',
    description:
      'Build a strong, memorable and consistent brand identity with Ignisis Solutions. Branding, logo design, visual identity and brand strategy for businesses in Lahore and across Pakistan.',
    url: 'https://ignisissolutions.com/services/branding',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding Agency in Lahore | Ignisis Solutions',
    description:
      'Professional branding and visual identity services designed to help businesses build recognition, trust and consistency.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Branding',
  provider: {
    '@type': 'Organization',
    name: 'Ignisis Solutions',
    url: 'https://ignisissolutions.com',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Lahore',
    },
    {
      '@type': 'Country',
      name: 'Pakistan',
    },
  ],
  description:
    'Professional branding services including brand strategy, logo design, visual identity systems, typography, color palettes and brand guidelines.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Branding Services',
    itemListElement: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity',
      'Color Palette Development',
      'Typography Systems',
      'Brand Guidelines',
      'Corporate Branding',
      'Social Media Brand Kit',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
      },
    })),
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      question: 'What does branding include?',
      answer:
        'Branding can include brand strategy, positioning, logo design, visual identity, color palette, typography, brand guidelines and branded marketing materials.',
    },
    {
      question: 'Do you provide logo design in Lahore?',
      answer:
        'Yes. Ignisis Solutions provides professional logo design and complete visual identity services for businesses in Lahore and across Pakistan.',
    },
    {
      question: 'What is the difference between a logo and a brand?',
      answer:
        'A logo is one visual element of a brand. A complete brand includes the visual identity, messaging, positioning, personality and overall experience customers associate with the business.',
    },
    {
      question: 'Can you rebrand an existing business?',
      answer:
        'Yes. We can help businesses refresh or completely redesign an existing brand identity while considering their current audience, market position and business goals.',
    },
    {
      question: 'Do you create brand guidelines?',
      answer:
        'Yes. Brand guidelines can define how your logo, colors, typography, imagery and other visual elements should be used consistently across different platforms.',
    },
    {
      question: 'Why is branding important for a business?',
      answer:
        'Strong branding helps businesses communicate their value clearly, create recognition, build trust and maintain a consistent identity across websites, social media, advertising and other customer touchpoints.',
    },
  ],
}

const features = [
  {
    icon: Target,
    title: 'Brand Strategy',
    text: 'We define the direction behind your brand including positioning, audience, personality and the message you want customers to remember.',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    text: 'Distinctive logo concepts designed to represent your business and work effectively across digital and physical applications.',
  },
  {
    icon: Palette,
    title: 'Visual Identity',
    text: 'A cohesive visual system combining colors, typography, imagery and design elements to create a recognizable brand.',
  },
  {
    icon: Layers3,
    title: 'Brand Guidelines',
    text: 'Clear guidelines that explain how your visual identity should be used so your brand stays consistent as your business grows.',
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    text: 'A consistent creative direction for websites, social media, advertising and other customer-facing brand experiences.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Brand Assets',
    text: 'Branded materials designed to keep your campaigns, promotions and communications visually aligned with your identity.',
  },
]

const brandElements = [
  {
    icon: PenTool,
    title: 'Logo & Mark',
    text: 'A recognizable visual symbol that represents your business.',
  },
  {
    icon: Palette,
    title: 'Colors',
    text: 'A purposeful color system that supports recognition and brand personality.',
  },
  {
    icon: BookOpen,
    title: 'Typography',
    text: 'Font choices and hierarchy that create a consistent visual voice.',
  },
  {
    icon: Layers3,
    title: 'Visual System',
    text: 'Supporting design elements that make the brand recognizable beyond the logo.',
  },
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function BrandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="branding" features={features} />
    </>
  )
}
