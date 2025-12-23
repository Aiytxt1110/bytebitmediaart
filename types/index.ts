import React from 'react' // ← เพิ่มบรรทัดนี้

// Service
export interface Service {
  id: number
  title: string
  description: string
  icon?: React.ReactNode // แทน JSX.Element
}

import { LucideIcon } from 'lucide-react';

export type ServiceCategory = {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
};

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export type DesignService = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
};

export type DevService = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export type SaaSService = {
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
  color: string;
  pricing: {
    free: string;
    starter: string;
    pro: string;
  };
};

// About
export interface AboutItem {
  icon: LucideIcon | React.ElementType;
  id: number;
  title: string;
  description: string;
  href?: string;
};

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

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  client?: string;
  year?: string;
  link?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  portfolios: Portfolio[];
  pricing?: {
    title: string;
    price: string;
    features: string[];
  }[];
}
