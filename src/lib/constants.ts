import { HomeJobItem } from '@/types/api';
import { fakerEN, fakerJA, fakerVI } from '@faker-js/faker';

type LocaleJob = {
  [key in 'vi' | 'en' | 'jp']: HomeJobItem[];
};

const categories = ['engineering', 'sales', 'marketing', 'management', 'operations'] as const;
const types = ['Full-time', 'Part-time', 'Contract', 'Internship'] as const;

const generateVietnameseJobs = (count: number): HomeJobItem[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    language: 'vi',
    title: fakerVI.person.jobTitle(),
    category: {
      id: fakerVI.number.int(),
      title: fakerVI.helpers.arrayElement(categories),
    },
    location: {
      value: fakerVI.location.city(),
      label: fakerVI.location.countryCode(),
    },
    content: fakerVI.lorem.paragraph(),
    experience_from_year: fakerVI.number.int({ min: 1, max: 5 }).toString(),
    experience_to_year: fakerVI.number.int({ min: 2, max: 7 }).toString(),
    job_type: fakerVI.helpers.arrayElement(['Toàn thời gian', 'Bán thời gian', 'Hợp đồng', 'Thực tập']),
    type: fakerVI.helpers.arrayElement(['Toàn thời gian', 'Bán thời gian', 'Hợp đồng', 'Thực tập']),
    description: fakerVI.lorem.paragraph(),
    requirements: Array.from({ length: fakerVI.number.int({ min: 4, max: 8 }) }, () => fakerVI.lorem.sentence()),
    benefits: Array.from({ length: fakerVI.number.int({ min: 5, max: 10 }) }, () => fakerVI.lorem.sentence()),
    company: {
      establishmentDate: fakerVI.date.past({ years: 20 }).toISOString().split('T')[0],
      ceo: fakerVI.person.fullName(),
      businessDetails: Array.from({ length: fakerVI.number.int({ min: 3, max: 6 }) }, () =>
        fakerVI.commerce.department(),
      ),
      employeeCount: fakerVI.number.int({ min: 10, max: 5000 }).toString(),
      capital: `${fakerVI.number.int({ min: 1, max: 500 })} tỷ VND`,
      salesAmount: `${fakerVI.number.int({ min: 10, max: 1000 })} tỷ VND`,
      headquarters: {
        name: 'Trụ sở chính',
        address: fakerVI.location.streetAddress({ useFullAddress: true }),
        mapUrl: fakerVI.internet.url(),
      },
      branchOffices: Array.from({ length: fakerVI.number.int({ min: 1, max: 3 }) }, (_, j) => ({
        name: `Chi nhánh ${j + 1}`,
        address: fakerVI.location.streetAddress({ useFullAddress: true }),
        mapUrl: fakerVI.internet.url(),
      })),
      corporateSite: fakerVI.internet.url(),
    },
  }));
};

const generateEnglishJobs = (count: number): HomeJobItem[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    language: 'en',
    title: fakerEN.person.jobTitle(),
    category: {
      id: fakerEN.number.int(),
      title: fakerEN.helpers.arrayElement(categories),
    },
    location: {
      value: fakerEN.helpers.arrayElement(['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Can Tho']),
      label: fakerEN.location.countryCode(),
    },
    content: fakerEN.lorem.paragraph(),
    experience_from_year: fakerEN.number.int({ min: 1, max: 5 }).toString(),
    experience_to_year: fakerEN.number.int({ min: 2, max: 7 }).toString(),
    job_type: fakerEN.helpers.arrayElement(types),
    type: fakerEN.helpers.arrayElement(types),
    description: fakerEN.lorem.paragraph(),
    requirements: Array.from({ length: fakerEN.number.int({ min: 4, max: 8 }) }, () => fakerEN.lorem.sentence()),
    benefits: Array.from({ length: fakerEN.number.int({ min: 5, max: 10 }) }, () => fakerEN.lorem.sentence()),
    company: {
      establishmentDate: fakerEN.date.past({ years: 20 }).toISOString().split('T')[0],
      ceo: fakerEN.person.fullName(),
      businessDetails: Array.from({ length: fakerEN.number.int({ min: 3, max: 6 }) }, () =>
        fakerEN.commerce.department(),
      ),
      employeeCount: fakerEN.number.int({ min: 10, max: 5000 }).toString(),
      capital: `$${fakerEN.number.int({ min: 1, max: 500 })}M`,
      salesAmount: `$${fakerEN.number.int({ min: 10, max: 1000 })}M`,
      headquarters: {
        name: 'Headquarters',
        address: fakerEN.location.streetAddress({ useFullAddress: true }),
        mapUrl: fakerEN.internet.url(),
      },
      branchOffices: Array.from({ length: fakerEN.number.int({ min: 1, max: 3 }) }, (_, j) => ({
        name: `Branch Office ${j + 1}`,
        address: fakerEN.location.streetAddress({ useFullAddress: true }),
        mapUrl: fakerEN.internet.url(),
      })),
      corporateSite: fakerEN.internet.url(),
    },
  }));
};

const generateJapaneseJobs = (count: number): HomeJobItem[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    language: 'jp',
    title: fakerJA.person.jobTitle(),
    category: {
      id: fakerJA.number.int(),
      title: fakerJA.helpers.arrayElement(categories),
    },
    location: {
      value: fakerJA.helpers.arrayElement(['ホーチミン市', 'ハノイ', 'ダナン', 'カントー']),
      label: fakerJA.location.countryCode(),
    },
    content: fakerJA.lorem.paragraph(),
    experience_from_year: fakerJA.number.int({ min: 1, max: 5 }).toString(),
    experience_to_year: fakerJA.number.int({ min: 2, max: 7 }).toString(),
    job_type: fakerJA.helpers.arrayElement(['フルタイム', 'パートタイム', '契約', 'インターン']),
    type: fakerJA.helpers.arrayElement(['フルタイム', 'パートタイム', '契約', 'インターン']),
    description: fakerJA.lorem.paragraph(),
    requirements: Array.from({ length: fakerJA.number.int({ min: 4, max: 8 }) }, () => fakerJA.lorem.sentence()),
    benefits: Array.from({ length: fakerJA.number.int({ min: 5, max: 10 }) }, () => fakerJA.lorem.sentence()),
    company: {
      establishmentDate: fakerJA.date.past({ years: 20 }).toISOString().split('T')[0],
      ceo: fakerJA.person.fullName(),
      businessDetails: Array.from({ length: fakerJA.number.int({ min: 3, max: 6 }) }, () =>
        fakerJA.commerce.department(),
      ),
      employeeCount: fakerJA.number.int({ min: 10, max: 5000 }).toString(),
      capital: `¥${fakerJA.number.int({ min: 1, max: 500 })}M`,
      salesAmount: `¥${fakerJA.number.int({ min: 10, max: 1000 })}M`,
      headquarters: {
        name: '本社',
        address: fakerJA.location.streetAddress({ useFullAddress: true }),
        mapUrl: fakerJA.internet.url(),
      },
      branchOffices: Array.from({ length: fakerJA.number.int({ min: 1, max: 3 }) }, (_, j) => ({
        name: `支社${j + 1}`,
        address: fakerJA.location.streetAddress({ useFullAddress: true }),
        mapUrl: fakerJA.internet.url(),
      })),
      corporateSite: fakerJA.internet.url(),
    },
  }));
};

export const JOBS_DATA: LocaleJob = {
  vi: generateVietnameseJobs(20),
  en: generateEnglishJobs(20),
  jp: generateJapaneseJobs(20),
};
