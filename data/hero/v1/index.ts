import { HeroProps } from '@/src/sections/hero/v1';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/hero/hero-1.jpg',
        alt: 'hero 1',
      },
      title: 'Integrity at the Core of Data',
      button: {
        label: 'Discover More',
        href: '/services/data-analytics',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-11.jpeg',
        alt: 'hero 1',
      },
      title: 'Simplifying Tech, Amplifying You',
      button: {
        label: 'Discover More',
        href: '/services/managed-services',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-12.jpeg',
        alt: 'hero 1',
      },
      title: 'Secure. Smart. Scalable. DST.',
      button: {
        label: 'Discover More',
        href: '/cybersecurity',
      },
    },
  ],
};
