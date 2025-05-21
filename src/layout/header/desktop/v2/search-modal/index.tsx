import { LinkProps } from '@/src/common-types';
import Link from 'next/link';

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
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-32">
      <div className="w-full max-w-xl rounded-xl bg-white p-6 shadow-lg dark:bg-accent-800">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:bg-accent-900 dark:text-white"
          />
        </div>

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
                  onClick={() => setIsModalOpen(false)}
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
