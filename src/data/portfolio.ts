import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'tradesync-platform',
    title: 'TradeSync - Copy Trading Platform',
    category: 'web',
    thumbnail: '/images/portfolio/tradesync.jpg',
    images: ['/images/portfolio/tradesync-1.jpg', '/images/portfolio/tradesync-2.jpg', '/images/portfolio/tradesync-3.jpg'],
    description: 'Professional copy trading platform enabling 150K+ traders to replicate professional trading strategies. Features real-time trade copying, risk management, live analytics, and 24/7 support. Built with Next.js and modern fintech integrations.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Real-time APIs'],
    liveUrl: 'https://trade-sync-seven.vercel.app',
    completedDate: '2026-02-15'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'web',
    thumbnail: '/images/portfolio/ecommerce.jpg',
    images: ['/images/portfolio/ecommerce-1.jpg', '/images/portfolio/ecommerce-2.jpg'],
    description: 'Complete e-commerce solution built with Next.js 14, Tailwind CSS, and Stripe integration. Features include product catalog, shopping cart, checkout, and admin dashboard.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Stripe', 'Prisma'],
    liveUrl: 'https://ecommerce-demo.ignisis.solutions',
    completedDate: '2024-03-15'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'web',
    thumbnail: '/images/portfolio/saas-dashboard.jpg',
    images: ['/images/portfolio/saas-1.jpg', '/images/portfolio/saas-2.jpg'],
    description: 'Modern SaaS dashboard with real-time analytics, user management, and subscription billing. Built for scalability and performance.',
    techStack: ['Next.js', 'Shadcn/ui', 'Chart.js', 'Supabase'],
    liveUrl: 'https://saas-demo.ignisis.solutions',
    completedDate: '2024-02-28'
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    category: 'mobile',
    thumbnail: '/images/portfolio/mobile-banking.jpg',
    images: ['/images/portfolio/mobile-1.jpg', '/images/portfolio/mobile-2.jpg'],
    description: 'React Native mobile banking application with biometric authentication, real-time transactions, and push notifications.',
    techStack: ['React Native', 'Expo', 'Firebase', 'Stripe'],
    liveUrl: null,
    completedDate: '2024-01-20'
  },
  {
    id: 'brand-identity',
    title: 'TechCorp Brand Identity',
    category: 'branding',
    thumbnail: '/images/portfolio/techcorp-brand.jpg',
    images: ['/images/portfolio/techcorp-1.jpg', '/images/portfolio/techcorp-2.jpg'],
    description: 'Complete brand identity package for TechCorp including logo design, color palette, typography system, and brand guidelines.',
    techStack: ['Figma', 'Adobe Illustrator'],
    liveUrl: null,
    completedDate: '2023-12-10'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Support Bot',
    category: 'ai',
    thumbnail: '/images/portfolio/ai-chatbot.jpg',
    images: ['/images/portfolio/ai-1.jpg', '/images/portfolio/ai-2.jpg'],
    description: 'AI-powered customer support chatbot integrated with GPT-4. Handles 80% of customer inquiries autonomously.',
    techStack: ['Next.js', 'OpenAI GPT-4', 'Vercel AI SDK', 'Supabase'],
    liveUrl: 'https://ai-chatbot.ignisis.solutions',
    completedDate: '2024-04-05'
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracker App',
    category: 'mobile',
    thumbnail: '/images/portfolio/fitness-app.jpg',
    images: ['/images/portfolio/fitness-1.jpg', '/images/portfolio/fitness-2.jpg'],
    description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
    techStack: ['Flutter', 'Firebase', 'Google Fit API'],
    liveUrl: null,
    completedDate: '2024-03-10'
  }
]

