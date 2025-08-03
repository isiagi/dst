/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/src/utils/shadcn';
import { CustomLink } from '@/src/components/custom-link';
import { HeaderProps } from '../../v1';
import { FaChevronDown } from 'react-icons/fa6';

const menuTriggerClasses = cn([
  // Group hover
  'group-hover/menu-item:text-primary',

  // General
  'text-base leading-[1.3] capitalize py-4 min-h-[3.5rem] font-normal dark:text-white text-accent-900 dark:hover:text-primary hover:text-primary transition-colors duration-200',

  // Layout
  'inline-flex items-center justify-center gap-1.5',

  // Focus
  'focus:text-primary',

  // For sticky header
  'menu-link',

  // Cursor
  'cursor-pointer',
]);

export function Navigation({ menuItems }: Pick<HeaderProps, 'menuItems'>) {
  // Helper function to chunk array into groups of 5
  const chunkArray = (array: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <nav aria-label="primary navigation">
      <ul className="flex items-center gap-x-6">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="group/menu-item relative ">
            {'title' in menuItem ? (
              <>
                {/* Megamenu  */}
                <span className={menuTriggerClasses}>
                  <span>{menuItem.title}</span>
                  <span className="text-[10px]">
                    <FaChevronDown />
                  </span>
                </span>
                {menuItem.subMenuItems && menuItem.subMenuItems.length && (
                  <nav
                    aria-label="sumenu-items"
                    className={cn([
                      // Layout - Dynamic width based on item count
                      'absolute left-0 top-full z-40 overflow-hidden bg-white shadow-lg dark:bg-accent-700',

                      // Width based on whether we have more than 5 items
                      menuItem.subMenuItems.length > 5 ? 'w-auto' : 'w-[230px]',

                      // Submenu normal
                      'origin-[0_0_0] scale-y-0 transition-transform duration-350',

                      // Submenu hover
                      'group-hover/menu-item:scale-y-100',
                    ])}
                  >
                    {menuItem.subMenuItems.length > 5 ? (
                      // Multi-column layout for more than 5 items
                      <div className="flex py-2">
                        {chunkArray(menuItem.subMenuItems, 5).map(
                          (chunk, columnIndex) => (
                            <div
                              key={columnIndex}
                              className="w-[200px] border-r border-white/5 last:border-r-0"
                            >
                              <ul className="grid divide-y divide-white/5 ">
                                {chunk.map((subMenuItem, itemIndex) => (
                                  <li key={itemIndex} className="leading-none">
                                    <CustomLink
                                      href={subMenuItem.href}
                                      openNewTab={subMenuItem.openNewTab}
                                      className="flex min-h-[40px] items-center  px-4   text-[15px] font-normal capitalize text-accent-900 transition-colors duration-200 hover:underline hover:decoration-primary   dark:text-white"
                                    >
                                      {subMenuItem.label}
                                    </CustomLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      // Single column layout for 5 or fewer items
                      <ul className="grid divide-y divide-white/5 py-2">
                        {menuItem.subMenuItems.map((subMenuItem, index) => (
                          <li key={index} className="leading-none">
                            <CustomLink
                              href={subMenuItem.href}
                              openNewTab={subMenuItem.openNewTab}
                              className="flex min-h-[40px] items-center  px-4  text-[15px] font-normal capitalize text-black transition-colors duration-200 hover:underline  dark:text-white"
                            >
                              {subMenuItem.label}
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </nav>
                )}
              </>
            ) : (
              <>
                {/* Normal link  */}
                <CustomLink
                  href={menuItem.href}
                  openNewTab={menuItem.openNewTab}
                  className={menuTriggerClasses}
                >
                  {menuItem.label}
                </CustomLink>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
