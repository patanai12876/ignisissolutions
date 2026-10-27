import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  RefreshCw,
  Search,
  Lightbulb,
  Zap,
} from 'lucide-react'

export const metadata = {
  title: 'Digital Business Growth Services in Lahore | Ignisis Solutions',
  description:
    'Ignisis Solutions helps businesses grow through digital business growth strategies, customer acquisition, conversion optimization, retention, analytics and performance-driven digital solutions in Lahore and Pakistan.',
  keywords: [
    'digital business growth services',
    'business growth services Lahore',
    'digital growth agency Lahore',
    'business growth agency Pakistan',
    'digital business growth strategy',
    'customer acquisition strategy',
    'conversion rate optimization',
    'business growth consultant Lahore',
    'digital growth solutions Pakistan',
    'online business growth services',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/digital-business-growth',
  },
  openGraph: {
    title: 'Digital Business Growth Services in Lahore | Ignisis Solutions',
    description:
      'Strategic digital growth solutions combining acquisition, conversion, retention and optimization to help businesses grow consistently.',
    url: 'https://ignisissolutions.com/services/digital-business-growth',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Business Growth Services in Lahore | Ignisis Solutions',
    description:
      'Strategic digital growth solutions designed to help businesses attract customers, improve conversions and grow consistently.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Business Growth',
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
    'Digital business growth services including growth strategy, customer acquisition, conversion optimization, retention, analytics and performance improvement.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Business Growth Services',
    itemListElement: [
      'Growth Strategy',
      'Customer Acquisition',
      'Conversion Rate Optimization',
      'Customer Retention',
      'Analytics and KPI Tracking',
      'Digital Performance Optimization',
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
      question: 'What is digital business growth?',
      answer:
        'Digital business growth is the process of using websites, digital marketing, analytics, conversion optimization and customer retention strategies to attract more customers and grow business revenue.',
    },
    {
      question: 'How can digital growth help my business?',
      answer:
        'A structured digital growth strategy can help your business attract the right audience, generate qualified leads, improve website conversions, retain customers and make better decisions using performance data.',
    },
    {
      question: 'Do you provide digital business growth services in Lahore?',
      answer:
        'Yes. Ignisis Solutions provides digital business growth services for businesses in Lahore and across Pakistan, with strategies tailored to the company, audience and business goals.',
    },
    {
      question: 'Do you provide customer acquisition strategies?',
      answer:
        'Yes. We develop customer acquisition strategies using digital channels such as search, social media, paid advertising, content and optimized websites depending on the business and target audience.',
    },
    {
      question: 'Can you improve my website conversion rate?',
      answer:
        'Yes. We can review your website, user journey, messaging, calls to action and overall experience to identify opportunities for improving conversions.',
    },
    {
      question: 'Do you track business growth and performance?',
      answer:
        'Yes. We use relevant analytics and key performance indicators to monitor growth, understand what is working and identify opportunities for ongoing improvement.',
    },
  ],
}

const features = [
  {
    icon: Target,
    title: 'Growth Strategy',
    text: 'We identify the biggest growth opportunities in your digital presence and create a practical strategy around your business goals.',
  },
  {
    icon: Users,
    title: 'Customer Acquisition',
    text: 'Reach the right audience through targeted digital channels designed to generate qualified traffic, leads and customers.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    text: 'Improve the customer journey, messaging and website experience so more of your existing traffic turns into meaningful business results.',
  },
  {
    icon: RefreshCw,
    title: 'Customer Retention',
    text: 'Build strategies that encourage existing customers to return, engage with your business and increase their long-term value.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & KPIs',
    text: 'Track the metrics that actually matter so business decisions are based on performance data instead of assumptions.',
  },
  {
    icon: Zap,
    title: 'Continuous Optimization',
    text: 'Digital growth is ongoing. We review performance, identify opportunities and refine strategies as your business evolves.',
  },
]

const growthAreas = [
  'Growth strategy and planning',
  'Customer acquisition',
  'Lead generation',
  'Conversion rate optimization',
  'Website performance optimization',
  'Digital marketing strategy',
  'Customer retention',
  'Analytics and KPI tracking',
  'User journey optimization',
  'Digital product optimization',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function DigitalBusinessGrowthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="digital-business-growth" features={features} />
    </>
  )
}
