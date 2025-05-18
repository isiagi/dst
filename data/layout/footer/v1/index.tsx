import { FooterSectionProps } from '@/src/layout/footer/v1';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Datahub Systems Technologies (DST) delivers secure, scalable IT solutions—from cloud and cybersecurity to analytics and software—for businesses of all sizes.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/',
      },
    ],
  },
  columnOne: {
    title: 'Quick Access',
    links: [
      {
        label: 'Managed Services',
        href: '/services/managed-services',
        openNewTab: false,
      },
      {
        label: 'Cybersecurity',
        href: '/services/cybersecurity',
        openNewTab: false,
      },
      {
        label: 'Data Analytics',
        href: '/services/data-analytics',
        openNewTab: false,
      },
      {
        label: 'Cloud Computing',
        href: '/services/cloud-computing',
        openNewTab: false,
      },
      {
        label: 'Software Solutions',
        href: '/services/software-solutions',
        openNewTab: false,
      },
      // {
      //   label: 'Others',
      //   href: '/',
      //   openNewTab: false,
      // },
    ],
  },
  columnTwo: {
    title: 'Address',
    location: 'Top Plaza Suite 4 -2, Nairobi, Kenya',
    mails: ['dst@datahubsystems.com'],
    phoneNumbers: ['+256 724 757710', '+256 781 897616'],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightText:
      '© Datahub Systems Technologies  2025 | All Rights Reserved',
    links: [
      {
        label: 'Terms of Use',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
