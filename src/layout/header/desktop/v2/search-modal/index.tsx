import { LinkProps } from '@/src/common-types';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const suggestions: LinkProps[] = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export function SearchDropdown({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[98]" onClick={() => setIsOpen(false)} />

      {/* Search Dropdown */}
      <div className="dark:border-accent-600 absolute right-0 top-full z-[99] mt-2 w-80 rounded-lg border border-gray-200 bg-white shadow-lg ">
        {/* Search Input Section */}
        <div className="dark:border-accent-600 relative border-b border-gray-200 p-4">
          <div className="relative">
            <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-10 focus:border-[#40AEF1] focus:outline-none"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close search"
            >
              <IoClose className="text-lg" />
            </button>
          </div>
        </div>

        {/* Suggestions Section */}
        {/* <div className="p-4">
          <h3 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
            Quick Links
          </h3>
          <ul className="space-y-1">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-accent-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
}
