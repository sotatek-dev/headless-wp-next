import { http, HttpResponse } from 'msw';
import { JOBS_DATA } from '@/lib/constants';
import { JobsResponse, StatsResponse, HeroResponse, HomePageResponse } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Helper function to create homepage response
const getHomepageResponse = (request: Request) => {
  const acceptLanguage = request.headers.get('Accept-Language') || 'vi';
  const lang = acceptLanguage.split(',')[0].trim().toLowerCase();

  const content = {
    vi: {
      hero_slider: [
        {
          title: 'Năng lượng xanh cho tương lai',
          subtitle: 'Giải pháp năng lượng mặt trời và dịch vụ CAD chuyên nghiệp',
          button_text: 'Tìm hiểu thêm',
          button_link: '#about',
          image: '/images/slide_1.webp',
        },
        {
          title: 'Tiên phong công nghệ năng lượng',
          subtitle: 'Tạo ra tương lai bền vững với công nghệ tiên tiến',
          button_text: 'Khám phá',
          button_link: '#services',
          image: '/images/slide_2.webp',
        },
      ],
      home_about: {
        title: 'Về Sunwell',
        content:
          'Sunwell là công ty hàng đầu trong lĩnh vực năng lượng tái tạo và dịch vụ CAD tại Việt Nam. Với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ tiên tiến, chúng tôi cam kết mang đến những giải pháp tối ưu cho khách hàng.',
      },
      home_title: { title: 'Trang chủ - Sunwell' },
      home_services: {
        title: 'Dịch vụ của chúng tôi',
        subtitle: 'Giải pháp toàn diện cho nhu cầu của bạn',
        list_services: [
          {
            icon: false,
            title: 'Năng lượng mặt trời',
            subtitle: 'Hệ thống năng lượng mặt trời tiên tiến, giúp tiết kiệm chi phí điện năng và bảo vệ môi trường',
            items: [{ item_name: 'Tư vấn và khảo sát miễn phí' }, { item_name: 'Thiết kế hệ thống tối ưu' }],
          },
          {
            icon: false,
            title: 'Thiết kế CAD Outsourcing',
            subtitle: 'Dịch vụ thiết kế CAD chuyên nghiệp, chất lượng cao với đội ngũ kỹ sư giàu kinh nghiệm',
            items: [{ item_name: 'Thiết kế 2D/3D chuyên nghiệp' }, { item_name: 'Mô hình hóa sản phẩm' }],
          },
        ],
        button_title: '',
        button_link: '',
      },
      home_jobs: {
        title: 'Cơ hội nghề nghiệp',
        subtitle: 'Tham gia đội ngũ của chúng tôi và phát triển sự nghiệp',
        list: JOBS_DATA[lang as keyof typeof JOBS_DATA].slice(0, 6).map((job) => ({
          ...job,
        })),
      },
      seo: {
        keyword: 'năng lượng xanh, CAD, thiết kế, năng lượng mặt trời',
        description: 'Sunwell - Giải pháp năng lượng xanh và dịch vụ CAD chuyên nghiệp',
      },
    },
    en: {
      hero_slider: [
        {
          title: 'Green Energy for the Future',
          subtitle: 'Professional solar energy solutions and CAD services',
          button_text: 'Learn More',
          button_link: '#about',
          image: '/images/slide_1.webp',
        },
        {
          title: 'Pioneering Energy Technology',
          subtitle: 'Creating a sustainable future with advanced technology',
          button_text: 'Explore',
          button_link: '#services',
          image: '/images/slide_2.webp',
        },
      ],
      home_about: {
        title: 'About Sunwell',
        content:
          'Sunwell is a leading company in renewable energy and CAD services in Vietnam. With an experienced team of experts and advanced technology, we are committed to providing optimal solutions for our clients.',
      },
      home_title: { title: 'Homepage - Sunwell' },
      home_services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for your needs',
        list_services: [
          {
            icon: false,
            title: 'Solar Energy',
            subtitle: 'Advanced solar energy systems that help save electricity costs and protect the environment',
            items: [{ item_name: 'Free consultation and survey' }, { item_name: 'Optimal system design' }],
          },
          {
            icon: false,
            title: 'CAD Outsourcing Design',
            subtitle: 'Professional, high-quality CAD design services with an experienced team of engineers',
            items: [{ item_name: 'Professional 2D/3D design' }, { item_name: 'Product modeling' }],
          },
        ],
        button_title: '',
        button_link: '',
      },
      home_jobs: {
        title: 'Career Opportunities',
        subtitle: 'Join our team and develop your career',
        list: JOBS_DATA[lang as keyof typeof JOBS_DATA].slice(0, 6).map((job) => ({
          ...job,
        })),
      },
      seo: {
        keyword: 'green energy, CAD, design, solar energy',
        description: 'Sunwell - Green energy solutions and professional CAD services',
      },
    },
    jp: {
      hero_slider: [
        {
          title: '未来のためのグリーンエネルギー',
          subtitle: 'プロフェッショナルな太陽エネルギーソリューションとCADサービス',
          button_text: '続きを読む',
          button_link: '#about',
          image: '/images/slide_1.webp',
        },
        {
          title: 'エネルギー技術の先駆者',
          subtitle: '先進技術で持続可能な未来を創る',
          button_text: '探検する',
          button_link: '#services',
          image: '/images/slide_2.webp',
        },
      ],
      home_about: {
        title: 'Sunwellについて',
        content:
          'Sunwellは、ベトナムにおける再生可能エネルギーとCADサービスの大手企業です。経験豊富な専門家チームと先進技術により、お客様に最適なソリューションを提供することをお約束します。',
      },
      home_title: { title: 'ホームページ - Sunwell' },
      home_services: {
        title: '私たちのサービス',
        subtitle: 'あなたのニーズに対する包括的なソリューション',
        list_services: [
          {
            icon: false,
            title: '太陽エネルギー',
            subtitle: '電気代の節約と環境保護に役立つ先進的な太陽エネルギーシステム',
            items: [{ item_name: '無料相談と調査' }, { item_name: '最適なシステム設計' }],
          },
          {
            icon: false,
            title: 'CADアウトソーシング設計',
            subtitle: '経験豊富なエンジニアチームによるプロフェッショナルで高品質なCAD設計サービス',
            items: [{ item_name: 'プロフェッショナルな2D/3D設計' }, { item_name: '製品モデリング' }],
          },
        ],
        button_title: '',
        button_link: '',
      },
      home_jobs: {
        title: 'キャリアの機会',
        subtitle: '私たちのチームに参加してキャリアを発展させましょう',
        list: JOBS_DATA[lang as keyof typeof JOBS_DATA].slice(0, 6).map((job) => ({
          ...job,
        })),
      },
      seo: {
        keyword: 'グリーンエネルギー、CAD、デザイン、太陽エネルギー',
        description: 'Sunwell - グリーンエネルギーソリューションとプロフェッショナルなCADサービス',
      },
    },
  };

  const localeContent = content[lang as keyof typeof content] || content.vi;

  const response: HomePageResponse = {
    success: true,
    message: 'Data fetched successfully',
    data: {
      ...localeContent,
      language: lang,

      home_stats: [
        {
          type: 'animate_number',
          number: '500',
          affix_type: 'suffix',
          text: '',
          description: lang === 'vi' ? 'Khách hàng' : lang === 'en' ? 'Customers' : '顧客',
          affix_value: '+',
        },
        {
          type: 'animate_number',
          number: '1200',
          affix_type: 'suffix',
          text: '',
          description:
            lang === 'vi' ? 'Dự án hoàn thành' : lang === 'en' ? 'Completed Projects' : '完了したプロジェクト',
          affix_value: '+',
        },
        {
          type: 'plain_text',
          number: '',
          affix_type: 'suffix',
          text: lang === 'vi' ? '25 năm' : lang === 'en' ? '25 years' : '25年',
          description: lang === 'vi' ? 'Bảo hành' : lang === 'en' ? 'Warranty' : '保証',
          affix_value: '',
        },
        {
          type: 'animate_number',
          number: '99',
          affix_type: 'suffix',
          text: '',
          description: lang === 'vi' ? 'Hài lòng' : lang === 'en' ? 'Satisfaction' : '満足度',
          affix_value: '%',
        },
      ],
    },
    status: 200,
  };

  return HttpResponse.json(response);
};

export const handlers = [
  // Homepage API - without locale prefix
  http.get(`${API_BASE_URL}/wp-json/api/v1/homepage`, ({ request }) => getHomepageResponse(request)),

  // Homepage API - with locale prefix (vi/en/jp)
  http.get(`${API_BASE_URL}/:locale/wp-json/api/v1/homepage`, ({ request }) => getHomepageResponse(request)),

  // Get all jobs
  http.get('*/jobs', ({ request }) => {
    const lang = request.headers.get('Accept-Language')?.split(',')[0].slice(0, 2) || 'vi';
    const response: JobsResponse = {
      data: JOBS_DATA[lang as keyof typeof JOBS_DATA],
      total: JOBS_DATA[lang as keyof typeof JOBS_DATA].length,
    };
    return HttpResponse.json(response);
  }),

  // Get job by ID
  http.get('*/jobs/:id', ({ params, request }) => {
    const { id } = params;
    const lang = request.headers.get('Accept-Language')?.split(',')[0].slice(0, 2) || 'vi';
    const job = JOBS_DATA[lang as keyof typeof JOBS_DATA].find((j) => j.id === Number(id));

    if (!job) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({ data: job });
  }),

  // Get stats
  http.get('*/stats', () => {
    const response: StatsResponse = {
      data: {
        customers: '500+',
        projects: '1200+',
        warranty: '25 năm',
        satisfaction: '99%',
      },
    };
    return HttpResponse.json(response);
  }),

  // Get hero slides
  http.get('*/hero', () => {
    const response: HeroResponse = {
      data: {
        slides: [
          { id: 1, url: '/images/slide_1.webp', alt: 'Slide 1' },
          { id: 2, url: '/images/slide_2.webp', alt: 'Slide 2' },
          { id: 3, url: '/images/slide_3.webp', alt: 'Slide 3' },
          { id: 4, url: '/images/slide_4.webp', alt: 'Slide 4' },
        ],
      },
    };
    return HttpResponse.json(response);
  }),
];
