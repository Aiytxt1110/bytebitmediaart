'use client'

import { useEffect, useState } from 'react'
import { Languages } from 'lucide-react'
import Image from 'next/image'

const languages = [
  { code: 'en', name: 'English', flag: '/en.webp' },
  { code: 'la', name: 'ລາວ', flag: '/la.webp' },
  { code: 'zh', name: '中文', flag: '/zh.webp' },
]

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isLanguageDropdownOpen && !target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLanguageDropdownOpen])

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    setIsLanguageDropdownOpen(false)
    console.log(`Language changed to: ${langCode}`)
    // Here you would implement actual translation logic
  }

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage)

  return (
    <div className="relative language-dropdown">
      <div
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="flex items-center w-10 cursor-pointer"
        aria-label="Select language"
      >
        {/* <Languages className="w-5 h-5 text-gray-700 dark:text-gray-200" /> */}
        <div className="flex items-center" style={{ width: '100%', height: '100%' }}
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        >
          {selectedLanguage && (
            <div className="relative rounded-sm overflow-hidden">
              <Image 
                src={selectedLanguage.flag} 
                alt={selectedLanguage.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* Language Dropdown */}
      {isLanguageDropdownOpen && (
        <div className="absolute grid grid-cols-3 left-[-40px] mt-2 w-max bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 max-h-80 overflow-y-auto z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex justify-center items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition ${
                currentLanguage === lang.code ? 'bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
            >
              <div className="relative h-8 overflow-hidden flex-shrink-0">
                <Image 
                  src={lang.flag} 
                  alt={lang.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}