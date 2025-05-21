import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+256 724 757710',
    mail: 'dst@datahubsystems.com',

    address: '4th Floor (Suite 4-2), Top Plaza Building, Nairobi',

  },
  ctaBtn: {
    href: '/contact',
    label: 'Get  A Quote',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
