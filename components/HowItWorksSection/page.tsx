import { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  PenTool, 
  Code, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "รับบรีฟและวิเคราะห์ธุรกิจ",
    description: "พูดคุยเพื่อเข้าใจเป้าหมาย ปัญหา และความต้องการของธุรกิจคุณอย่างลึกซึ้ง",
  },
  {
    icon: PenTool,
    step: "02",
    title: "ออกแบบโครงสร้างและ UX",
    description: "วางแผนโครงสร้างระบบ Wireframe และออกแบบ UI/UX ให้ตรงกับผู้ใช้งาน",
  },
  {
    icon: Code,
    step: "03",
    title: "พัฒนาและทดสอบระบบ",
    description: "เขียนโค้ด พัฒนาฟีเจอร์ทั้งหมด และทดสอบอย่างละเอียดก่อนส่งมอบ",
  },
  {
    icon: Rocket,
    step: "04",
    title: "เปิดใช้งานจริง",
    description: "Deploy ระบบขึ้น Production พร้อมอบรมการใช้งานให้ทีมของคุณ",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "ขยายและดูแลระบบ",
    description: "ซัพพอร์ตระยะยาว พร้อมขยายฟีเจอร์เพิ่มเติมตามการเติบโตของธุรกิจ",
  },
];

export default function HowItWorksSection() {
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
      id="how-it-works" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUpDelay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-up-delay {
          animation: fadeInUpDelay 0.6s ease-out forwards;
        }
        .glow-effect {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
        }
        .glow-effect:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            ขั้นตอนการทำงาน
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            กระบวนการที่ชัดเจน โปร่งใส และมีประสิทธิภาพ
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className={`relative text-center lg:text-left ${
                    isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon Container */}
                  <div className="relative inline-flex lg:flex justify-center lg:justify-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 dark:from-blue-500/30 dark:to-blue-500/10 flex items-center justify-center glow-effect transition-all duration-300">
                      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    {/* Step Number */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-blue-500/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}