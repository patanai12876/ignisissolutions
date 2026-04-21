import { Service } from '@/types'

export const services: Service[] = [
  // Business Development
  {
    id: 'business-consultation',
    title: 'Business Consultation',
    category: 'business-development',
    icon: 'Briefcase',
    shortDescription: 'Strategy sessions for business growth and market positioning.',
    fullDescription: 'Comprehensive business consultation services.',
    features: [],
    technologies: ['Strategy', 'Analytics'],
    ctaLabel: 'Get Consultation'
  },
  {
    id: 'sales-strategy',
    title: 'Sales Strategy',
    category: 'business-development',
    icon: 'TrendingUp',
    shortDescription: 'Custom sales funnel design and conversion optimization.',
    fullDescription: 'Transform your sales process.',
    features: [],
    technologies: ['CRM', 'Salesforce'],
    ctaLabel: 'Optimize Sales'
  },
  {
    id: 'growth-planning',
    title: 'Growth Planning',
    category: 'business-development',
    icon: 'Activity',
    shortDescription: 'Quarterly and annual business growth roadmaps.',
    fullDescription: 'Strategic growth planning.',
    features: [],
    technologies: ['Planning'],
    ctaLabel: 'Plan Growth'
  },
  // Digital Marketing
  {
    id: 'seo',
    title: 'SEO',
    category: 'digital-marketing',
    icon: 'Search',
    shortDescription: 'On-page, off-page, technical SEO services.',
    fullDescription: 'Rank higher on Google.',
    features: [],
    technologies: ['Google', 'SEMrush'],
    ctaLabel: 'Boost SEO'
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising',
    category: 'digital-marketing',
    icon: 'DollarSign',
    shortDescription: 'Google Ads, Facebook Ads management.',
    fullDescription: 'High ROI advertising.',
    features: [],
    technologies: ['Google Ads'],
    ctaLabel: 'Run Ads'
  },
  // Development
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'development',
    icon: 'Globe',
    shortDescription: 'Custom websites with Next.js.',
    fullDescription: 'Modern web apps.',
    features: [],
    technologies: ['Next.js', 'React'],
    ctaLabel: 'Build Website'
  },
  // ... (16 more services - abbreviated for brevity)
  {
    id: 'ai-automation',
    title: 'AI Automation',
    category: 'advanced-solutions',
    icon: 'Zap',
    shortDescription: 'Business process automation.',
    fullDescription: 'AI-powered solutions.',
    features: [],
    technologies: ['OpenAI'],
    ctaLabel: 'Automate'
  }
]
