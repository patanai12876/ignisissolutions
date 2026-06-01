import { Project } from '@/types'

export const projects: Project[] = [
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