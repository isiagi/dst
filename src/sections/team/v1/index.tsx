import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { TeamCard, TeamCardProps } from 'src/components/cards/team/v1';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { teamSectionData } from '@/data/team-section/v1';
import { Carousel } from '@/src/components/carousel';
import { CarouselItem } from '@/src/components/carousel/sub-components/item';
import { cn } from '@/src/utils/shadcn';

export interface TeamSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  cards: TeamCardProps[];
}

const navigationBtnClasses = cn(
  'dark:bg-[#313133] transition-colors duration-300 bg-primary-light/10 text-primary-light hover:text-white hover:bg-primary-light'
);

export function TeamSection() {
  const { sectionHeading, cards } = teamSectionData;
  return (
    <section className="section-padding-primary overflow-hidden bg-accent-100 dark:bg-accent-700">
      <Container>
        <div className="mx-auto mb-10 max-w-[680px] md:mb-[3.75rem]">
          <SectionHeading {...sectionHeading} alignment="center" />
        </div>
        {cards && cards.length > 0 && (
          <Carousel
            haveOffset={false}
            itemsPerSlide={{
              initial: 1,
              sm: 1.2,
              md: 2,
              lg: 2.5,
              xl: 3,
              '2xl': 3,
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
            hasPagination
            navigationPrevBtnClassName={navigationBtnClasses}
            navigationNextBtnClassName={navigationBtnClasses}
          >
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <TeamCard {...card} />
              </CarouselItem>
            ))}
          </Carousel>
        )}
      </Container>
    </section>
  );
}
