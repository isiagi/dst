import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+256 781 897616',
    mail: 'dst@gmail.com',
    address: '6391 Kampala, Uganda',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Get  A Quote',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
