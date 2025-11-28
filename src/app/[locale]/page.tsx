import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Stats from '../../components/Stats';
import Jobs from '../../components/Jobs';
import Application from '../../components/Application';

export const metadata = {
  title: 'Sunwell - Năng lượng xanh cho tương lai bền vững',
  description:
    'Sunwell cung cấp dịch vụ thiết kế CAD, tư vấn kỹ thuật và giải pháp năng lượng xanh cho các doanh nghiệp.',
  keywords: 'CAD design, kỹ thuật, năng lượng xanh, tư vấn, đào tạo',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Jobs />
      <Application />
    </>
  );
}
