'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight} from 'lucide-react';
import { ServicesData } from '../../data/ServicesData';
import { ServiceItem } from "../../types/index";
import { useScrollPagination } from '../../hooks/useScrollPagination';

const Services: React.FC = () => {
  const { scrollRef, activeIndex, handleScroll, scrollToIndex } = useScrollPagination({
    itemWidth: 384, // w-96
    gap: 24, // gap-6
  });

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-300">
            บริการของเรา
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            ไม่ว่าจะเป็นเว็บไซต์ แพลตฟอร์ม หรือระบบ SaaS เราพร้อมช่วยคุณออกแบบและพัฒนาตั้งแต่วันแรก
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center justify-start lg:items-start lg:justify-center gap-4 overflow-x-auto pb-8 hide-scrollbar scroll-smooth mx-auto"
        >
          {ServicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="relative flex-shrink-0 lg:w-80 lg:h-80 w-96 h-96 rounded-2xl 
              bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-2/3 items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="object-contain"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              <div className="text-center px-6 pb-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-600 dark:text-gray-300">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-slate-500">
                  {service.description}
                </p>
                {service.href && (
                  <button className="group w-60 absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 overflow-hidden flex items-center gap-2">
                    <Link href={service.href}><span className="relative z-10">ເບິ່ງເພີ່ມເຕີມ</span></Link>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-4 lg:mt-0 flex justify-center gap-2 lg:hidden">
          {ServicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index
                  ? 'bg-indigo-600 scale-110'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-slate-900 hover:bg-yellow-300"
          >
            ເບິ່ງບໍລິການທັງໝົດ →
          </Link>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;