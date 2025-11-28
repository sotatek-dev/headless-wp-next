import React from 'react';
import Link from 'next/link';

export interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const getCategoryName = (category: string) => {
    const categories: { [key: string]: string } = {
      engineering: 'Kỹ thuật',
      marketing: 'Marketing',
      sales: 'Kinh doanh',
      design: 'Thiết kế',
    };
    return categories[category] || category;
  };

  return (
    <Link href={`/jobs/${job.id}`} className="block">
      <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-orange-300 cursor-pointer">
        <span className="inline-block bg-linear-to-r from-orange-300 to-orange-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {getCategoryName(job.category)}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{job.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>📍</span>
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>💼</span>
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>⏰</span>
            <span>{job.type}</span>
          </div>
        </div>
        <div className="text-orange-300 font-semibold text-sm flex items-center gap-2 group">
          <span>Xem chi tiết</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
