"use client";

import { useRef, useEffect, useState } from "react";
import { expertise } from "../../data/AboutData";

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-800 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <span className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
              มากกว่าการทำเว็บ
              <br />
              <span className="gradient-text">คือการสร้างระบบ</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Bytebit Media Art คือทีมที่รวม <strong className="text-gray-900 dark:text-white">Design</strong> และ{" "}
              <strong className="text-gray-900 dark:text-white">Technology</strong> เข้าด้วยกัน
              เราไม่ได้แค่ทำเว็บไซต์ แต่สร้างระบบที่พร้อมขยายตัวในอนาคต
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              ทุกโปรเจกต์ที่เราทำ ถูกออกแบบมาให้มีโครงสร้างแบบ Modular
              ที่สามารถเพิ่มฟีเจอร์หรือเชื่อมต่อระบบใหม่ได้ง่าย
              เหมาะสำหรับธุรกิจที่มองการณ์ไกลและต้องการเติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Right - Expertise Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-800 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="feature-card bg-white dark:bg-slate-800 rounded-2xl p-8 card-3d"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};