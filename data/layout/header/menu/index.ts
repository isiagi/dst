import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    title: 'Products & Services',
    subMenuItems: [
      {
        label: 'Application Development',
        href: '/services/software-solutions',
      },
      {
        label: 'Cybersecurity',
        href: '/services/cybersecurity',
      },
      {
        label: 'Data Analytics',
        href: '/services/data-analytics',
      },
      {
        label: 'Managed Services',
        href: '/services/managed-services',
      },
    ],
  },
  {
    title: 'Support',
    subMenuItems: [
      {
        label: 'Call Us',
        href: '/contact',
      },
      {
        label: 'Email Us',
        href: '/contact',
      },
      {
        label: 'Support Plans',
        href: '',
      },
      {
        label: 'Online Support',
        href: '',
      },
      {
        label: 'Feedback',
        href: '',
      },
    ],
  },
  {
    title: 'Partners & Developers',
    subMenuItems: [
      {
        label: 'Enterprise Partners',
        href: '',
      },
      {
        label: 'ICT Academy',
        href: '',
      },
    ],
  },
  {
    title: 'About DST',
    subMenuItems: [
      {
        label: 'Our Company',
        href: '/about',
      },
      {
        label: 'Contact Us',
        href: '/contact',
      },
      {
        label: 'Trust Center',
        href: '',
      },
      {
        label: 'Innovations',
        href: '',
      },
      {
        label: 'Careers',
        href: '',
      },
      {
        label: 'Compliance & Integrity',
        href: '',
      },
      {
        label: 'Public Policy',
        href: '',
      },
      {
        label: 'News & Events',
        href: '',
      },
      {
        label: 'DST Blog',
        href: '/blog',
      },
      {
        label: 'Publication',
        href: '',
      },
    ],
  },
];
