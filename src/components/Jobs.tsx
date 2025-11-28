'use client';

import { useState, useEffect } from 'react';
import JobCard, { Job } from './JobCard';
import JobTabs from './JobTabs';

export default function Jobs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const tabs = [
    { id: 'all', label: 'Tất cả' },
    { id: 'engineering', label: 'Kỹ thuật' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Kinh doanh' },
    { id: 'design', label: 'Thiết kế' },
  ];

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Kỹ sư Điện mặt trời',
      category: 'engineering',
      location: 'TP.HCM',
      experience: '2-3 năm',
      type: 'Toàn thời gian',
      description:
        'Chúng tôi đang tìm kiếm Kỹ sư Điện mặt trời có kinh nghiệm để tham gia vào các dự án năng lượng tái tạo.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Điện',
        'Có kinh nghiệm với hệ thống năng lượng mặt trời',
        'Thành thạo AutoCAD và phần mềm thiết kế',
        'Kỹ năng giao tiếp tốt',
      ],
      benefits: ['Lương thưởng cạnh tranh', 'Đào tạo chuyên môn', 'Môi trường làm việc năng động', 'Cơ hội thăng tiến'],
    },
    {
      id: 2,
      title: 'Thiết kế viên CAD',
      category: 'design',
      location: 'Hà Nội',
      experience: '1-2 năm',
      type: 'Toàn thời gian',
      description: 'Vị trí Thiết kế viên CAD cho các dự án kỹ thuật và năng lượng tái tạo.',
      requirements: [
        'Thành thạo AutoCAD, SolidWorks',
        'Có kinh nghiệm thiết kế kỹ thuật',
        'Tốt nghiệp Đại học chuyên ngành Cơ khí/Kỹ thuật',
        'Chăm chỉ và tỉ mỉ',
      ],
      benefits: [
        'Làm việc với công nghệ mới',
        'Được đào tạo nâng cao kỹ năng',
        'Môi trường làm việc chuyên nghiệp',
        'Thưởng hiệu suất tốt',
      ],
    },
    {
      id: 3,
      title: 'Chuyên viên Marketing',
      category: 'marketing',
      location: 'TP.HCM',
      experience: '1-3 năm',
      type: 'Toàn thời gian',
      description: 'Tìm kiếm Chuyên viên Marketing năng động để phát triển thương hiệu và mở rộng thị trường.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Marketing',
        'Có kinh nghiệm content creation',
        'Thành thạo các công cụ marketing online',
        'Kỹ năng giao tiếp và thuyết trình tốt',
      ],
      benefits: [
        'Lương thưởng hấp dẫn',
        'Được tham gia các dự án lớn',
        'Môi trường làm việc sáng tạo',
        'Cơ hội phát triển bản thân',
      ],
    },
    {
      id: 4,
      title: 'Nhân viên Kinh doanh',
      category: 'sales',
      location: 'Đà Nẵng',
      experience: '0-2 năm',
      type: 'Toàn thời gian',
      description: 'Vị trí Nhân viên Kinh doanh cho mảng năng lượng tái tạo và giải pháp kỹ thuật.',
      requirements: [
        'Tốt nghiệp Đại học',
        'Có kỹ năng giao tiếp tốt',
        'Thích công việc kinh doanh',
        'Có tinh thần cầu tiến',
      ],
      benefits: [
        'Hoa hồng hấp dẫn',
        'Đào tạo bán hàng chuyên nghiệp',
        'Môi trường làm việc thân thiện',
        'Cơ hội thăng tiến nhanh',
      ],
    },
    {
      id: 5,
      title: 'Kỹ sư Dự án',
      category: 'engineering',
      location: 'TP.HCM',
      experience: '3-5 năm',
      type: 'Toàn thời gian',
      description: 'Kỹ sư Dự án có kinh nghiệm quản lý các dự án năng lượng mặt trời và kỹ thuật.',
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Kỹ thuật',
        'Có kinh nghiệm quản lý dự án',
        'Thành thạo PMP hoặc tương đương',
        'Kỹ năng lãnh đạo và quản lý đội ngũ',
      ],
      benefits: [
        'Lương thưởng cao',
        'Được quản lý các dự án lớn',
        'Môi trường làm việc chuyên nghiệp',
        'Cơ hội phát triển sự nghiệp',
      ],
    },
    {
      id: 6,
      title: 'Nhà thiết kế UI/UX',
      category: 'design',
      location: 'Hà Nội',
      experience: '2-4 năm',
      type: 'Toàn thời gian',
      description: 'Thiết kế giao diện người dùng cho các ứng dụng và website công ty.',
      requirements: [
        'Thành thạo Figma, Adobe XD',
        'Có portfolio thiết kế',
        'Hiểu biết về UX principles',
        'Có kinh nghiệm thiết kế responsive',
      ],
      benefits: [
        'Làm việc với dự án mới mẻ',
        'Môi trường sáng tạo',
        'Được tham gia workshop',
        'Lương thưởng cạnh tranh',
      ],
    },
  ];

  const filteredJobs = activeCategory === 'all' ? jobs : jobs.filter((job) => job.category === activeCategory);

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
    <section className="py-20 px-6 w-full bg-white" id="jobs">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center tracking-tight" id="jobs-title">
          Cơ hội nghề nghiệp
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center" id="jobs-subtitle">
          Tham gia đội ngũ của chúng tôi và phát triển sự nghiệp
        </p>

        <JobTabs tabs={tabs} activeTab={activeCategory} onTabChange={setActiveCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="jobs-grid">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
