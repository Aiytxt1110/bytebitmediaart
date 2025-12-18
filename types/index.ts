import React from 'react' // ← เพิ่มบรรทัดนี้

// Service
export interface Service {
  id: number
  title: string
  description: string
  icon?: React.ReactNode // แทน JSX.Element
}

// Portfolio / Case Studies
export type PortfolioCategory = 'Design' | 'Development' | 'Social Media'

export interface PortfolioItem {
  id: number
  title: string
  category: PortfolioCategory
  image: string
  link: string
}

// Testimonials / Clients
export interface Testimonial {
  id: number
  name: string
  company: string
  feedback: string
}

// Blog / Insights
export interface BlogPost {
  id: number
  title: string
  description: string
  image: string
  link: string
}

// Contact Form
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}
