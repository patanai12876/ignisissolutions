'use client'

import { useEffect, useState } from 'react'

const reviews = [
  { quote: 'Working with Ignisis Solutions was a smooth and professional experience. They understood our requirements quickly and delivered a modern digital presence that represents our construction business really well.', name: 'Seco', role: 'Construction Company' },
  { quote: 'Ignisis Solutions did an excellent job understanding our brand and presenting our E-bike business in a clean and modern way. The communication was clear throughout the project and we are very happy with the final result.', name: 'Evoo', role: 'E-Bikes Company' },
  { quote: 'The team understood our business and created a professional online presence that reflects the quality of our tensile shade solutions. The design is clean, modern and easy for our customers to navigate.', name: 'Tensile Shades', role: 'Tensile Shades Company' },
  { quote: 'Ignisis Solutions turned our ideas into a professional digital experience that feels both modern and practical. They were responsive, creative and paid attention to the small details that made a big difference.', name: 'TTT Global Services', role: 'International Company' },
  { quote: 'From the initial discussion to the final delivery, the process was straightforward and well organized. The team brought a fresh perspective to our brand and delivered a website that looks professional and works beautifully.', name: 'M.Burhan', role: 'Growing Business' },
]

function GoogleMark() {
  return <svg className="google-mark" viewBox="0 0 48 48" role="img" aria-label="Google"><path fill="#4285F4" d="M43.6 20.1H42V20H24v8h11.3A12 12 0 0 1 24 36a12 12 0 1 1 8-20.9l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.6-.4-3.9Z"/><path fill="#34A853" d="M6.3 14.7 12.9 19A12 12 0 0 1 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7A20 20 0 0 0 6.3 14.7Z"/><path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44Z"/><path fill="#EA4335" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C41 35.4 44 30 44 24c0-1.3-.1-2.6-.4-3.9Z"/></svg>
}

export default function Testimonials({ className = '' }: { className?: string }) {
 const [index, setIndex] = useState(0)
 const [paused, setPaused] = useState(false)
 const [focused, setFocused] = useState(false)
 const [optedIn, setOptedIn] = useState(false)
 useEffect(() => {
   const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
   if (reducedMotion.matches && !optedIn) setPaused(true)
   if (paused || focused || (reducedMotion.matches && !optedIn)) return
   const timer = window.setInterval(() => setIndex((current) => (current + 1) % reviews.length), 4000)
   return () => window.clearInterval(timer)
 }, [paused, focused, optedIn])
 const select = (next: number) => setIndex((next + reviews.length) % reviews.length)

 return <section className={`section reviews ${className}`.trim()} id="reviews"><div className="section-inner">
   <div className="review-top"><div className="section-heading"><span className="eyebrow">Client reviews</span><h2>What our clients say.</h2></div><div className="rating"><GoogleMark /><span className="rating-label">Google reviews</span><b aria-label="5 out of 5 stars">★★★★★</b></div></div>
   <div className={`review-carousel ${optedIn ? 'review-motion-opt-in' : ''}`} aria-label="Client review carousel" onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false) }}>
     <div className="review-stage" aria-live="off">{reviews.map((review, i) => <article className={`review-card ${i === index ? 'is-active' : ''}`} aria-hidden={i !== index} key={review.name}><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{review.quote}”</blockquote><div className="review-person"><span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.role}</small></span></div></article>)}</div>
     <div className="review-controls" aria-label="Review controls"><button className="review-control" type="button" aria-label="Previous review" onClick={() => select(index - 1)}>←</button><div className="review-dots" aria-label="Choose a review">{reviews.map((review, i) => <button className="review-dot" type="button" key={review.name} aria-label={`Show review ${i + 1}`} aria-current={i === index} onClick={() => select(i)} />)}</div><button className="review-control" type="button" aria-label="Next review" onClick={() => select(index + 1)}>→</button><button className="review-control review-pause" type="button" aria-pressed={paused} onClick={() => { if (paused) setOptedIn(true); setPaused((current) => !current) }}>{paused ? 'Play' : 'Pause'}</button></div>
   </div>
 </div></section>
}
