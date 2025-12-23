"use client";

import { useRef, useEffect, useState } from "react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  price?: string;
  image: string;
  features?: string[];
  badge?: string;
  index: number;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  price,
  image,
  features,
  badge,
  index 
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d transition-all duration-500 hover:shadow-2xl ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-slate-700">
        {badge && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {badge}
          </div>
        )}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-12 h-12 text-gray-400 dark:text-gray-600 animate-pulse" />
          </div>
        )}
        <img 
          src={image} 
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 min-h-[40px]">
          {description}
        </p>
        
        {features && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {features.slice(0, 3).map((feature) => (
              <span 
                key={feature}
                className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                +{features.length - 3}
              </span>
            )}
          </div>
        )}
        
        {price && (
          <div className="pt-3 border-t border-gray-100 dark:border-slate-700">
            <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400">
              {price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}