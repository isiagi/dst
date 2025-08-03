import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    title: 'Products & Services',
    subMenuItems: [
      {
        label: 'SAP B1 Implementation',
        href: '/services/software-solutions',
      },
      {
        label: 'Addon Development',
        href: '/services/software-solutions',
      },
      {
        label: 'Cybersecurity',
        href: '/services/cybersecurity',
      },
      {
        label: 'Web Development',
        href: '/services/software-solutions',
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
        label: 'Compliance & Integrity',
        href: '',
      },

      {
        label: 'Public Policy',
        href: '',
      },
      {
        label: 'Innovations',
        href: '',
      },
      // {
      //   label: 'Careers',
      //   href: '',
      // },

      {
        label: 'Knowledge Hub',
        href: '/blog',
      },
      {
        label: 'News & Events',
        href: '',
      },
      // {
      //   label: 'Publication',
      //   href: '',
      // },
    ],
  },
];
