"use client";

import { useRef, useEffect, useState } from "react";
import Navigation from '../../components/Navigation/page'
import Footer from '../../components/Footer/page'
import DesignServicesSection from "./DesignServicesSection";
import DevelopmentServicesSection from "./DevelopmentServicesSection";
import SaaSSection from "./SaaSSection";

export default function Services() {
  const sectionRef = useRef(null);
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
    <>
    <Navigation />
    <section id="services" className="py-24 bg-gray-50 dark:bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            บริการของเรา
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            ครบทั้งงานออกแบบ พัฒนาเว็บไซต์ และระบบ SaaS พร้อมใช้งาน
          </p>
        </div>

        {/* Design Services */}
        <DesignServicesSection isInView={isInView} />

        {/* Development Services */}
        <DevelopmentServicesSection isInView={isInView} />

        {/* SaaS Solutions */}
        <SaaSSection isInView={isInView} />
      </div>
    </section>
    <Footer />
    </>
  );
}