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
        href: '/coming-soon/support-plans',
      },
      {
        label: 'Online Support',
        href: '/coming-soon/online-support',
      },
      {
        label: 'Feedback',
        href: '/coming-soon/feedback',
      },
    ],
  },
  {
    title: 'Partners & Developers',
    subMenuItems: [
      {
        label: 'Enterprise Partners',
        href: '/coming-soon/enterprise-partners',
      },
      {
        label: 'ICT Academy',
        href: '/coming-soon/ict-academy',
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
        href: '/coming-soon/trust-center',
      },
      {
        label: 'Compliance & Integrity',
        href: '/coming-soon/compliance-integrity',
      },

      {
        label: 'Public Policy',
        href: '/coming-soon/public-policy',
      },
      {
        label: 'Innovations',
        href: '/coming-soon/innovations',
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
        href: '/coming-soon/news-events',
      },
      // {
      //   label: 'Publication',
      //   href: '',
      // },
    ],
  },
];
