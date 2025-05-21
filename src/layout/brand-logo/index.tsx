import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

import logoLight from 'public/assets/images/brand/dst.png';
import logoDark from 'public/assets/images/brand/dst.png';

export function BrandLogo() {
  return (
    <CustomLink href="/">
      <Image
        className="logo-dark w-[3rem] dark:hidden"
        src={'/assets/images/brand/dst_ogo.png'}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
      <Image
        className="logo-dark hidden w-[3rem] dark:block"
        src={'/assets/images/brand/dst_ogo.png'}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
    </CustomLink>
  );
}
