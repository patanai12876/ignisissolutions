import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignisis Solutions',
  description: 'Business Consultancy & Digital Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white`}>

        <div className="min-h-screen flex flex-col">

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  )
}