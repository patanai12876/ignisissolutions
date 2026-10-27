import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  BarChart3,
  Target,
  Search,
  Megaphone,
  TrendingUp,
  Users,
  MousePointerClick,
  Globe,
} from 'lucide-react'

export const metadata = {
  title: 'Digital Marketing Agency in Lahore | SEO, Google & Meta Ads – Ignisis Solutions',
  description:
    'Ignisis Solutions is a digital marketing agency in Lahore, Pakistan offering SEO, Google Ads, Meta Ads, social media marketing and performance-driven digital marketing strategies to help businesses generate leads and grow online.',
  keywords: [
    'digital marketing agency in Lahore',
    'digital marketing services Lahore',
    'digital marketing company Pakistan',
    'SEO services Lahore',
    'Google Ads agency Lahore',
    'Meta Ads agency Lahore',
    'Facebook Ads agency Lahore',
    'social media marketing Lahore',
    'performance marketing Pakistan',
    'online marketing agency Lahore',
    'lead generation services Lahore',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Lahore | Ignisis Solutions',
    description:
      'Performance-driven digital marketing including SEO, Google Ads, Meta Ads and social media marketing designed to generate qualified leads and business growth.',
    url: 'https://ignisissolutions.com/services/digital-marketing',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Lahore | Ignisis Solutions',
    description:
      'SEO, Google Ads, Meta Ads and social media marketing focused on real business growth.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Marketing',
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
    'Digital marketing services including SEO, Google Ads, Meta Ads, social media marketing, content strategy and performance marketing for businesses.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      'Search Engine Optimization',
      'Google Ads',
      'Meta Ads',
      'Social Media Marketing',
      'Paid Advertising',
      'Lead Generation',
      'Content Marketing',
      'Performance Marketing',
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
      question: 'What digital marketing services do you offer?',
      answer:
        'Ignisis Solutions provides SEO, Google Ads, Meta Ads, social media marketing, paid advertising, lead generation, content strategy and performance marketing services.',
    },
    {
      question: 'Do you provide SEO services in Lahore?',
      answer:
        'Yes. We provide SEO services for businesses in Lahore and across Pakistan, focusing on technical SEO, on-page optimization, keyword targeting, content and search visibility.',
    },
    {
      question: 'Do you manage Google Ads campaigns?',
      answer:
        'Yes. We can plan, set up, manage and optimize Google Ads campaigns based on your business objectives, target audience and available advertising budget.',
    },
    {
      question: 'Do you offer Facebook and Instagram advertising?',
      answer:
        'Yes. We manage Meta advertising campaigns across Facebook and Instagram, including campaign strategy, audience targeting, creative direction, optimization and performance tracking.',
    },
    {
      question: 'How long does digital marketing take to show results?',
      answer:
        'Results depend on the service, competition, industry, budget and starting point. Paid advertising can generate data and leads quickly, while SEO generally requires consistent optimization over a longer period.',
    },
    {
      question: 'Can you create a complete digital marketing strategy for my business?',
      answer:
        'Yes. We can evaluate your current online presence, identify opportunities and create a digital marketing strategy covering SEO, paid advertising, social media and conversion-focused improvements.',
    },
  ],
}

const features = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    text: 'Improve your website visibility in search engines through technical SEO, on-page optimization, keyword targeting and content strategy.',
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads',
    text: 'Create targeted Google Ads campaigns designed to reach people actively searching for your products or services.',
  },
  {
    icon: Megaphone,
    title: 'Meta Ads',
    text: 'Reach relevant audiences through Facebook and Instagram advertising with structured campaigns and continuous optimization.',
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    text: 'Build a consistent social media presence through strategic content, audience engagement and platform-specific marketing.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    text: 'Turn digital traffic into potential customers through targeted campaigns, landing pages, offers and conversion-focused strategies.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    text: 'Monitor campaigns and business metrics to understand what is working and make better marketing decisions.',
  },
]

const channels = [
  'Search Engine Optimization',
  'Google Search Ads',
  'Google Display Ads',
  'Facebook Advertising',
  'Instagram Advertising',
  'Social Media Marketing',
  'Content Marketing',
  'Lead Generation',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="digital-marketing" features={features} />
    </>
  )
}
