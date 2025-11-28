'use client';

import { useEffect } from 'react';

export default function Services() {
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
          Dịch vụ của chúng tôi
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">Giải pháp toàn diện cho nhu cầu của bạn</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-orange-300 relative overflow-hidden animate-on-scroll before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-orange-300 before:to-orange-200 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left">
            <div className="text-6xl mb-6 transition-transform duration-300 hover:animate-[fadeInUp_0.3s_ease-out]">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4" id="service-solar-title">
              Năng lượng mặt trời
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Hệ thống năng lượng mặt trời tiên tiến, giúp tiết kiệm chi phí điện năng và bảo vệ môi trường
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Tư vấn và khảo sát miễn phí
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Thiết kế hệ thống tối ưu
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Thi công chuyên nghiệp
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Bảo hành dài hạn 25 năm
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Hỗ trợ vận hành 24/7
              </li>
            </ul>
            <a
              href="#apply"
              className="inline-block bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Liên hệ tư vấn
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-orange-300 relative overflow-hidden animate-on-scroll before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-orange-300 before:to-orange-200 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left">
            <div className="text-6xl mb-6 transition-transform duration-300  hover:animate-[fadeInUp_0.3s_ease-out]">
              📐
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4" id="service-cad-title">
              Thiết kế CAD Outsourcing
            </h3>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Dịch vụ thiết kế CAD chuyên nghiệp, chất lượng cao với đội ngũ kỹ sư giàu kinh nghiệm
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Thiết kế 2D/3D chuyên nghiệp
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Mô hình hóa sản phẩm
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Bản vẽ kỹ thuật chi tiết
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Rendering và visualization
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-orange-300 font-bold text-lg">✓</span>
                Tối ưu chi phí và thời gian
              </li>
            </ul>
            <a
              href="#apply"
              className="inline-block bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Yêu cầu dịch vụ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
