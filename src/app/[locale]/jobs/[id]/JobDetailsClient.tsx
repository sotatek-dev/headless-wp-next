'use client';

import ApplicationModal from '@/components/ApplicationModal';
import CompanyInfo from '@/components/CompanyInfo';
import Hero from '@/components/Hero';
import JobDetails from '@/components/JobDetails';
import { HeroSliderItem, HomeJobItem } from '@/types/api';
import { useState } from 'react';

interface JobDetailsClientProps {
  job: HomeJobItem;
  heroData: HeroSliderItem[];
  locale: string;
}

export default function JobDetailsClient({ job, heroData, locale }: JobDetailsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero heroData={heroData} locale={locale} />
      <main className="pt-20 pb-16 pl-15 pr-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <JobDetails job={job} />
          <CompanyInfo company={job.company} onApplyClick={() => setIsModalOpen(true)} />
        </div>

        <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} jobTitle={job.title} />
      </main>
    </>
  );
}
