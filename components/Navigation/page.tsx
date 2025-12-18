'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import AuthModal from './AuthModal'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  // useEffect(() => {
  //   let lastScroll = 0
  //   const handleScroll = () => {
  //     const currentScroll = window.pageYOffset
  //     const nav = document.querySelector('nav')

  //     setIsScrolled(currentScroll > 0)

  //     if (currentScroll <= 0) {
  //       nav?.classList.remove('shadow-lg')
  //       return
  //     }

  //     if (currentScroll > lastScroll) {
  //       nav?.style.setProperty('transform', 'translateY(-100%)')
  //     } else {
  //       nav?.style.setProperty('transform', 'translateY(0)')
  //       nav?.classList.add('shadow-lg')
  //     }

  //     lastScroll = currentScroll
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const openAuthModal = () => {
    setIsAuthModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="bg-white dark:bg-slate-800 shadow-sm fixed w-full top-0 z-50 border-b border-gray-200 dark:border-slate-700 transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-16 h-16 drop-shadow-[-10px_3px_5px_rgba(0,0,0,0.8)] rounded-full flex items-center justify-center">
                <Image src="/BBLOGO.svg" alt="Logo" width={100} height={100} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent sm:inline">
                Bytebit 
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hidden sm:inline">
                Media Art
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Sign Up Button */}
              <button 
                onClick={openAuthModal}
                className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition duration-200"
              >
                Sign Up
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 dark:border-slate-700">
              <div className="flex flex-col space-y-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <button 
                  onClick={openAuthModal}
                  className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  )
}