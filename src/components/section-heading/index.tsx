import { SectionHeadingProps } from './interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = 'start',
  hasBottomSpacing = false,
  className,
}: SectionHeadingProps) {
  const wrapperClasses = cn(
    alignment === 'start' && 'text-left',
    alignment === 'center' && 'text-center',
    alignment === 'end' && 'text-right',
    { 'mb-10 md:mb-[3.75rem]': hasBottomSpacing },
    className
  );

  return (
    <div className={wrapperClasses}>
      {subtitle && (
        <span
          className={
            'mb-[.625rem] block font-secondary text-base	 font-normal capitalize leading-[1.5] text-primary md:text-2xl'
          }
        >
          {subtitle}
        </span>
      )}
      <h4 className="font-secondary text-xl font-normal leading-[1.25] text-accent-900 md:text-lg dark:text-white">
        {title}
      </h4>
      {description && (
        <p className={'mt-5 whitespace-pre-line'}>{description}</p>
      )}
    </div>
  );
}
