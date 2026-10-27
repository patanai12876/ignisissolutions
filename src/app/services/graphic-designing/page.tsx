import Link from 'next/link'
import ServicePage from '@/components/services/ServicePage'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Palette,
  Layers3,
  Image,
  FileText,
  Presentation,
  Megaphone,
  Sparkles,
  PenTool,
  Monitor,
  Printer,
} from 'lucide-react'

export const metadata = {
  title:
    'Graphic Designing Services in Lahore | Creative Design Agency – Ignisis Solutions',

  description:
    'Ignisis Solutions provides professional graphic designing services in Lahore, Pakistan, including social media designs, marketing creatives, brochures, banners, presentations, packaging and branded visual content.',

  keywords: [
    'graphic designing services',
    'graphic design company in Lahore',
    'graphic designing agency Lahore',
    'graphic designer Lahore',
    'graphic design services Pakistan',
    'professional graphic design Lahore',
    'social media graphic design',
    'marketing graphic design',
    'brochure design Lahore',
    'banner design Lahore',
    'presentation design services',
    'branding and graphic design',
    'creative design agency Lahore',
    'Ignisis Solutions',
  ],

  alternates: {
    canonical: 'https://ignisissolutions.com/services/graphic-designing',
  },

  openGraph: {
    title: 'Graphic Designing Services in Lahore | Ignisis Solutions',
    description:
      'Professional graphic design services for social media, marketing, print and digital platforms. Creative, consistent and designed around your brand.',
    url: 'https://ignisissolutions.com/services/graphic-designing',
    siteName: 'Ignisis Solutions',
    type: 'website',
    locale: 'en_PK',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Graphic Designing Services in Lahore | Ignisis Solutions',
    description:
      'Creative and professional graphic design services for businesses across Lahore and Pakistan.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Graphic Designing',
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
    'Professional graphic designing services including social media graphics, marketing creatives, brochures, banners, presentations, packaging and branded visual content.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Graphic Designing Services',
    itemListElement: [
      'Social Media Graphics',
      'Marketing Creatives',
      'Brochure Design',
      'Banner Design',
      'Presentation Design',
      'Print Design',
      'Packaging Design',
      'Digital Advertising Creatives',
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
      question: 'What graphic designing services do you offer?',
      answer:
        'We provide social media graphics, advertising creatives, brochures, banners, presentations, print materials, packaging designs and other branded visual content for businesses.',
    },
    {
      question: 'Do you provide social media graphic design?',
      answer:
        'Yes. We create branded social media posts, promotional graphics, carousel designs, campaign creatives and advertising visuals for different social platforms.',
    },
    {
      question: 'Can you design marketing materials for my business?',
      answer:
        'Yes. We design marketing materials such as brochures, flyers, banners, promotional graphics, presentations and digital advertising creatives according to your brand identity.',
    },
    {
      question: 'Do you follow existing brand guidelines?',
      answer:
        'Yes. We can work with your existing brand guidelines including your logo, colors, typography and visual style to maintain consistency across all designs.',
    },
    {
      question: 'Can you create designs for both digital and print?',
      answer:
        'Yes. We create graphics for websites, social media, digital advertising and other online platforms as well as print materials such as brochures, banners, flyers and business collateral.',
    },
    {
      question: 'How much do graphic design services cost in Lahore?',
      answer:
        'Pricing depends on the type, quantity and complexity of the designs required. Contact Ignisis Solutions with your requirements to discuss the appropriate design solution and pricing.',
    },
  ],
}

const features = [
  {
    icon: Palette,
    title: 'Creative Visual Design',
    text: 'We create visually engaging designs that communicate your message clearly while maintaining a professional and consistent brand appearance.',
  },
  {
    icon: Image,
    title: 'Social Media Graphics',
    text: 'Professional social media posts, promotional graphics, carousel designs and campaign creatives designed around your brand.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Creatives',
    text: 'Attention-grabbing graphics for campaigns, advertisements, promotions and digital marketing activities.',
  },
  {
    icon: FileText,
    title: 'Business & Print Design',
    text: 'Brochures, flyers, banners, business documents and other professional materials designed for your business.',
  },
  {
    icon: Presentation,
    title: 'Presentation Design',
    text: 'Professional presentations and pitch decks that make your information easier to understand and more visually engaging.',
  },
  {
    icon: Sparkles,
    title: 'Consistent Branding',
    text: 'Every design follows your visual identity so your business looks consistent across digital and physical touchpoints.',
  },
]

const designTypes = [
  'Social Media Posts',
  'Social Media Carousels',
  'Digital Ad Creatives',
  'Brochures & Flyers',
  'Business Banners',
  'Presentation & Pitch Decks',
  'Marketing Materials',
  'Packaging Design',
  'Website Graphics',
  'Promotional Designs',
  'Business Collateral',
  'Print-Ready Designs',
]


const faqs = faqJsonLd.mainEntity.map((item) => ({
  question: item.question,
  answer: item.answer,
}))

export default function GraphicDesigningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePage service="graphic-designing" features={features} />
    </>
  )
}
