import { Container } from '@/src/components/container';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import { BrandLogo } from '@/src/layout/brand-logo';
import { notFound } from 'next/navigation';

export default function ComingSoonPage({
  params,
}: {
  params: { segments?: string[] };
}) {
  // Optionally, you can restrict this to only show for 'coming-soon' as the last segment
  if (!params?.segments) {
    notFound();
  }

  return (
    <>
      <MainHeader version="1" />
      <section className="section-padding-primary flex min-h-[60vh] flex-col items-center justify-center bg-accent-100 text-accent-900 dark:bg-accent-900 dark:text-body">
        <Container>
          <div className="mt-24 flex flex-col items-center justify-center py-16">
            <BrandLogo />
            <h1 className="h1 mb-4 mt-8 text-center text-primary">
              Coming Soon
            </h1>
            <p className="mb-8 max-w-xl text-center text-lg text-accent-800 md:text-xl dark:text-body">
              We are working hard to bring you something amazing. Stay tuned for
              updates!
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
