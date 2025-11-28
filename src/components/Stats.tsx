'use client';

import { useEffect } from 'react';

export default function Stats() {
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
        <div className="text-center animate-on-scroll">
          <div className="text-5xl font-bold text-gray-800 mb-2">500+</div>
          <div className="text-lg text-gray-700 font-medium">Khách hàng</div>
        </div>
        <div className="text-center animate-on-scroll">
          <div className="text-5xl font-bold text-gray-800 mb-2">1200+</div>
          <div className="text-lg text-gray-700 font-medium">Dự án hoàn thành</div>
        </div>
        <div className="text-center animate-on-scroll">
          <div className="text-5xl font-bold text-gray-800 mb-2">25 năm</div>
          <div className="text-lg text-gray-700 font-medium">Bảo hành</div>
        </div>
        <div className="text-center animate-on-scroll">
          <div className="text-5xl font-bold text-gray-800 mb-2">99%</div>
          <div className="text-lg text-gray-700 font-medium">Hài lòng</div>
        </div>
      </div>
    </section>
  );
}
