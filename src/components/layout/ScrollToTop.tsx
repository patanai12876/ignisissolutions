'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 360)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-5 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-[#66d4eb]/50 bg-[#17A2C7] text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition hover:scale-105 hover:bg-[#48c4e0] active:scale-95"
    >
      <ChevronUp size={18} />
    </button>
  )
}
