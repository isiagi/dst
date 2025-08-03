'use client';

import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { BrandLogo } from '../../../brand-logo';
import { ContactBox, ContactBoxProps } from './contact-box';
import { cn } from '@/src/utils/shadcn';
import { Navigation } from '../common/navigation';
import { headerData } from 'data/layout/header/v1';

import { SearchDropdown } from '../v2/search-modal';
import { useState, useEffect, useRef } from 'react';

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
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },

  { code: 'en', name: 'English', flag: '🇺🇸' },

  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

// Custom hook for page-based sticky header behavior
function usePageBasedStickyHeader(
  threshold: number = 700,
  delay: number = 3000
) {
  const [isSticky, setIsSticky] = useState(false);
  const [shouldShowSticky, setShouldShowSticky] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const scrollDistance = useRef(0);
  const isScrollingUp = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection =
        currentScrollY > lastScrollY.current ? 'down' : 'up';
      const passedThreshold = currentScrollY > threshold;

      // Calculate scroll distance when scrolling down
      if (scrollDirection === 'down') {
        if (!isScrollingUp.current) {
          // Continue accumulating scroll distance when scrolling down
          scrollDistance.current += Math.abs(
            currentScrollY - lastScrollY.current
          );
        } else {
          // Reset distance when changing from up to down
          scrollDistance.current = Math.abs(
            currentScrollY - lastScrollY.current
          );
          isScrollingUp.current = false;
        }

        // Check if user has scrolled a full page (viewport height) down
        const viewportHeight = window.innerHeight;
        if (
          passedThreshold &&
          scrollDistance.current >= viewportHeight &&
          !shouldShowSticky
        ) {
          // Show sticky header immediately
          setIsSticky(true);
          setShouldShowSticky(true);
          setIsAnimatingOut(false);

          // Clear any existing timeouts
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
          }

          // Set timeout to start slide-up animation after delay
          timeoutRef.current = setTimeout(() => {
            setIsAnimatingOut(true);

            // After animation completes, fully hide the header
            animationTimeoutRef.current = setTimeout(() => {
              setShouldShowSticky(false);
              setIsSticky(false);
              setIsAnimatingOut(false);
            }, 500); // Animation duration
          }, delay);

          // Reset scroll distance after triggering
          scrollDistance.current = 0;
        }
      } else if (scrollDirection === 'up') {
        // User is scrolling up
        isScrollingUp.current = true;
        scrollDistance.current = 0; // Reset scroll distance

        if (passedThreshold) {
          // Show sticky header when scrolling up (stays fixed)
          setIsSticky(true);
          setShouldShowSticky(true);
          setIsAnimatingOut(false);

          // Clear any existing timeouts
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
          }

          // Set timeout for 3-second delay before hiding
          timeoutRef.current = setTimeout(() => {
            setIsAnimatingOut(true);

            // After animation completes, fully hide the header
            animationTimeoutRef.current = setTimeout(() => {
              setShouldShowSticky(false);
              setIsSticky(false);
              setIsAnimatingOut(false);
            }, 500); // Animation duration
          }, delay);
        }
      }

      // Reset everything when scrolled back to top
      if (!passedThreshold) {
        setIsSticky(false);
        setShouldShowSticky(false);
        setIsAnimatingOut(false);
        scrollDistance.current = 0;
        isScrollingUp.current = false;

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [threshold, delay]);

  return { shouldShowSticky, isAnimatingOut };
}

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const { menuItems, contactInfo } = headerData;

  // Use the page-based sticky header hook
  const { shouldShowSticky, isAnimatingOut } = usePageBasedStickyHeader(
    100,
    3000
  );

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsLangDropdownOpen(false);
    // Add your language change logic here
  };

  // const handleLanguageChange = (language: (typeof languages)[0]) => {
  //   setSelectedLanguage(language);
  //   setIsLangDropdownOpen(false);
  //   // Add your language change logic here
  // };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="absolute left-0 right-0 top-0 z-[100] w-full  bg-accent-900 bg-opacity-70 dark:bg-accent-700">
        <Container>
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-6 text-sm">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 rounded-md px-3  text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#40AEF1]"
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
                    <div className="">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language)}
                          className={cn(
                            'flex w-full items-center gap-3 px-4 py-1 text-left text-sm transition-colors duration-200 hover:bg-primary/10',
                            selectedLanguage.code === language.code
                              ? 'bg-primary/5 text-primary'
                              : 'text-gray-700'
                          )}
                        >
                          <span className="text-black">{language.flag}</span>
                          <span className="text-black">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Future additions can go here */}

              <div className="flex items-center gap-4">
                {/* Add more top nav items here in the future */}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUpAndFade {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUpAndFade {
          animation: slideUpAndFade 0.5s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      {/* Main Header */}
      <header
        className={cn(
          'left-0 right-0 z-99 mx-auto hidden w-full py-[26px] transition-all duration-300 ease-in-out lg:block',
          shouldShowSticky
            ? cn(
                'fixed top-0 w-full bg-white/90 backdrop-blur-md [box-shadow:0px_0px_15px_10px_rgba(64,174,241,.1)]',
                isAnimatingOut ? 'animate-slideUpAndFade' : 'animate-slideDown'
              )
            : 'absolute top-5'
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-x-10">
            {/* Brand logo  */}
            <div className="flex-none">
              <BrandLogo />
            </div>

            {/* Navigation  */}
            {menuItems && menuItems.length > 0 && (
              <Navigation menuItems={menuItems} />
            )}

            <div className="flex items-center gap-10">
              {/* Contact box  */}
              <ContactBox {...contactInfo} />

              <div className="relative">
                <ul aria-label="header actions">
                  <li>
                    <button
                      aria-label="Search toggle handler"
                      className={cn(
                        actionIconClasses,
                        isSearchOpen && 'text-primary'
                      )}
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                      <FaMagnifyingGlass />
                    </button>
                  </li>
                </ul>
                {/* Search Dropdown */}
                <SearchDropdown
                  isOpen={isSearchOpen}
                  setIsOpen={setIsSearchOpen}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>

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
