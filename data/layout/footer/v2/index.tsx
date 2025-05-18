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
    phoneNumber: '+256 724 757710',
    mail: 'dst@datahubsystems.com',
    location: 'Top Plaza Suite 4 -2, Nairobi, Kenya',
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
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
