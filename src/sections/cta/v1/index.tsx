import { SectionProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import Link from 'next/link';

export interface CtaSectionProps {
  title: string;
  subTitle: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Having any question?',
  subTitle: 'Book Free Consultation...',
};

export function CtaSection({ className }: SectionProps) {
  const { title, subTitle } = ctaSectionData;
  return (
    <section className={cn(className)}>
      <Container>
        <div className="relative overflow-hidden rounded-5 bg-primary px-6 py-14">
          <div className="relative z-10 mx-auto max-w-[630px] rounded-5  text-center">
            <h2 className="mx-auto max-w-[490px] font-secondary text-xl font-normal capitalize leading-[1.25] text-white md:text-2xl">
              {title}
            </h2>
            <h2 className="mx-auto max-w-[620px] font-secondary text-xl font-normal capitalize leading-[1.25] text-white md:text-2xl">
              {subTitle}
            </h2>
            <form className="mt-6 flex flex-col items-center justify-center gap-[.625rem] md:mt-[1.875rem] md:flex-row">
              {/* <TextInput
                placeholder="Enter Email"
                className="border-white border-opacity-60 text-white placeholder:text-white focus:border-white dark:border-white dark:border-opacity-60 dark:text-white dark:placeholder:text-white"
              /> */}
              <Button
                type="submit"
                className={cn(
                  'min-w-[190px] flex-none text-white max-md:w-full',
                  'bg-primary-light',
                  'after:bg-white hover:text-accent-700 dark:hover:text-accent-700'
                )}
                asChild
              >
                <Link href={'/contact'}>
                  <span>Talk To Us</span>
                </Link>
                {/* <span>SUSCRIBE</span> */}
              </Button>
            </form>
          </div>
          <Image
            src="/assets/images/cta/pattern-1.png"
            alt="cta section bg pattern"
            width={520}
            height={316}
            className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60"
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}
