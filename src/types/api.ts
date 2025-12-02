export interface JobsResponse {
  data: HomeJobItem[];
  total: number;
}

export interface StatsData {
  customers: string;
  projects: string;
  warranty: string;
  satisfaction: string;
}

export interface StatsResponse {
  data: StatsData;
}

export interface HeroSlide {
  id: number;
  url: string;
  alt: string;
}

export interface HeroResponse {
  data: {
    slides: HeroSlide[];
  };
}

// Homepage API Types based on actual API response
export interface HeroSliderItem {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  image?: string;
}

export interface HomeAbout {
  title: string;
  content: string;
}

export interface HomeTitle {
  title: string;
}

export interface ServiceItem {
  item_name: string;
}

export interface ServiceDetail {
  icon: boolean | string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface HomeServices {
  title: string;
  subtitle: string;
  list_services: ServiceDetail[];
  button_title: string;
  button_link: string;
}

export interface HomeStat {
  type: 'animate_number' | 'plain_text';
  number: string;
  affix_type: string;
  text: string;
  description: string;
  affix_value: string;
}

export interface JobLocation {
  value: string;
  label: string;
}

export interface JobCategory {
  id: number;
  title: string;
}

export interface CompanyInfoData {
  establishmentDate: string;
  ceo: string;
  businessDetails: string[];
  employeeCount: string;
  capital: string;
  salesAmount: string;
  headquarters: {
    name: string;
    address: string;
    mapUrl: string;
  };
  branchOffices: Array<{
    name: string;
    address: string;
    mapUrl: string;
  }>;
  corporateSite: string;
}

export interface HomeJobItem {
  language: string;
  title: string;
  location: JobLocation;
  content: string;
  category: JobCategory;
  experience_from_year: string;
  experience_to_year: string;
  job_type: string;
  id: number | string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  company: CompanyInfoData;
}

export interface HomeJobs {
  title: string;
  subtitle: string;
  list: HomeJobItem[];
}

export interface SEO {
  keyword: string;
  description: string;
}

export interface HomePageData {
  hero_slider: HeroSliderItem[];
  home_about: HomeAbout;
  language: string;
  seo: SEO;
  home_title: HomeTitle;
  home_services: HomeServices;
  home_stats: HomeStat[];
  home_jobs: HomeJobs;
}

export interface HomePageResponse {
  success: boolean;
  message: string;
  data: HomePageData;
  status: number;
}
