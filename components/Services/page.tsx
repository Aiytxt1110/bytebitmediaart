import { useRef, useEffect, useState } from "react";
import { 
  Palette, 
  Scissors, 
  Code2, 
  Globe2, 
  Layers, 
  Database,
  Cpu,
  ArrowRight,
  ExternalLink,
  Play,
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const designServices = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "ออกแบบ Layer Webpage ที่เน้นประสบการณ์ผู้ใช้และความสวยงาม",
    price: "เริ่มต้น ฿15,000",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    features: ["Wireframe", "Mockup", "Prototype", "Design System"]
  },
  {
    icon: Scissors,
    title: "Graphics Design",
    description: "ตัดต่อภาพ/วิดีโอ รีทัช ทำโลโก้ และงานกราฟิกอื่นๆ",
    price: "เริ่มต้น ฿3,000",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    features: ["Photo/Video Editing", "Retouch", "Logo Design", "Marketing Materials"]
  },
];

const devServices = [
  {
    icon: Globe2,
    title: "Custom Website",
    description: "เว็บไซต์ตามบรีฟของลูกค้า ออกแบบใหม่ทั้งหมด",
    price: "เริ่มต้น ฿35,000",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
    badge: "Popular"
  },
  {
    icon: Layers,
    title: "Template Website",
    description: "เว็บไซต์สำเร็จรูป พร้อมปรับแต่งตามแบรนด์",
    price: "เริ่มต้น ฿12,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    badge: "Fast Delivery"
  },
  {
    icon: Code2,
    title: "Platform Development",
    description: "สร้างแพลตฟอร์มและ Web Application สำหรับธุรกิจ",
    price: "เริ่มต้น ฿80,000",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
  {
    icon: Database,
    title: "Business System",
    description: "ระบบจัดการธุรกิจ CRM, Inventory, ERP และอื่นๆ",
    price: "เริ่มต้น ฿50,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: Cpu,
    title: "System Algorithms",
    description: "ออกแบบ Algorithm และ Logic ระบบเฉพาะทาง",
    price: "เริ่มต้น ฿25,000",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
  },
];

const saasServices = [
  {
    title: "SaaS สำหรับร้านค้า",
    description: "ระบบจัดการร้านค้าครบวงจร POS, สต๊อก, รายงานการขาย",
    features: ["Point of Sale", "จัดการสต๊อกสินค้า", "รายงานการขาย", "ระบบสมาชิก", "Multi-Branch"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#retail-saas",
    color: "from-blue-500 to-cyan-500",
    pricing: {
      free: "ฟรี - สูงสุด 50 รายการต่อเดือน",
      starter: "฿499/เดือน - สูงสุด 500 รายการ",
      pro: "฿999/เดือน - ไม่จำกัด + Add-ons"
    }
  },
  {
    title: "SaaS สำหรับร้านอาหาร",
    description: "ระบบจัดการร้านอาหาร รับออเดอร์, โต๊ะ, ครัว, QR Menu",
    features: ["รับออเดอร์ Online/Offline", "จัดการโต๊ะ", "Kitchen Display", "QR Menu", "Integration Delivery"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    link: "#restaurant-saas",
    color: "from-orange-500 to-red-500",
    pricing: {
      free: "ฟรี - 1 สาขา, 10 โต๊ะ",
      starter: "฿799/เดือน - 3 สาขา, 50 โต๊ะ",
      pro: "฿1,499/เดือน - ไม่จำกัด + Add-ons"
    }
  },
  {
    title: "SaaS สำหรับโกดังสินค้า",
    description: "ระบบ WMS จัดการคลังสินค้า รับ-จ่าย พร้อม Barcode",
    features: ["รับ-จ่ายสินค้า", "ติดตามสต๊อกแบบ Real-time", "Barcode Scanner", "Location Management", "รายงานครบวงจร"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    link: "#warehouse-saas",
    color: "from-purple-500 to-pink-500",
    pricing: {
      free: "ฟรี - 100 SKU",
      starter: "฿1,299/เดือน - 1,000 SKU",
      pro: "฿2,499/เดือน - ไม่จำกัด + Add-ons"
    }
  },
];

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  price,
  image,
  features,
  badge,
  index 
}: any) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d transition-all duration-500 hover:shadow-2xl ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-slate-700">
        {badge && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {badge}
          </div>
        )}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-12 h-12 text-gray-400 dark:text-gray-600 animate-pulse" />
          </div>
        )}
        <img 
          src={image} 
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 min-h-[40px]">
          {description}
        </p>
        
        {features && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {features.slice(0, 3).map((feature: string) => (
              <span 
                key={feature}
                className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                +{features.length - 3}
              </span>
            )}
          </div>
        )}
        
        {price && (
          <div className="pt-3 border-t border-gray-100 dark:border-slate-700">
            <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400">
              {price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const ref = useRef(null);
  const designScrollRef = useRef<HTMLDivElement>(null);
  const devScrollRef = useRef<HTMLDivElement>(null);
  const saasScrollRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedSaas, setSelectedSaas] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const scrollLeft = (scrollRef: React.RefObject<HTMLDivElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = (scrollRef: React.RefObject<HTMLDivElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            บริการของเรา
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            ครบทั้งงานออกแบบ พัฒนาเว็บไซต์ และระบบ SaaS พร้อมใช้งาน
          </p>
        </div>

        {/* Design Services */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-all duration-600 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
            Design Services
          </h3>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {designServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden relative">
            <button
              onClick={() => scrollLeft(designScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => scrollRight(designScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div
              ref={designScrollRef}
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
                {designServices.map((service, index) => (
                  <div key={service.title} className="w-80 flex-shrink-0">
                    <ServiceCard {...service} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Services */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3
              className={`text-2xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white transition-all duration-600 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              Development Services
            </h3>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors group">
              ดูทั้งหมด
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {devServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          {/* Tablet Grid */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
            {devServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden relative">
            <button
              onClick={() => scrollLeft(devScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => scrollRight(devScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div
              ref={devScrollRef}
              className="overflow-x-auto hide-scrollbar px-12"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="inline-flex gap-6 pb-4">
                {devServices.map((service, index) => (
                  <div key={service.title} className="w-80 flex-shrink-0">
                    <ServiceCard {...service} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SaaS Solutions */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3
              className={`text-2xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white transition-all duration-600 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              SaaS Solutions
              <span className="ml-2 px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                เริ่มใช้ฟรี
              </span>
            </h3>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors group">
              ดูทั้งหมด
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
            {saasServices.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d border-2 border-transparent hover:border-blue-500/30 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-30 transition-opacity`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
                      <Play className="w-8 h-8 text-blue-600 dark:text-blue-400 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <button 
                        onClick={() => setSelectedSaas(selectedSaas === index ? null : index)}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {selectedSaas === index ? 'ซ่อน' : `+${service.features.length - 3} ฟีเจอร์เพิ่มเติม`}
                      </button>
                    )}
                    {selectedSaas === index && (
                      <div className="space-y-2 mt-2">
                        {service.features.slice(3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <strong className="text-gray-900 dark:text-white">Free:</strong> {service.pricing.free}
                    </p>
                    <button 
                      onClick={() => setSelectedSaas(selectedSaas === index ? null : index)}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      ดูแพ็กเกจทั้งหมด
                    </button>
                    
                    {selectedSaas === index && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-slate-600 space-y-1">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <strong className="text-gray-900 dark:text-white">Starter:</strong> {service.pricing.starter}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <strong className="text-gray-900 dark:text-white">Pro:</strong> {service.pricing.pro}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                    >
                      เริ่มใช้งานฟรี
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={service.link}
                      className="px-4 py-2.5 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-slate-700"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden relative mb-8">
            <button
              onClick={() => scrollLeft(saasScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={() => scrollRight(saasScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div
              ref={saasScrollRef}
              className="overflow-x-auto hide-scrollbar px-12"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="inline-flex gap-6 pb-4">
                {saasServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d border-2 border-transparent hover:border-blue-500/30 transition-all duration-500 w-80 flex-shrink-0"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-30 transition-opacity`} />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
                          <Play className="w-8 h-8 text-blue-600 dark:text-blue-400 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <button 
                            onClick={() => setSelectedSaas(selectedSaas === index ? null : index)}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {selectedSaas === index ? 'ซ่อน' : `+${service.features.length - 3} ฟีเจอร์เพิ่มเติม`}
                          </button>
                        )}
                        {selectedSaas === index && (
                          <div className="space-y-2 mt-2">
                            {service.features.slice(3).map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mb-4 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          <strong className="text-gray-900 dark:text-white">Free:</strong> {service.pricing.free}
                        </p>
                        <button 
                          onClick={() => setSelectedSaas(selectedSaas === index ? null : index)}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          ดูแพ็กเกจทั้งหมด
                        </button>
                        
                        {selectedSaas === index && (
                          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-slate-600 space-y-1">
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              <strong className="text-gray-900 dark:text-white">Starter:</strong> {service.pricing.starter}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              <strong className="text-gray-900 dark:text-white">Pro:</strong> {service.pricing.pro}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={service.link}
                          className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                        >
                          เริ่มใช้งานฟรี
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href={service.link}
                          className="px-4 py-2.5 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-slate-700"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SaaS Notice */}
          <div
            className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-6 border-l-4 border-blue-600 dark:border-blue-400 transition-all duration-600 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              เกี่ยวกับระบบ SaaS
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
              ระบบ SaaS ของเราสามารถเริ่มต้นใช้งานได้<strong className="text-gray-900 dark:text-white">ฟรี</strong> โดยมีการจำกัดฟีเจอร์และขนาดการใช้งานตามประเภทธุรกิจ 
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>ไม่ต้องลงทุนพัฒนาระบบเอง ประหยัดเวลาและค่าใช้จ่าย</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>อัพเดทฟีเจอร์ใหม่ๆ ฟรีอัตโนมัติ</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>ยกเลิกได้ทุกเมื่อ ไม่มีผูกมัด (Subscription) หรือซื้อเฉพาะที่ต้องการ (Add-ons)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}