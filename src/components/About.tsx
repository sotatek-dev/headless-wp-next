'use client';

import { useEffect } from 'react';

export default function About() {
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
    <section className="py-20 px-6 w-full bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">
          <div className="about-text">
            <h2 className="text-4xl font-bold text-gray-800 mb-6" id="about-title">
              Về Sunwell
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6" id="about-description">
              Chúng tôi là đơn vị tiên phong trong lĩnh vực năng lượng mặt trời và dịch vụ CAD outsourcing tại Việt Nam.
              Với sứ mệnh mang đến giải pháp năng lượng sạch, bền vững cho mọi gia đình và doanh nghiệp.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Đội ngũ chuyên gia giàu kinh nghiệm của Sunwell luôn sẵn sàng đồng hành cùng khách hàng, từ tư vấn, thiết
              kế, thi công đến bảo trì, đảm bảo mọi dự án đạt chất lượng cao nhất.
            </p>
          </div>
          <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl p-16 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="text-9xl">🏢</div>
          </div>
        </div>
      </div>
    </section>
  );
}
