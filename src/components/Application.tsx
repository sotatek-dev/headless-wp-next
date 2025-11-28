'use client';

import { useState, useEffect } from 'react';

export default function Application() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    category: '',
    position: '',
    summary: '',
    notes: '',
    terms: false,
  });
  const [fileName, setFileName] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-6 w-full bg-gray-100" id="apply">
      <div className="max-w-4xl mx-auto">
        <form
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl animate-on-scroll"
          id="application-form"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center" id="form-title">
            Ứng tuyển ngay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="block text-base font-semibold text-gray-800 mb-2"
                id="form-name-label"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2" id="form-email-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-base font-semibold text-gray-800 mb-2" id="form-phone-label">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-base font-semibold text-gray-800 mb-2"
                id="form-category-label"
              >
                Lĩnh vực
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Chọn lĩnh vực</option>
                <option value="engineering">Kỹ thuật</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Kinh doanh</option>
                <option value="design">Thiết kế</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="mb-6 md:col-span-2">
              <label
                htmlFor="position"
                className="block text-base font-semibold text-gray-800 mb-2"
                id="form-position-label"
              >
                Vị trí ứng tuyển
              </label>
              <input
                type="text"
                id="position"
                name="position"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                value={formData.position}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6 md:col-span-2">
              <label
                htmlFor="summary"
                className="block text-base font-semibold text-gray-800 mb-2"
                id="form-summary-label"
              >
                Giới thiệu ngắn về bản thân
              </label>
              <textarea
                id="summary"
                name="summary"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100 resize-vertical min-h-32"
                value={formData.summary}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6 md:col-span-2">
              <label className="block text-base font-semibold text-gray-800 mb-2" id="form-cv-label">
                Tải lên CV (PDF)
              </label>
              <div
                className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center transition-all duration-300 cursor-pointer hover:border-orange-300 hover:bg-orange-50"
                id="cv-upload-area"
              >
                <div className="text-5xl mb-3 opacity-60">📄</div>
                <p className="text-base text-gray-600 mb-1">Kéo thả file PDF hoặc click để chọn</p>
                <p className="text-sm text-gray-500">Chỉ chấp nhận file PDF, tối đa 5MB</p>
              </div>
              <input type="file" id="cv-file" name="cv" className="hidden" accept=".pdf" onChange={handleFileChange} />
              {fileName && (
                <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium">
                  <span>✓</span>
                  {fileName}
                </div>
              )}
            </div>
            <div className="mb-6 md:col-span-2">
              <label htmlFor="notes" className="block text-base font-semibold text-gray-800 mb-2" id="form-notes-label">
                Ghi chú thêm (không bắt buộc)
              </label>
              <textarea
                id="notes"
                name="notes"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-normal transition-all duration-300 bg-white focus:outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100 resize-vertical min-h-24"
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex items-start gap-3 mb-8">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-5 h-5 mt-1 cursor-pointer"
              checked={formData.terms}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              id="form-terms-label"
            >
              Tôi đồng ý với{' '}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline">
                Điều khoản sử dụng
              </a>{' '}
              và{' '}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline">
                Chính sách bảo mật
              </a>{' '}
              của Sunwell
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            id="submit-button"
          >
            <span id="submit-text">Gửi hồ sơ</span>
          </button>
          <div id="form-message"></div>
        </form>
      </div>
    </section>
  );
}
