import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import JobDetailsClient from './JobDetailsClient';

interface PageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function JobPage({ params }: PageProps) {
  const resolvedParams = await params;
  const jobId = parseInt(resolvedParams.id);
  const locale = resolvedParams.locale;

  try {
    const [jobResponse, homeData] = await Promise.all([api.getJobById(jobId, locale), api.getHomeData(locale)]);

    if (!jobResponse.data || !homeData.success) {
      notFound();
    }

    const job = jobResponse.data;
    const heroData = homeData.data.hero_slider;

    return <JobDetailsClient job={job} heroData={heroData} locale={locale} />;
  } catch (error) {
    notFound();
  }
}
