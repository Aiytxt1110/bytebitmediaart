'use client'

import Navigation from '../../components/Navigation/page'
import Footer from '../../components/Footer/page'
import { useState, FormEvent } from 'react'

const faqs = [
  {
    question: 'How long does it take to complete a website project?',
    answer: 'Project timelines vary based on complexity and requirements. A basic website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks. We provide detailed timelines during the initial consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing plans based on project scope. Our Starter plan begins at $299, Professional at $799, and Enterprise at $1999. Custom quotes are available for unique requirements.',
  },
  {
    question: 'Do you offer website maintenance services?',
    answer: 'Yes! We provide ongoing maintenance and support packages that include updates, security monitoring, backups, and technical support. All our projects include a support period as outlined in your plan.',
  },
  {
    question: 'Can you help with SEO and digital marketing?',
    answer: 'Absolutely! We offer comprehensive SEO services, content strategy, social media marketing, and performance tracking to help grow your online presence.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We specialize in modern web technologies including React, Next.js, Node.js, WordPress, and various e-commerce platforms. We choose the best stack for your specific needs.',
  },
  {
    question: 'Do you provide hosting services?',
    answer: 'While we don\'t provide hosting directly, we can recommend reliable hosting providers and assist with setup and deployment. We work with all major hosting platforms.',
  },
]

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: '',
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Support ticket submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                How Can We <span className="gradient-text">Help You?</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our support team is available 24/7 to assist you with any questions or issues
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 rounded-2xl bg-purple-50 dark:bg-purple-900/20">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Response within 2-4 hours</p>
                <a href="mailto:bytebitmedart@gmail.com" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                  bytebitmedart@gmail.com
                </a>
              </div>

              <div className="text-center p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Mon-Fri 9AM-6PM, Sat 9AM-12PM</p>
                <a href="tel:+8562029009976" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  +856 2029009976
                </a>
              </div>

              <div className="text-center p-8 rounded-2xl bg-green-50 dark:bg-green-900/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Available 24/7</p>
                <button className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Ticket Form */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Submit a Support Ticket
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your issue"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please provide as much detail as possible about your issue..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                    required
                  />
                </div>

                <button type="submit" className="w-full btn-gradient text-white px-6 py-4 rounded-xl font-semibold text-lg">
                  <span>Submit Ticket</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                  >
                    <span className="text-lg font-bold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-purple-600 transform transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}