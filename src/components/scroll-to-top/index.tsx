'use client';

import { useStickyHeader } from '@/src/layout/header/utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import { FaArrowTurnUp } from 'react-icons/fa6';

export function ScrollToTopButton() {
  const isSticky = useStickyHeader(700);

  const isBrowser = () => typeof window !== 'undefined';
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      aria-label="Scroll to top"
      className={cn(
        'group fixed bottom-[-10%] right-[50px] z-444 grid h-[50px] w-[50px] place-items-center rounded-5 bg-primary bg-opacity-40 text-[18px] text-white [transition:1s_ease] hover:bg-primary-light hover:bg-opacity-85 focus-visible:outline-0',
        isSticky ? '!bottom-[90px] opacity-100' : 'opacity-0'
      )}
      onClick={scrollToTop}
    >
      <FaArrowTurnUp />
    </button>
  );
}
