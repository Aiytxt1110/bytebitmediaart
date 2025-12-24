'use client'

import { useState, useMemo, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Navigation from '../../components/Navigation/page'
import Footer from '../../components/Footer/page'
import { blogPosts, categories, BlogPost } from './blogData'
import { ArticleContent } from './ArticleContent'

export default function BlogPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Load article from URL parameter on mount
  useEffect(() => {
    const articleId = searchParams.get('id')
    if (articleId) {
      const post = blogPosts.find(p => p.id === parseInt(articleId))
      if (post) {
        setSelectedPost(post)
      }
    }
  }, [searchParams])

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post: BlogPost) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubscribeStatus('error')
      return
    }

    setTimeout(() => {
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus('idle'), 3000)
    }, 500)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setVisiblePosts(6)
  }

  const handleOpenArticle = (post: BlogPost) => {
    setSelectedPost(post)
    router.push(`/blog?id=${post.id}`, { scroll: false })
  }

  const handleCloseArticle = () => {
    setSelectedPost(null)
    router.push('/blog', { scroll: false })
  }

  // Article Modal View
  if (selectedPost) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={handleCloseArticle}
        />

        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
          <div
            className="bg-white dark:bg-slate-900 w-full h-screen shadow-2xl overflow-y-auto pointer-events-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10">
              <button
                onClick={handleCloseArticle}
                className="flex items-center absolute top-4 right-4 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition font-semibold"
              >
                <svg className="w-10 h-10 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <article className="w-screen h-screen overflow-y-auto">
              <div className={`h-64 md:h-96 bg-gradient-to-br ${selectedPost.image} mb-6 shadow-xl`}></div>

              <div className="max-w-5xl mx-auto px-6 md:px-8">
                <div className="mb-6">
                  <span className="inline-block text-sm font-semibold text-purple-600 dark:text-purple-400 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                    {selectedPost.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200 dark:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                        {selectedPost.author.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {selectedPost.author}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {selectedPost.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* USE ARTICLE CONTENT COMPONENT */}
                <div className="dark:text-gray-300">
                  <ArticleContent content={selectedPost.content} />
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Share this article</h3>
                  <button
                    onClick={async () => {
                      const shareUrl = `${window.location.origin}/blog?id=${selectedPost.id}`
                      if (navigator.share) {
                        try {
                          await navigator.share({
                            title: selectedPost.title,
                            text: selectedPost.excerpt,
                            url: shareUrl
                          })
                        } catch (err) {
                          console.log('Share cancelled')
                        }
                      } else {
                        navigator.clipboard.writeText(shareUrl)
                        alert('Link copied to clipboard!')
                      }
                    }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="font-semibold">Share Article</span>
                  </button>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">More articles you might like</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {blogPosts
                    .filter((post: BlogPost) => post.id !== selectedPost.id)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map((post: BlogPost) => (
                      <div
                        key={post.id}
                        onClick={() => handleOpenArticle(post)}
                        className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
                      >
                        <div className={`h-32 bg-gradient-to-br ${post.image}`}></div>
                        <div className="p-4">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <Navigation />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                Our <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Insights, tutorials, and updates from our team of experts
              </p>

              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  />
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 gradient-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                {searchQuery && (
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-20 z-40 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${category === selectedCategory
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {displayedPosts.length === 0 ? (
              <div className="text-center py-20">
                <svg className="w-20 h-20 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="btn-gradient text-white px-6 py-3 rounded-full font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post: BlogPost, index: number) => (
                  <div
                    key={post.id}
                    onClick={() => handleOpenArticle(post)}
                    className="cursor-pointer"
                  >
                    <article
                      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d h-full flex flex-col transform hover:-translate-y-2 transition-all duration-300"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className={`h-48 bg-gradient-to-br ${post.image} relative overflow-hidden group`}>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                              {post.author.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                {post.author}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {post.date}
                              </p>
                            </div>
                          </div>
                          <svg className="w-6 h-6 text-purple-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            )}

            {hasMorePosts && displayedPosts.length > 0 && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center">
                    Load More Articles
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  Showing {displayedPosts.length} of {filteredPosts.length} articles
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 gradient-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest articles and insights delivered to your inbox every week
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </form>

            {subscribeStatus === 'success' && (
              <div className="mt-6 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <p className="text-white font-semibold flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Successfully subscribed! Check your email for confirmation.
                </p>
              </div>
            )}
            {subscribeStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-500/20 rounded-lg backdrop-blur-sm">
                <p className="text-white font-semibold">
                  Please enter a valid email address.
                </p>
              </div>
            )}

            <p className="text-white/70 text-sm mt-6">
              Join 10,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card-3d {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .card-3d:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </>
  )
}