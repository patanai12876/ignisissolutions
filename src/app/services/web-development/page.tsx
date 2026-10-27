import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export const metadata = {
  title: 'Web Development Company in Lahore | Custom Websites – Ignisis Solutions',
  description:
    'Ignisis Solutions is a web development company in Lahore, Pakistan, building fast, responsive and SEO-friendly websites and web apps with Next.js, React and TypeScript. Get a custom website that converts visitors into customers.',
  keywords: [
    'web development services',
    'web development company in Lahore',
    'website development Lahore',
    'custom website development Pakistan',
    'Next.js development company',
    'React development services',
    'SEO friendly website design',
    'responsive web development',
    'business website development Lahore',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/web-development',
  },
  openGraph: {
    title: 'Web Development Services in Lahore | Ignisis Solutions',
    description:
      'Custom, fast and SEO-friendly websites and web applications built around your business goals. Serving businesses across Lahore and Pakistan.',
    url: 'https://ignisissolutions.com/services/web-development',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services in Lahore | Ignisis Solutions',
    description:
      'Custom, fast and SEO-friendly websites and web applications built around your business goals.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'Organization',
    name: 'Ignisis Solutions',
    url: 'https://ignisissolutions.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Lahore',
  },
  description:
    'Custom web development services including business websites, web applications, and SaaS platforms built with Next.js, React and TypeScript.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      'Business Websites',
      'Corporate Websites',
      'Landing Pages',
      'Portfolio Websites',
      'Web Applications',
      'E-commerce Websites',
      'SaaS Platforms',
      'Website Redesigns',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      question: 'How much does a website cost in Lahore?',
      answer:
        'Website development costs depend on the number of pages, features, integrations and overall project requirements. Contact us with your requirements and we can discuss the right solution and pricing for your business.',
    },
    {
      question: 'Do you build SEO-friendly websites?',
      answer:
        'Yes. Every website we build is developed on an SEO-friendly technical foundation, including semantic HTML, structured metadata, responsive design, clean URL structures and fast page performance.',
    },
    {
      question: 'Do you develop websites for mobile devices?',
      answer:
        'Yes. Every website is developed with fully responsive layouts so it works properly across mobile phones, tablets and desktop screens.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Yes. We redesign existing websites to improve visual design, responsiveness, performance, user experience and technical SEO foundation.',
    },
    {
      question: 'Which technologies do you use for web development?',
      answer:
        'Depending on the project, we use modern technologies such as Next.js, React, TypeScript, Tailwind CSS, Node.js and PostgreSQL to build fast, scalable websites.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'Timelines vary by project scope. A simple business website typically takes a few weeks, while larger web applications and SaaS platforms take longer. We share a clear timeline after the planning stage.',
    },
  ],
}

const features = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    text: 'We build websites around your business goals and audience instead of forcing your brand into a pre-made template.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    text: 'Every website is designed and developed to work smoothly across desktops, tablets and mobile devices.',
  },
  {
    icon: Search,
    title: 'SEO-Friendly Development',
    text: 'We build with clean semantic HTML, proper metadata, structured content and a strong technical SEO foundation.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    text: 'Optimized assets, efficient code and modern development practices keep your pages loading quickly.',
  },
  {
    icon: Gauge,
    title: 'Scalable Architecture',
    text: 'Our websites are structured so they can grow with your business and support future features.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    text: 'We follow modern development practices to create stable, maintainable and reliable digital experiences.',
  },
]

const technologies = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']


const faqs = faqJsonLd.mainEntity.map((item) => ({ question: item.question, answer: item.answer }))

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="web-development" features={features} />
    </>
  )
}
