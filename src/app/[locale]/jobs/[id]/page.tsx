'use client';

import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Job } from '../../../../components/JobCard';
import Hero from '@/src/components/Hero';
import JobDetails from '../../../../components/JobDetails';
import CompanyInfo from '../../../../components/CompanyInfo';
import ApplicationModal from '../../../../components/ApplicationModal';

const jobs: Job[] = [
  {
    id: 1,
    title: 'Kỹ sư Điện mặt trời',
    category: 'engineering',
    location: 'TP.HCM',
    experience: '2-3 năm',
    type: 'Toàn thời gian',
    description:
      'Chúng tôi đang tìm kiếm Kỹ sư Điện mặt trời có kinh nghiệm để tham gia vào các dự án năng lượng tái tạo. Bạn sẽ có cơ hội làm việc với các công nghệ tiên tiến nhất trong lĩnh vực năng lượng mặt trời.',
    requirements: [
      'Tốt nghiệp Đại học chuyên ngành Điện hoặc ngành liên quan',
      'Có kinh nghiệm 2-3 năm trong lĩnh vực năng lượng mặt trời',
      'Thành thạo AutoCAD và phần mềm thiết kế kỹ thuật',
      'Có kiến thức về hệ thống điện mặt trời, inverter, và các thành phần liên quan',
      'Kỹ năng giao tiếp tốt, có thể làm việc nhóm',
      'Có khả năng đọc hiểu tiếng Anh chuyên ngành',
    ],
    benefits: [
      'Lương thưởng cạnh tranh theo năng lực',
      'Đào tạo chuyên môn liên tục',
      'Môi trường làm việc năng động, sáng tạo',
      'Cơ hội thăng tiến và phát triển sự nghiệp',
      'Tham gia các dự án quốc tế',
      'Chế độ bảo hiểm đầy đủ',
      'Du lịch công ty hàng năm',
    ],
  },
  {
    id: 2,
    title: 'Thiết kế viên CAD',
    category: 'design',
    location: 'Hà Nội',
    experience: '1-2 năm',
    type: 'Toàn thời gian',
    description:
      'Vị trí Thiết kế viên CAD cho các dự án kỹ thuật và năng lượng tái tạo. Bạn sẽ tham gia vào việc thiết kế các hệ thống năng lượng mặt trời và các giải pháp kỹ thuật.',
    requirements: [
      'Thành thạo AutoCAD, SolidWorks hoặc phần mềm thiết kế tương đương',
      'Có kinh nghiệm thiết kế kỹ thuật 1-2 năm',
      'Tốt nghiệp Đại học chuyên ngành Cơ khí/Kỹ thuật',
      'Chăm chỉ, tỉ mỉ và có khả năng làm việc độc lập',
      'Có khả năng làm việc dưới áp lực deadline',
      'Ưu tiên có kinh nghiệm trong lĩnh vực năng lượng',
    ],
    benefits: [
      'Làm việc với công nghệ mới nhất',
      'Được đào tạo nâng cao kỹ năng chuyên môn',
      'Môi trường làm việc chuyên nghiệp',
      'Thưởng hiệu suất tốt hàng tháng',
      'Cơ hội tham gia các khóa đào tạo',
      'Chế độ đãi ngộ hấp dẫn',
    ],
  },
  {
    id: 3,
    title: 'Chuyên viên Marketing',
    category: 'marketing',
    location: 'TP.HCM',
    experience: '1-3 năm',
    type: 'Toàn thời gian',
    description:
      'Tìm kiếm Chuyên viên Marketing năng động để phát triển thương hiệu và mở rộng thị trường. Bạn sẽ chịu trách nhiệm xây dựng chiến lược marketing và phát triển kinh doanh.',
    requirements: [
      'Tốt nghiệp Đại học chuyên ngành Marketing, Kinh tế hoặc tương đương',
      'Có kinh nghiệm 1-3 năm trong lĩnh vực marketing',
      'Có kinh nghiệm content creation và quản lý mạng xã hội',
      'Thành thạo các công cụ marketing online (Google Ads, Facebook Ads, SEO)',
      'Kỹ năng giao tiếp và thuyết trình tốt',
      'Có khả năng phân tích dữ liệu và báo cáo',
    ],
    benefits: [
      'Lương thưởng hấp dẫn theo KPI',
      'Được tham gia các dự án marketing lớn',
      'Môi trường làm việc sáng tạo, trẻ trung',
      'Cơ hội phát triển bản thân và thăng tiến',
      'Tham gia các sự kiện ngành',
      'Chế độ thưởng nóng',
    ],
  },
  {
    id: 4,
    title: 'Nhân viên Kinh doanh',
    category: 'sales',
    location: 'Đà Nẵng',
    experience: '0-2 năm',
    type: 'Toàn thời gian',
    description:
      'Vị trí Nhân viên Kinh doanh cho mảng năng lượng tái tạo và giải pháp kỹ thuật. Bạn sẽ phát triển thị trường và tìm kiếm khách hàng tiềm năng.',
    requirements: [
      'Tốt nghiệp Đại học trở lên',
      'Có kỹ năng giao tiếp và thuyết phục tốt',
      'Thích công việc kinh doanh và có tinh thần cầu tiến',
      'Có khả năng làm việc độc lập và theo nhóm',
      'Ưu tiên có kinh nghiệm bán hàng B2B',
      'Có kỹ năng sử dụng máy tính văn phòng',
    ],
    benefits: [
      'Hoa hồng hấp dẫn theo doanh số',
      'Đào tạo bán hàng chuyên nghiệp',
      'Môi trường làm việc thân thiện, hỗ trợ',
      'Cơ hội thăng tiến nhanh chóng',
      'Thưởng hiệu suất hàng tháng',
      'Chế độ phúc lợi đầy đủ',
    ],
  },
  {
    id: 5,
    title: 'Kỹ sư Dự án',
    category: 'engineering',
    location: 'TP.HCM',
    experience: '3-5 năm',
    type: 'Toàn thời gian',
    description:
      'Kỹ sư Dự án có kinh nghiệm quản lý các dự án năng lượng mặt trời và kỹ thuật. Bạn sẽ chịu trách nhiệm quản lý toàn bộ vòng đời của dự án từ lập kế hoạch đến bàn giao.',
    requirements: [
      'Tốt nghiệp Đại học chuyên ngành Kỹ thuật hoặc Quản lý dự án',
      'Có kinh nghiệm 3-5 năm trong quản lý dự án kỹ thuật',
      'Có chứng chỉ PMP hoặc tương đương là một lợi thế',
      'Kỹ năng lãnh đạo và quản lý đội ngũ',
      'Thành thạo các công cụ quản lý dự án',
      'Có khả năng làm việc dưới áp lực cao',
    ],
    benefits: [
      'Lương thưởng cao theo năng lực',
      'Được quản lý các dự án lớn, tầm cỡ',
      'Môi trường làm việc chuyên nghiệp',
      'Cơ hội phát triển sự nghiệp quốc tế',
      'Tham gia các hội thảo ngành',
      'Chế độ đãi ngộ đặc biệt',
    ],
  },
  {
    id: 6,
    title: 'Nhà thiết kế UI/UX',
    category: 'design',
    location: 'Hà Nội',
    experience: '2-4 năm',
    type: 'Toàn thời gian',
    description:
      'Thiết kế giao diện người dùng cho các ứng dụng và website công ty. Bạn sẽ tạo ra các trải nghiệm người dùng tuyệt vời cho sản phẩm của chúng tôi.',
    requirements: [
      'Thành thạo Figma, Adobe XD, Sketch',
      'Có portfolio thiết kế ấn tượng',
      'Hiểu biết sâu về UX principles và design systems',
      'Có kinh nghiệm thiết kế responsive design',
      'Thành thạo prototyping và user testing',
      'Có khả năng làm việc với developer',
    ],
    benefits: [
      'Làm việc với dự án mới mẻ, sáng tạo',
      'Môi trường làm việc thiết kế chuyên nghiệp',
      'Được tham gia workshop và conference',
      'Lương thưởng cạnh tranh ngành',
      'Cơ hội làm việc với client quốc tế',
      'Chế độ creative freedom cao',
    ],
  },
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function JobPage({ params }: PageProps) {
  const [job, setJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      const resolvedParams = await params;
      const foundJob = jobs.find((j) => j.id === parseInt(resolvedParams.id));
      if (!foundJob) {
        notFound();
      }
      setJob(foundJob);
    };
    fetchJob();
  }, [params]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero />
      <main className="pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <JobDetails job={job} />
          <CompanyInfo onApplyClick={() => setIsModalOpen(true)} />
        </div>

        <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} jobTitle={job.title} />
      </main>
    </>
  );
}
