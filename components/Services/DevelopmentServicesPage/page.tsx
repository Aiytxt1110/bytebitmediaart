'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DevService, ServiceCategory } from '../types/service';

type Props = {
  services: DevService[];
  category: ServiceCategory;
};

const DevelopmentServicesPage: React.FC<Props> = ({ services, category }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 text-white">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {service.badge && (
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900">
                      {service.badge}
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-600">
                      {service.description}
                    </p>
                    <p className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </p>
                    <button className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
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
          <h2 className="text-3xl font-bold">พร้อมสร้างระบบที่เหมาะกับธุรกิจคุณ?</h2>
          <p className="mt-4 text-slate-300">
            ปรึกษาฟรี พร้อมรับใบเสนอราคาที่เหมาะสมกับงบของคุณ
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

export default DevelopmentServicesPage;