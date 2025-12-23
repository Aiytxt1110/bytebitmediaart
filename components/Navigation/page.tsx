'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import AuthModal from './AuthModal'
import { useAuth } from '@/context/AuthContext'
import { User as UserIcon } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, role } = useAuth()

  const router = useRouter()
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const openAuthModal = () => {
    setIsAuthModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.substring(2)

      if (pathname !== '/') {
        router.push(href)
        setIsMobileMenuOpen(false)
        return
      }

      const element = document.getElementById(id)

      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementHeight = elementRect.height
        const viewportHeight = window.innerHeight

        const elementTop = elementRect.top + window.pageYOffset
        const centerPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2)

        window.scrollTo({
          top: centerPosition,
          behavior: 'smooth'
        })
      }
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)

        if (element) {
          const elementRect = element.getBoundingClientRect()
          const elementHeight = elementRect.height
          const viewportHeight = window.innerHeight

          const elementTop = elementRect.top + window.pageYOffset
          const centerPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2)

          window.scrollTo({
            top: centerPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/#services', label: 'Services' },
    { href: '/services/saas', label: 'Saas' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="h-[80px] bg-blue-900 dark:bg-slate-800 shadow-sm fixed w-full top-0 z-30 border-b border-gray-200 dark:border-slate-700 transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <Image src="/BBLOGO.svg" alt="Logo" width={100} height={100} onContextMenu={(e) => e.preventDefault()} />
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-1">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Sign Up Button */}
              {/* Sign Up / Profile Button */}
              {user ? (
                <Link
                  href={role === 'admin' ? `/${user.uid}` : '/dashboard'}
                  className="hidden sm:flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition duration-200"
                >
                  <UserIcon className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
              ) : (
                <button
                  onClick={openAuthModal}
                  className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition duration-200"
                >
                  Sign Up
                </button>
              )}

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
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-800 shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-slate-700">
            {user ? (
              <Link
                href={role === 'admin' ? `/${user.uid}` : '/dashboard'}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex justify-center items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition duration-200"
              >
                <UserIcon className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <button
                onClick={openAuthModal}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition duration-200"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
}