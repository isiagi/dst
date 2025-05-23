'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo';
import { ContactBox, ContactBoxProps } from './contact-box';
import { useStickyHeader } from '../../utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import { headerData } from 'data/layout/header/v1';
import { CSSTransition } from 'react-transition-group';
import { SearchModal } from '../v2/search-modal';
import styles from '../v2/header.module.css';
import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

export interface HeaderProps {
  contactInfo: ContactBoxProps;
  menuItems: (LinkProps | SubMenu)[];
}

const actionIconClasses = cn(
  'text-[1.25rem]/[1] dark:text-white cursor-pointer text-accent-900 transition-colors duration-300 hover:text-primary dark:hover:text-primary'
);

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { menuItems, contactInfo } = headerData;
  const isSticky = useStickyHeader(700);

  return (
    <>
      <header
        className={cn(
          'left-0 right-0 top-0 z-99 mx-auto hidden w-full py-[26px] lg:block',
          isSticky
            ? 'sticky-header left-0 top-0 w-full animate-fadeInDown bg-white/90 backdrop-blur-md [box-shadow:0px_0px_15px_10px_rgba(64,174,241,.1)] '
            : 'absolute'
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-x-10">
            {/* Brand logo  */}
            <div className="flex-none">{<BrandLogo />}</div>
            {/* <div className="flex-none">DST</div> */}

            {/* Navigation  */}

            {menuItems && menuItems.length > 0 && (
              <Navigation menuItems={menuItems} />
            )}
            <div className="flex items-center gap-10">
              {/* Contact box  */}
              <ContactBox {...contactInfo} />
              <div>
                <ul aria-label="header actions">
                  <li>
                    <button
                      aria-label="Search toggle handler"
                      className={actionIconClasses}
                      onClick={() => setIsModalOpen((prevState) => !prevState)}
                    >
                      <FaMagnifyingGlass />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <CSSTransition
        in={isModalOpen}
        timeout={500}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exitActive: styles['modal-exit-active'],
        }}
        unmountOnExit
      >
        <SearchModal setIsModalOpen={setIsModalOpen} />
      </CSSTransition>
    </>
  );
}
