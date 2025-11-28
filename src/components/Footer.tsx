import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Image src="/images/logo.png" alt="Sunwell Logo" width={150} height={50} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">Sunwell - Năng lượng xanh cho tương lai bền vững</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-300 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-300 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Thiết kế CAD
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Tư vấn kỹ thuật
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Giải pháp năng lượng
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Đào tạo chuyên môn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Công ty</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="#jobs"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 inline-block hover:translate-x-1"
                >
                  Tin tức
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Liên hệ</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-white">Địa chỉ:</strong>
                <br />
                123 Đường ABC, Quận XYZ, TP.HCM
              </p>
              <p>
                <strong className="text-white">Điện thoại:</strong>
                <br />
                +84 123 456 789
              </p>
              <p>
                <strong className="text-white">Email:</strong>
                <br />
                info@sunwell.vn
              </p>
              <p>
                <strong className="text-white">Giờ làm việc:</strong>
                <br />
                8:00 - 17:00 (Thứ 2 - Thứ 6)
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2024 Sunwell. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 text-sm">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 text-sm">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 text-sm">
                Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
