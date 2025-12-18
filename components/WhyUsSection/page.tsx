import { useState, useEffect, useRef } from 'react';
import { 
  Blocks, 
  TrendingUp, 
  PiggyBank, 
  RefreshCw, 
  Target 
} from "lucide-react";

const reasons = [
  {
    icon: Blocks,
    title: "โครงสร้างแบบ Modular",
    description: "ออกแบบระบบเป็นโมดูล เพิ่มเติมหรือเปลี่ยนแปลงได้ง่ายโดยไม่กระทบส่วนอื่น",
  },
  {
    icon: TrendingUp,
    title: "รองรับการเติบโต",
    description: "ระบบถูกสร้างมาให้ Scale ได้ตามขนาดธุรกิจที่เติบโตขึ้น",
  },
  {
    icon: PiggyBank,
    title: "ควบคุมต้นทุนได้ดี",
    description: "วางแผนค่าใช้จ่ายล่วงหน้า ไม่มี Hidden Cost เลือกลงทุนเฉพาะที่จำเป็น",
  },
  {
    icon: RefreshCw,
    title: "ย้ายหรือขยายได้ง่าย",
    description: "ไม่ผูกขาดกับเรา สามารถ Export หรือย้ายระบบไปใช้ที่อื่นได้",
  },
  {
    icon: Target,
    title: "เหมาะกับธุรกิจจริง",
    description: "ออกแบบจากประสบการณ์จริง เข้าใจปัญหาและความต้องการของ SME และ Startup",
  },
];

export default function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
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

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={isVisible ? 'animate-fade-in-left' : 'opacity-0'}>
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
              ทำไมต้อง
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Bytebit Media Art
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              เราไม่ได้เป็นแค่บริษัทรับทำเว็บทั่วไป แต่เป็นพาร์ทเนอร์ที่จะช่วยวางรากฐานเทคโนโลยีให้ธุรกิจของคุณเติบโตได้อย่างมั่นคงในระยะยาว
            </p>
          </div>

          {/* Right - Reasons Grid */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`group flex items-start gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                    isVisible ? 'animate-fade-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}