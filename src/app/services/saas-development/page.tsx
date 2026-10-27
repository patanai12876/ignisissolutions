import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  CreditCard,
  Gauge,
  Lock,
  Users,
  Database,
  ShieldCheck,
  Layers3,
} from 'lucide-react'

export const metadata = {
  title: 'SaaS Development Company in Lahore | SaaS Solutions – Ignisis Solutions',
  description:
    'Ignisis Solutions provides custom SaaS development services in Lahore and Pakistan. We build scalable SaaS applications with modern frontend, backend, authentication, subscriptions, payments and cloud architecture.',
  keywords: [
    'SaaS development services',
    'SaaS development company in Lahore',
    'SaaS development company Pakistan',
    'custom SaaS development',
    'SaaS application development',
    'SaaS product development',
    'SaaS developers Lahore',
    'SaaS development services Pakistan',
    'multi tenant SaaS development',
    'SaaS software development',
    'cloud based SaaS development',
    'custom SaaS solutions',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/saas-development',
  },
  openGraph: {
    title: 'SaaS Development Company in Lahore | Ignisis Solutions',
    description:
      'Custom SaaS applications built for scalability, performance and long-term growth. From product architecture to cloud deployment and subscriptions.',
    url: 'https://ignisissolutions.com/services/saas-development',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Company in Lahore | Ignisis Solutions',
    description:
      'Build scalable SaaS products with custom development, secure architecture, subscriptions and cloud deployment.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SaaS Development',
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
    'Custom SaaS development services including SaaS product development, multi-tenant applications, authentication, subscription systems, payment integration and cloud deployment.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SaaS Development Services',
    itemListElement: [
      'Custom SaaS Application Development',
      'Multi-Tenant SaaS Development',
      'SaaS MVP Development',
      'SaaS Product Development',
      'Subscription & Payment Integration',
      'Cloud SaaS Development',
      'SaaS Dashboard Development',
      'SaaS API Development',
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
      question: 'What is SaaS development?',
      answer:
        'SaaS development is the process of building cloud-based software that customers can access through the internet, usually through a web browser and subscription-based model.',
    },
    {
      question: 'How much does SaaS development cost?',
      answer:
        'The cost of SaaS development depends on the product complexity, number of features, user roles, integrations, database requirements, authentication, payment systems and scalability requirements. Contact Ignisis Solutions with your product requirements for a suitable development plan.',
    },
    {
      question: 'Do you build custom SaaS applications?',
      answer:
        'Yes. We build custom SaaS applications around your business model, target users, workflows and technical requirements rather than relying on a generic software structure.',
    },
    {
      question: 'Can you build a SaaS MVP?',
      answer:
        'Yes. We can help businesses and startups turn an idea into a functional SaaS MVP with the core features required to validate the product before investing in larger-scale development.',
    },
    {
      question: 'Do you develop multi-tenant SaaS applications?',
      answer:
        'Yes. SaaS platforms can be designed with multi-tenant architecture so multiple customers can use the same application while their data and access remain properly separated.',
    },
    {
      question: 'Can you integrate subscriptions and online payments?',
      answer:
        'Yes. Depending on the project and target market, subscription plans, billing workflows and payment gateway integrations can be included in the SaaS application.',
    },
  ],
}

const features = [
  {
    icon: Code2,
    title: 'Custom SaaS Development',
    text: 'We build SaaS products around your business model, users, workflows and product requirements instead of adapting your idea to an existing template.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Architecture',
    text: 'Build platforms where multiple businesses or customers can use the same application while keeping their data and access properly separated.',
  },
  {
    icon: Lock,
    title: 'Authentication & User Roles',
    text: 'Secure user authentication, role-based permissions and account management can be built around the needs of your SaaS product.',
  },
  {
    icon: CreditCard,
    title: 'Subscriptions & Payments',
    text: 'Create subscription-based products with plans, billing workflows and payment integrations designed around your revenue model.',
  },
  {
    icon: Gauge,
    title: 'Performance & Scalability',
    text: 'We structure your SaaS application so it can support growing users, increasing data and additional features as your product evolves.',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    text: 'From development to production deployment, we help establish a reliable cloud environment for your SaaS application.',
  },
]

const saasTypes = [
  'B2B SaaS Platforms',
  'B2C SaaS Applications',
  'Business Management Software',
  'CRM & Sales Platforms',
  'Project Management Tools',
  'Analytics Dashboards',
  'Booking & Management Platforms',
  'AI-Powered SaaS Products',
]

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function SaaSDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="saas-development" features={features} />
    </>
  )
}
