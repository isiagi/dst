/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v1';

export interface ServiceSectionProps {
  services: ServiceProps[];
  className?: ClassValue;
}

const sectionHeading: any = {
  subtitle: 'Services',
  title: 'What We Offer',
};

export function ServiceSection({ services, className }: ServiceSectionProps) {
  return (
    <section className={cn('section-padding-primary px-20', className)}>
      <div className="mx-auto mb-10 flex w-full max-w-[680px] flex-col gap-5 md:mb-[3.75rem]">
        <SectionHeading {...sectionHeading} alignment="center" />
      </div>
      <Container>
        {services && services.length > 0 && (
          <div className="grid gap-6 md:grid-cols-12">
            {services.map((service, index) => {
              const isFirstRow = index < 2;

              // Define span logic for large screens
              const colSpanClass =
                index === 0
                  ? 'lg:col-span-5'
                  : index === 1
                    ? 'lg:col-span-7'
                    : index === 2
                      ? 'lg:col-span-7'
                      : 'lg:col-span-5';

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                  className={cn(
                    'col-span-12', // full width on small screens
                    'md:col-span-6', // half on medium screens
                    colSpanClass // custom on large screens
                  )}
                >
                  <ServiceCard {...service} />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
