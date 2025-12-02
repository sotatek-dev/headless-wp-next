'use client';

import { HomeJobItem } from '@/types/api';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface JobCardProps {
  job: HomeJobItem;
}

export default function JobCard({ job }: JobCardProps) {
  const t = useTranslations('jobs');

  // const getCategoryName = (category: string) => {
  //   const categoryKey = `categories.${category}` as any;
  //   return t(categoryKey);
  // };

  return (
    <Link href={`/jobs/${job.id}`} className="block">
      <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-orange-300 cursor-pointer">
        <span className="inline-block bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {job.category.title}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{job.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>📍</span>
            <span>{job.location.label}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>💼</span>
            <span>{`${job.experience_from_year} - ${job.experience_to_year} years`}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>⏰</span>
            <span>{job.job_type}</span>
          </div>
        </div>
        <div className="text-orange-300 font-semibold text-sm flex items-center gap-2 group">
          <span>{t('viewDetails')}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
