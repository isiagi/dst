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
    <section className={cn(className)}>
      <div className="mx-auto mb-10 flex w-full max-w-[680px] flex-col gap-5 md:mb-[3.75rem]">
        <SectionHeading {...sectionHeading} alignment="center" />
      </div>
      <Container>
        {services && services.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
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
