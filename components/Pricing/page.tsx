export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects',
      price: '299,000',
      period: 'Kip/project',
      features: ['5 Pages Website', 'Responsive Design', 'Basic SEO', '30 Days Support'],
      isPrimary: false,
    },
    {
      name: 'Professional',
      description: 'Best for growing business',
      price: '799,000',
      period: 'Kip/project',
      features: ['15 Pages Website', 'Premium Design', 'Advanced SEO', '90 Days Support', 'CMS Integration'],
      isPrimary: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: '1,900,000',
      period: 'Kip/project',
      features: ['Unlimited Pages', 'Custom Features', 'Priority Support', 'Lifetime Updates', 'Dedicated Manager'],
      isPrimary: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">Simple Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="relative">
          <div 
            className="features-scroll overflow-x-auto pb-8 hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="inline-flex gap-6 sm:p-10 px-4 min-w-full md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-8 card-3d ${
                    plan.isPrimary
                      ? 'gradient-primary text-white relative transform lg:scale-105 shadow-2xl'
                      : 'bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700'
                  }`}
                >
                  {plan.isPrimary && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 px-6 py-2 rounded-full text-sm font-bold">
                      POPULAR
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.isPrimary ? '' : 'text-gray-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.isPrimary ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-[42px] font-extrabold ${plan.isPrimary ? '' : 'text-gray-900 dark:text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.isPrimary ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center ${plan.isPrimary ? '' : 'text-gray-700 dark:text-gray-300'}`}>
                        <svg className={`w-5 h-5 mr-3 ${plan.isPrimary ? '' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.isPrimary ? (
                    <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                      Get Started
                    </button>
                  ) : plan.name === 'Enterprise' ? (
                    <button className="w-full btn-gradient text-white px-6 py-3 rounded-full font-semibold">
                      <span>Contact Sales</span>
                    </button>
                  ) : (
                    <button className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-purple-500 hover:text-purple-600 transition">
                      Get Started
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}