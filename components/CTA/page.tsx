import { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/15 dark:bg-purple-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-lg mb-8 transition-all duration-600 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              พร้อมเริ่มโปรเจกต์ใหม่แล้วหรือยัง?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            เริ่มสร้าง<span className="gradient-text">ระบบ</span>
            <br />
            ที่ขับเคลื่อนธุรกิจคุณ
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            ไม่ว่าจะเป็นเว็บไซต์ แพลตฟอร์ม หรือระบบ SaaS
            เราพร้อมช่วยคุณออกแบบและพัฒนาตั้งแต่วันแรก
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              เริ่มโปรเจกต์กับเรา
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-xl transition-all">
              เริ่มใช้งาน SaaS ฟรี
            </button>
          </div>

          <div
            className={`mt-8 transition-all duration-600 ${isInView ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "600ms" }}
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">หรือติดต่อทีมงานเพื่อปรึกษาฟรี</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}