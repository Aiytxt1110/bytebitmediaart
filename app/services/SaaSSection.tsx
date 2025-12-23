"use client";

import { useState } from "react";
import { ExternalLink, Check } from "lucide-react";
import { saasServices } from "../../data/saasServicesData";
import SaaSCard from "../../components/ui/SaaSCard";
import ScrollableSection from "../../components/ui/ScrollableSection";

interface SaaSSectionProps {
  isInView: boolean;
}

export default function SaaSSection({ isInView }: SaaSSectionProps) {
  const [selectedSaas, setSelectedSaas] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelectedSaas(selectedSaas === index ? null : index);
  };

  return (
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
        <a href="/services/saas" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors group">
          ดูทั้งหมด
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
        {saasServices.map((service, index) => (
          <SaaSCard
            key={service.title}
            {...service}
            index={index}
            isInView={isInView}
            selectedSaas={selectedSaas}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden mb-8">
        <ScrollableSection>
          {saasServices.map((service, index) => (
            <div key={service.title} className="w-80 flex-shrink-0">
              <SaaSCard
                {...service}
                index={index}
                isInView={isInView}
                selectedSaas={selectedSaas}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </ScrollableSection>
      </div>

      {/* SaaS Notice */}
      <div
        className={`border-4 border-gradient-to-b from-blue-600 to-purple-600 min-h-40 overflow-hidden dark:from-slate-800 dark:to-slate-800 rounded-2xl p-6 transition-all duration-600 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        {/* <div className="w-2 min-h-40 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" /> */}
        <div className="ml-4">
          <h4 className="text-gray-900 dark:text-white font-semibold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            เกี่ยวกับระบบ SaaS
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
            ระบบ SaaS ของเราสามารถเริ่มต้นใช้งานได้<strong className="text-lg font-semibold text-blue-500"> ฟรี</strong> โดยมีการจำกัดฟีเจอร์และขนาดการใช้งานตามประเภทธุรกิจ 
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
  );
}