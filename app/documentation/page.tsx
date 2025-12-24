'use client'

import Navigation from '../../components/Navigation/page'
import Footer from '../../components/Footer/page'
import Link from 'next/link'
import { useState, useMemo } from 'react'

const docSections = [
  {
    title: 'Getting Started',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    articles: [
      { title: 'Quick Start Guide', link: '/docs/quick-start', description: 'Get up and running in minutes' },
      { title: 'Project Setup', link: '/docs/project-setup', description: 'Configure your first project' },
      { title: 'Basic Configuration', link: '/docs/basic-config', description: 'Essential settings and options' },
      { title: 'First Steps', link: '/docs/first-steps', description: 'Your journey begins here' },
    ],
  },
  {
    title: 'Web Design',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    ),
    articles: [
      { title: 'Design Principles', link: '/docs/design-principles', description: 'Core concepts for great design' },
      { title: 'UI/UX Best Practices', link: '/docs/ui-ux', description: 'Create intuitive experiences' },
      { title: 'Color Theory', link: '/docs/color-theory', description: 'Master color psychology' },
      { title: 'Typography Guide', link: '/docs/typography', description: 'Choose and pair fonts effectively' },
    ],
  },
  {
    title: 'Development',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
    articles: [
      { title: 'Development Workflow', link: '/docs/workflow', description: 'Streamline your process' },
      { title: 'Code Standards', link: '/docs/code-standards', description: 'Write clean, maintainable code' },
      { title: 'Testing Guide', link: '/docs/testing', description: 'Ensure quality and reliability' },
      { title: 'Deployment Process', link: '/docs/deployment', description: 'Launch with confidence' },
    ],
  },
  {
    title: 'SEO & Marketing',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
    articles: [
      { title: 'SEO Fundamentals', link: '/docs/seo-fundamentals', description: 'Rank higher in search results' },
      { title: 'Content Strategy', link: '/docs/content-strategy', description: 'Plan engaging content' },
      { title: 'Social Media Marketing', link: '/docs/social-media', description: 'Grow your audience' },
      { title: 'Analytics & Tracking', link: '/docs/analytics', description: 'Measure what matters' },
    ],
  },
  {
    title: 'Advanced Topics',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
    articles: [
      { title: 'Performance Optimization', link: '/docs/performance', description: 'Speed up your applications' },
      { title: 'Security Best Practices', link: '/docs/security', description: 'Protect your users' },
      { title: 'Scalability Guide', link: '/docs/scalability', description: 'Build for growth' },
      { title: 'API Integration', link: '/docs/api-integration', description: 'Connect external services' },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    ),
    articles: [
      { title: 'Common Issues', link: '/docs/common-issues', description: 'Quick fixes for typical problems' },
      { title: 'Error Messages', link: '/docs/error-messages', description: 'Understand what went wrong' },
      { title: 'Debug Guide', link: '/docs/debugging', description: 'Track down bugs efficiently' },
      { title: 'FAQ', link: '/docs/faq', description: 'Frequently asked questions' },
    ],
  },
]

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter documentation based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery && selectedCategory === 'all') return docSections

    return docSections
      .map(section => ({
        ...section,
        articles: section.articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter(section => {
        if (selectedCategory !== 'all' && section.title !== selectedCategory) return false
        return section.articles.length > 0
      })
  }, [searchQuery, selectedCategory])

  const categories = ['all', ...docSections.map(s => s.title)]

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Everything you need to know about our services, processes, and best practices
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                    aria-label="Search documentation"
                  />
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 gradient-primary rounded-full hover:opacity-90 transition"
                    aria-label="Search"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-slate-700'
                        }`}
                    >
                      {category === 'all' ? 'All' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <Link
                href="/docs/guides"
                className="flex items-center space-x-3 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition transform hover:scale-105"
              >
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Guides</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Step-by-step</p>
                </div>
              </Link>

              <Link
                href="/docs/api"
                className="flex items-center space-x-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition transform hover:scale-105"
              >
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">API Docs</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Reference</p>
                </div>
              </Link>

              <Link
                href="/docs/tutorials"
                className="flex items-center space-x-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition transform hover:scale-105"
              >
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Tutorials</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Video guides</p>
                </div>
              </Link>

              <Link
                href="/support"
                className="flex items-center space-x-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition transform hover:scale-105"
              >
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Support</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get help</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredSections.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSections.map((section, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 card-3d hover:shadow-2xl transition-all duration-300">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {section.icon}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.articles.map((article, idx) => (
                        <li key={idx}>
                          <Link
                            href={article.link}
                            className="block group"
                          >
                            <div className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                              <div>
                                <p className="text-gray-900 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                                  {article.title}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {article.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/docs/quick-start" className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-400 transition group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Getting Started</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  Quick Start Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Get up and running with your first project in minutes
                </p>
              </Link>

              <Link href="/docs/seo-fundamentals" className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-400 transition group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">SEO & Marketing</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">8 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  SEO Fundamentals
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Master the basics of search engine optimization
                </p>
              </Link>

              <Link href="/docs/performance" className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-600 dark:hover:border-purple-400 transition group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Advanced Topics</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Speed up your applications and improve user experience
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/support" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                Contact Support
              </Link>
              <Link href="/blog" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
                Visit Blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}