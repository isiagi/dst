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
        label: 'SAP Business One',
        href: '/coming-soon/sap-b1-implementation',
        openNewTab: false,
      },
      {
        label: 'SAP Addons',
        href: '/coming-soon/addon-development',
        openNewTab: false,
      },
      {
        label: 'Software Development',
        href: '/services/software-solutions',
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
        label: 'Managed Services',
        href: '/services/managed-services',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',

    location: ['4th Floor (Suite 4-2), Top Plaza Building'],
    place: 'Kindaruma Road (Off Ngong’ Road)',
    boxNumber: 'P.O. Box 717 - 00515, Nairobi, Kenya',

    mails: ['dst@datahubsystems.com'],
    phoneNumbers: ['+254 104 757 710 / +256 781 897 616'],
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
    copyrightText: '© 2015 - 2025 Datahub Systems Technologies Ltd.',

    links: [
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
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
        label: 'Cookies',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Subscription',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
