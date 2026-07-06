import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'brew-and-co',
    title: 'Brew and Co - Coffee Ordering Platform',
    category: 'web',
    thumbnail: '/brew/1.png',
    images: ['/brew/1.png', '/brew/2.png', '/brew/3.png', '/brew/4.png'],
    description: 'Brew and Co is a coffee ordering platform that lets users browse the menu, select drinks and snacks, and place orders with a polished, user-friendly interface.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'API Integration'],
    liveUrl: 'https://brew-and-co-acyz.vercel.app/',
    completedDate: '2026-06-10'
  },
  {
    id: 'fitpro-gym',
    title: 'FitPro - Premium Gym & Fitness Platform',
    category: 'web',
    thumbnail: '/fitpro/fitpro1.png',
    images: ['/fitpro/fitpro1.png', '/fitpro/2.png', '/fitpro/3.png', '/fitpro/4.png ' , '/fitpro/5.png', '/fitpro/6.png', '/fitpro/7.png', '/fitpro/8.png', '/fitpro/9.png', '/fitpro/10.png',],
    description: 'Modern gym and fitness platform with dynamic class scheduling, expert trainer profiles, and integrated contact system. Features real-time backend data fetching, responsive design, and seamless user experience. Built for fitness enthusiasts seeking professional training and community support.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Backend API Integration', 'Vercel'],
    liveUrl: 'https://fit-pro-frontend.vercel.app/',
    completedDate: '2026-05-20'
  },
  {
    id: 'tradesync-platform',
    title: 'TradeSync - Copy Trading Platform',
    category: 'web',
    thumbnail: '/images/Tradesyncc.png',
    images: ['/images/Tradesyncc.png', '/images/T2.png', '/images/T3.png', '/images/T4.png', '/images/T5.png'],
    description: 'Professional copy trading platform enabling 150K+ traders to replicate professional trading strategies. Features real-time trade copying, risk management, live analytics, and 24/7 support. Built with Next.js and modern fintech integrations.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Real-time APIs'],
    liveUrl: 'https://trade-sync-seven.vercel.app',
    completedDate: '2026-02-15'
  },
]