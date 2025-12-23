"use client";

import { useState } from "react";
import { Play, Check, ArrowRight } from "lucide-react";
import { SaaSService } from "../../types/index";

interface SaaSCardProps extends SaaSService {
  index: number;
  isInView: boolean;
  selectedSaas: number | null;
  onToggle: (index: number) => void;
}

export default function SaaSCard({ 
  title,
  description,
  features,
  image,
  link,
  color,
  pricing,
  index,
  isInView,
  selectedSaas,
  onToggle
}: SaaSCardProps) {
  const isExpanded = selectedSaas === index;

  return (
    <div
      className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-3d border-2 border-transparent hover:border-blue-500/30 transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-40 group-hover:opacity-30 transition-opacity`} />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
            <Play className="w-8 h-8 text-blue-600 dark:text-blue-400 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
          {features.length > 3 && (
            <button 
              onClick={() => onToggle(index)}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              {isExpanded ? 'ซ่อน' : `+${features.length - 3} ฟีเจอร์เพิ่มเติม`}
            </button>
          )}
          {isExpanded && (
            <div className="space-y-2 mt-2">
              {features.slice(3).map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
            <strong className="text-gray-900 dark:text-white">Free:</strong> {pricing.free}
          </p>
          <button 
            onClick={() => onToggle(index)}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            ดูแพ็กเกจทั้งหมด
          </button>
          
          {isExpanded && (
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-slate-600 space-y-1">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Starter:</strong> {pricing.starter}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Pro:</strong> {pricing.pro}
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <a
            href={link}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
          >
            เริ่มใช้งานฟรี
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={link}
            className="px-4 py-2.5 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}