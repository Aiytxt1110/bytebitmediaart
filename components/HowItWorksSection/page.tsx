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
          <div className="grid grid-cols-5 divide-x divide-indigo-500 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative text-center lg:text-left"
                >
                  <div className="flex flex-col items-center justify-center text-center px-6 pb-6">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    <h3 className="mb-2 text-xl font-semibold text-gray-600 dark:text-gray-300">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-500">
                      {step.description}
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