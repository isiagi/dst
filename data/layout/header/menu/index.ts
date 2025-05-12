import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
    // subMenuItems: [
    //   {
    //     label: 'Home One',
    //     href: '/',
    //   },
    //   {
    //     label: 'Home Two',
    //     href: '/home-2',
    //   },
    // ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Service',
    href: '/services',
  },
  // {
  //   title: 'Project',
  //   subMenuItems: [
  //     {
  //       label: 'Project List',
  //       href: '/project',
  //     },
  //     {
  //       label: 'Project single',
  //       href: '/project/single',
  //     },
  //   ],
  // },
  {
    label: 'Project',
    href: '/project',
  },
  {
    label: 'Blog',
    href: '/blog',
    // subMenuItems: [
    //   {
    //     label: 'Blog List',
    //     href: '/blog',
    //   },
    //   {
    //     label: 'Blog single',
    //     href: '/blog/single',
    //   },
    // ],
  },
  // {
  //   title: 'Pages',
  //   subMenuItems: [
  //     {
  //       label: 'Testimonial',
  //       href: '/testimonial',
  //     },
  //     {
  //       label: 'Team',
  //       href: '/team',
  //     },
  //     {
  //       label: 'Pricing',
  //       href: '/pricing',
  //     },
  //     {
  //       label: 'FAQ',
  //       href: '/faq',
  //     },
  //   ],
  // },
  {
    label: 'Contact',
    href: '/contact',
  },
];
