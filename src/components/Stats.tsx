'use client';

import { useEffect } from 'react';
import { HomeStat } from '@/types/api';

interface StatsProps {
  statsData: HomeStat[];
  locale: string;
}

export default function Stats({ statsData, locale }: StatsProps) {
  const getStatValue = (stat: HomeStat) => {
    if (stat.type === 'plain_text') {
      return stat.text;
    }
    return `${stat.number}${stat.affix_value}`;
  };
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
    <section className="bg-linear-to-r from-orange-300 to-orange-200 py-16 px-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center animate-on-scroll">
            <div className="text-5xl font-bold text-gray-800 mb-2">{getStatValue(stat)}</div>
            <div className="text-lg text-gray-700 font-medium">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
