'use client';

import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import { useState } from 'react';
import { FaChevronDown, FaGlobe } from 'react-icons/fa6';

export interface Language {
  code: string;
  name: string;
  flag?: string;
}

export interface TopNavBarProps {
  languages?: Language[];
  currentLanguage?: string;
  onLanguageChange?: (languageCode: string) => void;
  rightContent?: React.ReactNode;
  className?: string;
}

const defaultLanguages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function TopNavBar({
  languages = defaultLanguages,
  currentLanguage = 'en',
  onLanguageChange,
  rightContent,
  className,
}: TopNavBarProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (languageCode: string) => {
    setIsLanguageDropdownOpen(false);
    onLanguageChange?.(languageCode);
  };

  return (
    <div
      className={cn(
        'w-full border-b border-gray-200 bg-gray-50 py-2 dark:border-gray-700 dark:bg-gray-900',
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Left side - could be empty or contain other items */}
          <div className="flex items-center gap-4">
            {/* Future content can go here */}
          </div>

          {/* Right side - Language selector and other content */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className={cn(
                  'flex items-center gap-2 px-3 py-1.5 text-sm font-medium',
                  'text-gray-700 dark:text-gray-300',
                  'hover:text-primary dark:hover:text-primary',
                  'transition-colors duration-200',
                  'border border-transparent hover:border-gray-300 dark:hover:border-gray-600',
                  'rounded-md'
                )}
                aria-label="Select language"
                aria-expanded={isLanguageDropdownOpen}
              >
                {currentLang.flag ? (
                  <span className="text-base">{currentLang.flag}</span>
                ) : (
                  <FaGlobe className="text-sm" />
                )}
                <span>{currentLang.name}</span>
                <FaChevronDown
                  className={cn(
                    'text-xs transition-transform duration-200',
                    isLanguageDropdownOpen && 'rotate-180'
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div
                  className={cn(
                    'absolute right-0 top-full z-50 mt-1',
                    'bg-white dark:bg-gray-800',
                    'border border-gray-200 dark:border-gray-700',
                    'rounded-md shadow-lg',
                    'min-w-[140px]'
                  )}
                >
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language.code)}
                        className={cn(
                          'flex w-full items-center gap-2 px-3 py-2 text-sm',
                          'text-left hover:bg-gray-50 dark:hover:bg-gray-700',
                          'transition-colors duration-150',
                          currentLanguage === language.code
                            ? 'bg-primary/10 text-primary dark:bg-primary/20'
                            : 'text-gray-700 dark:text-gray-300'
                        )}
                      >
                        {language.flag && (
                          <span className="text-base">{language.flag}</span>
                        )}
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional right content */}
            {rightContent}
          </div>
        </div>
      </Container>

      {/* Click outside to close dropdown */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </div>
  );
}
