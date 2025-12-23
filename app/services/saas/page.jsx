"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import {
  Check,
  ArrowRight,
  ExternalLink,
  Users,
  Clock,
  ChevronLeft,
  Layers,
  Zap,
  Cloud
} from "lucide-react";
import { saasPortfolios } from "../../../data/portfolios";
import Navigation from '../../../components/Navigation/page'
import Footer from '../../../components/Footer/page'

const features = [
  "เริ่มต้นใช้งานได้ฟรี",
  "ไม่ต้องติดตั้ง ใช้งานผ่านเว็บ",
  "รองรับ Multi-device",
  "Real-time Updates",
  "Cloud Storage ปลอดภัย",
  "Customer Support 24/7",
  "ยกเลิกได้ทุกเมื่อ ไม่ผูกมัด",
  "Auto Updates ฟีเจอร์ใหม่",
];

const pricing = [
  {
    title: "Retail SaaS",
    price: "ฟรี - ฿999/เดือน",
    features: ["POS System", "สต๊อกสินค้า", "รายงานการขาย", "Multi-Branch", "50-∞ รายการ"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Restaurant SaaS",
    price: "ฟรี - ฿1,499/เดือน",
    features: ["รับออเดอร์", "Kitchen Display", "QR Menu", "จัดการโต๊ะ", "1-∞ สาขา"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Warehouse SaaS",
    price: "ฟรี - ฿2,499/เดือน",
    features: ["WMS", "Barcode Scanner", "Location Tracking", "รายงานครบวงจร", "100-∞ SKU"],
    color: "from-purple-500 to-pink-500",
  },
];

export default function SaaSServicesPage() {
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
        <section className="mt-10 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SaaS Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              ระบบ SaaS สำหรับธุรกิจต่างๆ เริ่มต้นใช้งานได้ฟรี ไม่ต้องลงทุนพัฒนาระบบเอง ประหยัดเวลาและค่าใช้จ่าย
              อัพเดทฟีเจอร์ใหม่อัตโนมัติ รองรับการทำงานแบบ Multi-branch และ Real-time
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolios"
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
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
                ลูกค้าที่ใช้งาน SaaS ของเรา
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasPortfolios.map((portfolio, index) => (
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
                        <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full mb-2">
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
                เริ่มต้นฟรี อัพเกรดได้ตามความต้องการ
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
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
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
                    className={`block w-full px-6 py-3 bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white text-center font-semibold rounded-lg transition-all`}
                  >
                    เริ่มใช้งานฟรี
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>

            {/* SaaS Benefits */}
            <div className="mt-16 bg-gradient-to-r from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 border-l-4 border-green-600 dark:border-green-400">
              <h4 className="text-gray-900 dark:text-white font-semibold text-xl mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                ทำไมต้องเลือก SaaS?
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">💰 ประหยัดค่าใช้จ่าย</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ไม่ต้องลงทุนพัฒนาระบบเอง ประหยัดหลักแสน
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">⚡ ใช้งานได้ทันที</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    สมัครและเริ่มใช้งานได้ในวันเดียว
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">🔄 อัพเดทอัตโนมัติ</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ได้ฟีเจอร์ใหม่ฟรี ไม่ต้องจ่ายเพิ่ม
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมเริ่มใช้งาน SaaS ฟรีหรือยัง?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ไม่ต้องใช้บัตรเครดิต ไม่ผูกมัด ทดลองใช้ฟรีได้เลย
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                เริ่มใช้งานฟรี
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                ดูบริการอการ Design ที่เราได้ทำให้กับลูกค้า
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasPortfolios.map((portfolio, index) => (
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
                        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-2">
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
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">
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
                    className="block w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-center font-semibold rounded-lg transition-all"
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
        <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมสร้างดีไซน์ที่ทรงพลังหรือยัง?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ติดต่อเราวันนี้เพื่อปรึกษาฟรี และรับใบเสนอราคาที่เหมาะกับงบประมาณของคุณ
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
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
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full mb-4">
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

                <div className="flex flex-wrap gap-2">
                  {selectedPortfolio.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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