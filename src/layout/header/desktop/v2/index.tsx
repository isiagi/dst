'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo';
import { useStickyHeader } from '../../utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import {
  FaArrowRight,
  FaCartShopping,
  FaEnvelope,
  FaMagnifyingGlass,
  FaPaperPlane,
  FaPhone,
} from 'react-icons/fa6';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { headerData } from '@/data/layout/header/v2';
import { useState } from 'react';
import { SearchDropdown } from './search-modal';
import { OffCanvas } from './off-canvas';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

interface ContactInfo {
  phone: string;
  mail: string;
  address: string;
}

export interface HeaderProps {
  contactInfo: ContactInfo;
  ctaBtn: LinkProps;
  menuItems: (LinkProps | SubMenu)[];
}

const addressIconParentClasses = cn('text-base/[1] text-primary flex-none');
const addressItemClasses = cn('flex items-center gap-2.5');

const actionIconClasses = cn(
  'text-[1.25rem]/[1] dark:text-white cursor-pointer text-accent-900 transition-colors duration-300 hover:text-primary dark:hover:text-primary'
);

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isSticky = useStickyHeader(700);

  const { contactInfo, ctaBtn, menuItems } = headerData;

  return (
    <>
      <header
        className={cn(
          'left-0 right-0 top-0 z-99 mx-auto hidden w-full lg:block',
          isSticky
            ? 'sticky-header fixed left-0 top-0 w-full animate-fadeInDown bg-white [box-shadow:0px_0px_15px_10px_rgba(223,42,25,.1)] dark:bg-accent-700'
            : 'absolute pt-30px'
        )}
      >
        <Container>
          <div className="flex bg-accent-100 dark:bg-accent-700">
            {/* Brand logo  */}
            <div className="grid flex-none place-items-center bg-primary px-9 py-6 dark:bg-[#212124] [&_.logo-light]:[filter:brightness(0)_invert(1)]">
              <BrandLogo />
            </div>

            <div className="flex-1 divide-y divide-accent-900 divide-opacity-10 dark:divide-accent-200 dark:divide-opacity-10">
              <div className="flex items-center justify-between pl-9">
                <ul
                  aria-label="contact info"
                  className="flex flex-wrap justify-between gap-1 pr-2"
                >
                  <li className={addressItemClasses}>
                    <span className={addressIconParentClasses}>
                      <FaPhone />
                    </span>
                    <a href={`tel:${contactInfo.phone.split(' ').join('')}`}>
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className={addressItemClasses}>
                    <span className={addressIconParentClasses}>
                      <FaEnvelope />
                    </span>
                    <a href={`mailto:${contactInfo.mail}`}>
                      {contactInfo.mail}
                    </a>
                  </li>
                  <li className={cn(addressItemClasses, 'hidden xl:flex')}>
                    <span className={addressIconParentClasses}>
                      <FaPaperPlane />
                    </span>
                    <address className="not-italic">
                      {contactInfo.address}
                    </address>
                  </li>
                </ul>
                <Button asChild className={cn('!min-h-[56px] rounded-none')}>
                  <CustomLink href={ctaBtn.href} openNewTab={ctaBtn.openNewTab}>
                    <span className="relative z-1">{ctaBtn.label}</span>
                    <span className="relative z-1">
                      <FaArrowRight />
                    </span>
                  </CustomLink>
                </Button>
              </div>
              <div className="flex items-center justify-between pl-9 pr-4">
                {/* Navigation  */}
                {menuItems && menuItems.length > 0 && (
                  <Navigation menuItems={menuItems} />
                )}
                <div className="relative">
                  {' '}
                  {/* Added relative positioning */}
                  <ul
                    aria-label="header actions"
                    className="flex items-center gap-30px"
                  >
                    <li className="relative">
                      {' '}
                      {/* Added relative positioning for search */}
                      <button
                        aria-label="Search toggle handler"
                        className={cn(
                          actionIconClasses,
                          isSearchOpen && 'text-primary' // Highlight when active
                        )}
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                      >
                        <FaMagnifyingGlass />
                      </button>
                      {/* Search Dropdown - positioned relative to the search button */}
                      <SearchDropdown
                        isOpen={isSearchOpen}
                        setIsOpen={setIsSearchOpen}
                      />
                    </li>
                    {/* <li>
                      <span className={actionIconClasses}>
                        <FaCartShopping />
                      </span>
                    </li> */}
                    <li>
                      <OffCanvas />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
