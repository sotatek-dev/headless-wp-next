'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { HomeServices } from '@/types/api';

interface ServicesProps {
  servicesData: HomeServices;
  locale: string;
}

export default function Services({ servicesData, locale }: ServicesProps) {
  const t = useTranslations('services');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 w-full bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center tracking-tight" id="services-title">
          {servicesData.title}
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">{servicesData.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.list_services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-orange-300 relative overflow-hidden animate-on-scroll before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-orange-300 before:to-orange-200 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
            >
              <div className="text-6xl mb-6 transition-transform duration-300 hover:animate-[fadeInUp_0.3s_ease-out]">
                {index === 0 ? '⚡' : '📐'}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">{service.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <span className="text-orange-300 font-bold text-lg">✓</span>
                    {item.item_name}
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="inline-block bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {index === 0 ? t('solar.cta') : t('cad.cta')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
