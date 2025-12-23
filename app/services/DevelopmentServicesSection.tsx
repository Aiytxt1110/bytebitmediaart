"use client";

import { ExternalLink } from "lucide-react";
import { devServices } from "../../data/devServicesData";
import ServiceCard from "../../components/ui/ServiceCard";
import ScrollableSection from "../../components/ui/ScrollableSection";

interface DevelopmentServicesSectionProps {
  isInView: boolean;
}

export default function DevelopmentServicesSection({ isInView }: DevelopmentServicesSectionProps) {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-6">
        <h3
          className={`text-2xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white transition-all duration-600 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
          Development Services
        </h3>
        <a href="/services/development" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors group">
          ดูทั้งหมด
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {devServices.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>

      {/* Tablet Grid */}
      <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
        {devServices.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden">
        <ScrollableSection>
          {devServices.map((service, index) => (
            <div key={service.title} className="w-80 flex-shrink-0">
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </ScrollableSection>
      </div>
    </div>
  );
}