'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DesignService, ServiceCategory } from '../types/service';
import { Check } from 'lucide-react';

type Props = {
  services: DesignService[];
  category: ServiceCategory;
};

const DesignServicesPage: React.FC<Props> = ({ services, category }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
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
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="text-lg font-medium text-indigo-600">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    <p className="mb-6 text-slate-600">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                      สอบถามเพิ่มเติม
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">พร้อมเริ่มโปรเจกต์ของคุณแล้วหรือยัง?</h2>
          <p className="mt-4 text-slate-300">
            ติดต่อเราวันนี้เพื่อปรึกษาและรับใบเสนอราคาฟรี
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DesignServicesPage;