'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import JobTabs from './JobTabs';
import { HomeJobs } from '@/types/api';
import JobCard from './JobCard';

interface JobsProps {
  jobsData: HomeJobs;
  locale: string;
}

export default function Jobs({ jobsData, locale }: JobsProps) {
  const t = useTranslations('jobs');

  const [activeCategory, setActiveCategory] = useState('all');

  const tabs = [
    { id: 'all', label: t('tabs.all') },
    { id: 'engineering', label: t('tabs.engineering') },
    { id: 'marketing', label: t('tabs.marketing') },
    { id: 'sales', label: t('tabs.sales') },
    { id: 'design', label: t('tabs.design') },
  ];

  const filteredJobs =
    activeCategory === 'all'
      ? jobsData.list
      : jobsData.list.filter((job) => job.category.title.toLowerCase().includes(activeCategory.toLowerCase()));
  console.log('🚀 ~ Jobs ~ filteredJobs:', filteredJobs);

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
          {jobsData.title}
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center" id="jobs-subtitle">
          {jobsData.subtitle}
        </p>

        <JobTabs tabs={tabs} activeTab={activeCategory} onTabChange={setActiveCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="jobs-grid">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
