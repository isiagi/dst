import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    // {
    //   icon: <FaInstagram />,
    //   href: 'https://www.instagram.com/',
    // },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Portfolio',
        href: '/portfolio',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Quick Access',
    links: [
      {
        label: 'Application Development',
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
        label: 'Managed Services',
        href: '/services/managed-services',
        openNewTab: false,
      },
    ],
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
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+254 104 757 710 / +256 781 897 616',
    mail: 'support@datahubsystems.com',

    location:
      '4th Floor (Suite 4-2) Top Plaza Building Kindaruma Road (Off Ngong’ Road)',
    boxNumber: 'P.O. Box 717 - 00515, Nairobi, Kenya',
  },

  footerBottom: {
    copyrightText: 'Copyright 2015 - 2025 Datahub Systems Technologies Ltd.',
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
