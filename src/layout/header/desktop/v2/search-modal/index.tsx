import { LinkProps } from '@/src/common-types';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5'; // X icon

const suggestions: LinkProps[] = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export function SearchModal({
  setIsModalOpen,
}: {
  setIsModalOpen: (v: boolean) => void;
}) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsModalOpen]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-32"
      onClick={() => setIsModalOpen(false)} // Close on backdrop click
    >
      <div

        className="relative w-full max-w-xl rounded-xl bg-white p-6 shadow-lg dark:bg-accent-800"
        onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click

      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute -top-20 right-4 text-xl text-white hover:text-black dark:text-white dark:hover:text-gray-300"
          aria-label="Close search modal"
        >
          <IoClose />
        </button>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:bg-accent-900 dark:text-white"
          />
        </div>

        {/* Suggestions */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            Suggestions
          </h3>
          <ul className="space-y-2">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-accent-700"
                  onClick={() => setIsModalOpen(false)} // Close when a link is clicked
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
