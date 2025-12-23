'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SaaSService, ServiceCategory } from '../../../types/index';
import { Check } from 'lucide-react';

type Props = {
  services: SaaSService[];
  category: ServiceCategory;
};

const SaaSServicesPage: React.FC<Props> = ({ services, category }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition hover:text-white"
          >
            ← กลับหน้าหลัก
          </Link>
          <h1 className="text-4xl font-bold md:text-5xl">{category.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            {category.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-slate-600">{service.description}</p>
                    
                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold text-slate-900">ฟีเจอร์หลัก:</h4>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6 rounded-xl bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">แพ็คเกจราคา:</h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-slate-700">
                          <span className="font-medium">Free:</span> {service.pricing.free}
                        </p>
                        <p className="text-slate-700">
                          <span className="font-medium">Starter:</span> {service.pricing.starter}
                        </p>
                        <p className="text-slate-700">
                          <span className="font-medium">Pro:</span> {service.pricing.pro}
                        </p>
                      </div>
                    </div>

                    <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-purple-700 hover:to-pink-700">
                      ทดลองใช้ฟรี
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">พร้อมเริ่มต้นใช้งานแล้วหรือยัง?</h2>
          <p className="mt-4 text-slate-300">
            ทดลองใช้ฟรี ไม่ต้องใช้บัตรเครดิต
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            เริ่มต้นใช้งาน
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SaaSServicesPage;