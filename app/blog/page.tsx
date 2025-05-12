import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogListSection } from '@/src/sections/blog-list';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Blog',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Blog Classic"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Classic',
          },
        ]}
      />
      {/* <BlogListSection /> */}
      <div className="flex min-h-[300px] items-center justify-center">
        <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
          Coming Soon ...
        </h2>
      </div>
      <Footer />
    </>
  );
}
