import { projectSectionData } from '@/data/project-section/v1/home-page';
import { serviceSectionData } from '@/data/service-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { BlogSection } from '@/src/sections/blog/v1';
import { ContactSection } from '@/src/sections/contact/v1';
import { CtaSection } from '@/src/sections/cta/v1';
import { Hero } from '@/src/sections/hero/v1';
import { ProjectSection } from '@/src/sections/project/v1';
import { PricingSection } from '@/src/sections/pricing/version-1';
import { ServiceSection } from '@/src/sections/service/v1';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { Metadata } from 'next';
import { TopNavBar } from '@/src/components/top/TopNavBar';

export const metadata: Metadata = {
  title: 'DST / Data meets Integrity',
  description:
    'Datahub Systems Technologies (DST) is a trusted provider of innovative IT solutions designed to help businesses navigate the fast-evolving digital landscape.',
};

export default function Page() {
  return (
    <>
      {/* <TopNavBar /> */}
      <MainHeader version="1" />
      <Hero />
      <ServiceSection {...serviceSectionData} />
      {/* <AboutSection /> */}
      <CtaSection />
      <ProjectSection {...projectSectionData} />
      <StatisticsSection />
      {/* <TestimonialSection /> */}
      {/* <PricingSection /> */}
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
      <BlogSection />
      <Footer />
    </>
  );
}
