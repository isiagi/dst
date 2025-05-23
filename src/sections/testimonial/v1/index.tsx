import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  TestimonialCard,
  TestimonialCardProps,
} from 'src/components/cards/testimonial/v1';
import { Carousel } from '@/src/components/carousel';
import { CarouselItem } from '@/src/components/carousel/sub-components/item';
import { testimonialSectionData } from '@/data/testimonial-section/v1';
import { cn } from '@/src/utils/shadcn';

const btnPrevNextClasses = cn(
  'bg-primary-light/10 text-primary-light hover:text-white hover:bg-primary-light'
);

export interface TestimonialSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  cards: TestimonialCardProps[];
}

export function TestimonialSection() {
  const { sectionHeading, cards } = testimonialSectionData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="mx-auto mb-10  max-w-[680px] md:mb-[3.75rem]">
          <SectionHeading {...sectionHeading} alignment="center" />
        </div>
        {cards && cards.length > 0 && (
          <Carousel
            itemsPerSlide={{
              initial: 1,
              sm: 1,
              md: 1,
              lg: 2,
              xl: 2,
              '2xl': 2,
            }}
            itemGap={{
              initial: 30,
              sm: 30,
              md: 30,
              lg: 30,
              xl: 30,
              '2xl': 30,
            }}
            hasNavigation
            hasProgress
            haveOffset={false}
            navigationPrevBtnClassName={btnPrevNextClasses}
            navigationNextBtnClassName={btnPrevNextClasses}
          >
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <TestimonialCard {...card} />
              </CarouselItem>
            ))}
          </Carousel>
        )}
        {/* <h1 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
          Coming Soon...
        </h1> */}
      </Container>
    </section>
  );
}
