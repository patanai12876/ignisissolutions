export interface Service {
  id: string
  title: string
  category: string
  icon: string
  shortDescription: string
  fullDescription: string
  features: string[]
  technologies: string[]
  ctaLabel: string
}

export interface Project {
  id: string
  title: string
  category: string
  thumbnail: string
  images: string[]
  description: string
  techStack: string[]
  liveUrl?: string | null
  completedDate: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export interface ContactFormData {
  fullName: string
  email: string
  phone?: string
  subject: string
  message: string
  _honeypot?: string
}

