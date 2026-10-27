import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CalendarDays,
  MessageCircle,
  BarChart3,
  Palette,
  Target,
  TrendingUp,
  Users,
  Megaphone,
} from 'lucide-react'

export const metadata = {
  title: 'Social Media Management in Lahore | Social Media Marketing – Ignisis Solutions',
  description:
    'Ignisis Solutions provides professional social media management and social media marketing services in Lahore, Pakistan. We create content, manage social platforms, engage audiences and build strategies that support business growth.',
  keywords: [
    'social media management',
    'social media management Lahore',
    'social media marketing Lahore',
    'social media marketing services Pakistan',
    'social media agency Lahore',
    'social media management services',
    'Instagram management Lahore',
    'Facebook marketing Lahore',
    'social media content creation',
    'social media strategy',
    'social media advertising',
    'Ignisis Solutions',
  ],
  alternates: {
    canonical: 'https://ignisissolutions.com/services/social-media-management',
  },
  openGraph: {
    title: 'Social Media Management Services in Lahore | Ignisis Solutions',
    description:
      'Professional social media management, content strategy, audience engagement and social media marketing for businesses in Lahore and across Pakistan.',
    url: 'https://ignisissolutions.com/services/social-media-management',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Services in Lahore | Ignisis Solutions',
    description:
      'Strategic social media management and content marketing designed to build your online presence and support business growth.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Social Media Management',
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
    'Professional social media management services including social media strategy, content creation, publishing, audience engagement, analytics and social media advertising.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Management Services',
    itemListElement: [
      'Social Media Strategy',
      'Content Planning',
      'Social Media Content Creation',
      'Instagram Management',
      'Facebook Management',
      'Community Management',
      'Social Media Advertising',
      'Analytics and Reporting',
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
      question: 'What does social media management include?',
      answer:
        'Social media management can include social media strategy, content planning, post and creative development, scheduling, publishing, audience engagement, community management, analytics and ongoing optimization.',
    },
    {
      question: 'Which social media platforms do you manage?',
      answer:
        'Depending on your business and target audience, we can manage platforms such as Instagram, Facebook, LinkedIn and other relevant social media channels.',
    },
    {
      question: 'Do you create social media content?',
      answer:
        'Yes. We can plan and create social media posts, captions, promotional creatives and other content based on your brand identity, audience and marketing goals.',
    },
    {
      question: 'Can you manage Instagram and Facebook pages?',
      answer:
        'Yes. We provide Instagram and Facebook management including content planning, publishing, engagement, performance monitoring and campaign support.',
    },
    {
      question: 'Do you provide social media advertising?',
      answer:
        'Yes. Social media advertising can be included as part of a broader social media marketing strategy, including campaign setup, audience targeting, creative direction and performance optimization.',
    },
    {
      question: 'How often should a business post on social media?',
      answer:
        'Posting frequency depends on the platform, industry, audience and available content. We develop a practical content schedule based on your business goals rather than posting simply for the sake of frequency.',
    },
  ],
}

const features = [
  {
    icon: Target,
    title: 'Social Media Strategy',
    text: 'We develop a clear social media strategy based on your business goals, audience, industry and the platforms where your customers spend time.',
  },
  {
    icon: CalendarDays,
    title: 'Content Planning',
    text: 'A structured content calendar keeps your social media presence consistent, organized and aligned with campaigns, offers and business priorities.',
  },
  {
    icon: Palette,
    title: 'Content Creation',
    text: 'We create branded social media content including posts, promotional creatives, captions and campaign-focused visuals.',
  },
  {
    icon: MessageCircle,
    title: 'Community Management',
    text: 'We help manage comments, messages and audience interactions so your business can maintain a responsive and professional online presence.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Advertising',
    text: 'Paid social campaigns can help reach targeted audiences, generate leads and promote specific products, services or offers.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    text: 'We monitor important performance indicators and use insights to improve content, campaigns and your overall social media strategy.',
  },
]

const platforms = [
  {
    icon: MessageCircle,
    title: 'Instagram',
    text: 'Content, Reels, Stories, engagement and promotional campaigns.',
  },
  {
    icon: Users,
    title: 'Facebook',
    text: 'Business page management, content publishing and audience engagement.',
  },
  {
    icon: TrendingUp,
    title: 'LinkedIn',
    text: 'Professional content and brand positioning for B2B businesses.',
  },
  {
    icon: Megaphone,
    title: 'Paid Social',
    text: 'Targeted advertising campaigns designed around specific business objectives.',
  },
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function SocialMediaManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="social-media-management" features={features} />
    </>
  )
}
