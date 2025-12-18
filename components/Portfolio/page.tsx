import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const categories = ["All", "Web Design", "Web Development", "Graphics Design", "Mobile App", "Branding", "SaaS"];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Web Development",
    title: "E-Commerce Platform",
    description: "ระบบ E-Commerce ครบวงจรพร้อม Payment Gateway",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    category: "Web Design",
    title: "Corporate Website",
    description: "เว็บไซต์บริษัทออกแบบใหม่ทั้งหมด Modern & Professional",
    tags: ["UI/UX", "Figma", "Responsive"],
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    category: "Mobile App",
    title: "Fitness Tracking App",
    description: "แอพติดตามสุขภาพและออกกำลังกายสำหรับ iOS และ Android",
    tags: ["React Native", "Firebase", "Health Kit"],
  },
  {
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    category: "Graphics Design",
    title: "Brand Identity Package",
    description: "ออกแบบ Logo, Business Card, และ Marketing Materials",
    tags: ["Illustrator", "Photoshop", "Branding"],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "SaaS",
    title: "Restaurant Management System",
    description: "ระบบจัดการร้านอาหารครบวงจร POS และ Kitchen Display",
    tags: ["SaaS", "Real-time", "Multi-tenant"],
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Web Design",
    title: "Landing Page Design",
    description: "ออกแบบ Landing Page สำหรับแคมเปญการตลาด",
    tags: ["UI/UX", "Conversion", "A/B Testing"],
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Web Development",
    title: "Learning Management System",
    description: "แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับองค์กร",
    tags: ["Next.js", "PostgreSQL", "Video Streaming"],
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    category: "SaaS",
    title: "Inventory Management",
    description: "ระบบจัดการสต๊อกและคลังสินค้าแบบ Real-time",
    tags: ["Cloud", "Barcode", "Analytics"],
  },
  {
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    category: "Branding",
    title: "Startup Branding",
    description: "Brand Identity ครบชุดสำหรับ Tech Startup",
    tags: ["Logo", "Style Guide", "Brand Book"],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isInView, setIsInView] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            ผลงานของเรา
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            สำรวจโปรเจกต์และผลงานที่เราภูมิใจนำเสนอ
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`mb-8 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid for Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d transition-all duration-500 hover:shadow-2xl ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64 bg-gray-200 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-xl">
                      ดูโปรเจกต์
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll for Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar px-12"
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
            <div className="inline-flex gap-6 pb-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d transition-all hover:shadow-2xl w-80 flex-shrink-0"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 bg-gray-200 dark:bg-slate-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-xl">
                        ดูโปรเจกต์
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
            ดูผลงานทั้งหมด
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}