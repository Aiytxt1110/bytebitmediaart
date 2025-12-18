export default function Stats() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="stat-number gradient-text">{stat.number}</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}