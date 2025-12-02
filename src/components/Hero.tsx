'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import { HeroSliderItem } from '@/types/api';

interface HeroProps {
  heroData: HeroSliderItem[];
  locale: string;
}

export default function Hero({ heroData, locale }: HeroProps) {
  const t = useTranslations('home');

  return (
    <section
      className="relative bg-linear-to-br from-white via-orange-50 to-orange-100 pt-32 pb-24 px-6 w-full overflow-hidden box-border"
      id="home"
    >
      <div className="absolute -top-24 -right-16 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center relative z-10 w-full box-border">
        <div className="lg:col-span-2 animate-[slideInLeft_0.8s_ease-out]">
          <h1
            className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight tracking-tight"
            id="hero-title"
          >
            {heroData[0]?.title}
          </h1>
          <p className="text-xl text-gray-600 mb-9 leading-relaxed" id="hero-subtitle">
            {heroData[0]?.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#jobs"
              className="bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-9 py-4 rounded-full text-base font-semibold cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              id="hero-cta-primary"
            >
              {t('careers')}
            </a>
            <a
              href="#about"
              className="bg-transparent text-gray-600 px-9 py-4 rounded-full text-base font-semibold cursor-pointer border-2 border-gray-200 transition-all duration-300 hover:border-orange-300 hover:text-orange-300 hover:bg-orange-50"
              id="hero-cta-secondary"
            >
              {t('learnMore')}
            </a>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-5 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-96 max-w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            {heroData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image || '/images/slide_1.webp'}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
