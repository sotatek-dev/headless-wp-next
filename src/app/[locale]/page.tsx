import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Stats from '../../components/Stats';
import Jobs from '../../components/Jobs';
import Application from '../../components/Application';
import { api } from '@/lib/api';

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const homeData = await api.getHomeData(locale);

  if (!homeData.success) {
    throw new Error('Failed to load homepage data');
  }

  const { data } = homeData;

  return (
    <>
      <Hero heroData={data.hero_slider} locale={locale} />
      <About aboutData={data.home_about} locale={locale} />
      <Services servicesData={data.home_services} locale={locale} />
      <Stats statsData={data.home_stats} locale={locale} />
      <Jobs jobsData={data.home_jobs} locale={locale} />
      <Application />
    </>
  );
}
