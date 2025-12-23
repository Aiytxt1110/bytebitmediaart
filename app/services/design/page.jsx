"use client";

import { useRef, useEffect, useState } from "react";
import {
  Check,
  ArrowRight,
  ExternalLink,
  Users,
  Clock,
  ChevronLeft,
  Palette,
  Scissors
} from "lucide-react";
import { designPortfolios } from "../../../data/portfolios";
import Navigation from '../../../components/Navigation/page'
import Footer from '../../../components/Footer/page'

const features = [
  "Wireframe และ Mockup ครบถ้วน",
  "Prototype แบบ Interactive",
  "Design System สำหรับทีม",
  "Responsive Design ทุกขนาดหน้าจอ",
  "รีวิชั่นไม่จำกัด (ตามแพ็กเกจ)",
  "ส่งมอบไฟล์ต้นฉบับ (Figma, AI, PSD)",
  "Brand Guidelines Document",
  "ฟรีคำปรึกษาก่อนเริ่มโครงการ",
];

const pricing = [
  {
    title: "UX/UI Design - Basic",
    price: "฿15,000",
    features: ["5-10 หน้า", "2 รอบ Revision", "Prototype Basic", "Design System เบื้องต้น"],
  },
  {
    title: "UX/UI Design - Premium",
    price: "฿35,000",
    features: ["15-25 หน้า", "Unlimited Revision", "Advanced Prototype", "Complete Design System", "User Testing"],
  },
  {
    title: "Graphics Design",
    price: "฿3,000+",
    features: ["Logo/Banner/Poster", "1-2 รอบ Revision", "ไฟล์ต้นฉบับทุกชนิด", "Multiple Formats"],
  },
];

export default function DesignServicesPage() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
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
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        {/* Hero Section */}
        <section className="mt-10 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Design Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              บริการออกแบบทั้ง UX/UI สำหรับเว็บไซต์และแอปพลิเคชัน รวมถึงงาน Graphics Design ทุกประเภท
              ด้วยทีมดีไซเนอร์มืออาชีพที่มีประสบการณ์ทำงานกับลูกค้ามากกว่า 100 โครงการ
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolios"
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                ดูผลงาน
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                ดูราคา
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              สิ่งที่คุณจะได้รับ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:shadow-lg transition-all"
                >
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolios Section */}
        <section id="portfolios" className="py-20 bg-gray-50 dark:bg-slate-900" ref={ref}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                ผลงานของเรา
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                ตัวอย่างโครงการ Development ที่เราได้ทำให้กับลูกค้า
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designPortfolios.map((portfolio, index) => (
                <div
                  key={portfolio.id}
                  className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedPortfolio(portfolio)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                          {portfolio.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
                      {portfolio.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {portfolio.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {portfolio.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {portfolio.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {portfolio.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                แพ็กเกจและราคา
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                เลือกแพ็กเกจที่เหมาะกับความต้องการของคุณ
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                    {pkg.price}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center font-semibold rounded-lg transition-all"
                  >
                    เริ่มต้นใช้งาน
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมเริ่มพัฒนาโครงการของคุณหรือยัง?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ติดต่อเราวันนี้เพื่อปรึกษาฟรี และรับใบเสนอราคาที่เหมาะกับงบประมาณของคุณ
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                ติดต่อเรา
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                ดูบริการอื่นๆ
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Modal */}
        {selectedPortfolio && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPortfolio(null)}
          >
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <img
                  src={selectedPortfolio.image}
                  alt={selectedPortfolio.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPortfolio(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-900 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
                  {selectedPortfolio.category}
                </span>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedPortfolio.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  {selectedPortfolio.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Users className="w-5 h-5" />
                    <span><strong>Client:</strong> {selectedPortfolio.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span><strong>Year:</strong> {selectedPortfolio.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPortfolio.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-green-50 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-green-600 dark:text-green-400">Success Story:</strong>
                    {" "}ลูกค้าสามารถเพิ่มประสิทธิภาพการทำงานได้ 40% และลดต้นทุนการจัดการได้ 30%
                    หลังจากใช้งาน SaaS ของเรา
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}