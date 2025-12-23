'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import LiveChatWidget from './LiveChatWidget'

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      action: () => window.location.href = 'mailto:bytebitmedart@gmail.com',
      link: 'bytebitmedart@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: 'Messenger',
      action: () => window.open('https://m.me/profile.php?id=61568399947597&locale=th_TH', '_blank'),
      link: 'BytebitMediaArt Page',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone/WhatsApp',
      action: () => window.open('https://wa.me/8562029009976', '_blank'),
      link: '+856 20 2900 9976',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      action: () => window.open('https://maps.google.com/?q=XMR9+64J,Vientiane,Laos', '_blank'),
      link: 'XMR9+64J, Vientiane, Laos',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-purple-600 dark:text-purple-400 font-semibold text-lg tracking-wider uppercase">
                Get In Touch
              </span>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2"></div>
            </div>
            
            <h2 className="flex items-center flex-wrap text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Let's Work &nbsp;
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Have a project in mind? We're here to bring your ideas to life. 
              Choose your preferred way to connect and let's create something amazing together.
            </p>
          </div>

          {/* Right Column - Contact Options */}
          <div className="space-y-4">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={option.action}
                className="group relative cursor-pointer"
              >
                <div className={`
                  bg-white dark:bg-slate-800 rounded-2xl p-6 
                  border border-gray-200 dark:border-slate-700
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index 
                    ? 'shadow-2xl shadow-purple-500/20 scale-[1.02] -translate-y-1' 
                    : 'shadow-lg hover:shadow-xl'
                  }
                `}>
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className={`
                      relative w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                      bg-gradient-to-br ${option.color}
                      transition-transform duration-300 ease-out
                      ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}
                    `}>
                      <span className="text-white relative z-10">
                        {option.icon}
                      </span>
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-lg">
                        {option.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 truncate">
                        {option.link}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className={`
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'}
                    `}>
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Gradient Border on Hover */}
                  {hoveredIndex === index && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${option.color} opacity-20 -z-10 blur-xl`}></div>
                  )}
                </div>
              </div>
            ))}

            {/* Response Time Badge */}
            <div className="flex items-center justify-center gap-2 pt-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>We typically respond within 24 hours</span>
            </div>
          </div>
          {/* Live Chat Widget */}
          <LiveChatWidget />
        </div>
      </div>
    </section>
  )
}