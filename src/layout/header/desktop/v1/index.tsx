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
import { FaMagnifyingGlass, FaGlobe, FaChevronDown } from 'react-icons/fa6';

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

// Language options - you can expand this array
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const { menuItems, contactInfo } = headerData;
  const isSticky = useStickyHeader(700);

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsLangDropdownOpen(false);
    // Add your language change logic here
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="absolute left-0 right-0 top-0 z-[100] w-full bg-accent-100 bg-opacity-70 dark:bg-accent-700">
        <Container>
          <div className="flex items-center justify-end py-2">
            <div className="flex items-center gap-6 text-sm">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 rounded-md px-3 py-1 text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                  aria-label="Language selector"
                >
                  <FaGlobe className="text-sm" />
                  <span className="flex items-center gap-1">
                    <span>{selectedLanguage.flag}</span>
                    <span>{selectedLanguage.code.toUpperCase()}</span>
                  </span>
                  <FaChevronDown
                    className={cn(
                      'text-xs transition-transform duration-200',
                      isLangDropdownOpen && 'rotate-180'
                    )}
                  />
                </button>

                {/* Language Dropdown */}
                {isLangDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 min-w-[160px] rounded-lg border border-white/20 bg-white/95 shadow-lg backdrop-blur-md">
                    <div className="py-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language)}
                          className={cn(
                            'flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-primary/10',
                            selectedLanguage.code === language.code
                              ? 'bg-primary/5 text-primary'
                              : 'text-gray-700'
                          )}
                        >
                          <span>{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Future additions can go here */}
              {/* Example: User account, notifications, etc. */}

              {/* Placeholder for future items */}
              <div className="flex items-center gap-4">
                {/* Add more top nav items here in the future */}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'left-0 right-0 z-99 mx-auto hidden w-full py-[26px] lg:block',
          isSticky
            ? 'sticky-header left-0 top-0 w-full animate-fadeInDown bg-white/90 backdrop-blur-md [box-shadow:0px_0px_15px_10px_rgba(64,174,241,.1)]'
            : 'absolute top-10' // Added top-10 to account for top nav
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

      {/* Search Modal */}
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

      {/* Click outside handler for language dropdown */}
      {isLangDropdownOpen && (
        <div
          className="fixed inset-0 z-[99]"
          onClick={() => setIsLangDropdownOpen(false)}
        />
      )}
    </>
  );
}
