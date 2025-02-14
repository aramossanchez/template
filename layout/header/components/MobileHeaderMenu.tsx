import { useClickOutside } from '@/hooks/useClickOutside';
import { HEADER_LINKS } from '@/utils/constants';
import Link from 'next/link';
import React, { useRef } from 'react';

interface MobileHeaderMenuProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileHeaderMenu({
  opened,
  setOpened,
}: MobileHeaderMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setOpened(false));

  const containerStyle = opened
    ? 'min-h-[20px] max-h-[300px] leading-none overflow-y-auto py-5 opacity-100'
    : 'min-h-0 max-h-0 overflow-y-hidden leading-[0] py-0 opacity-0';

  return (
    <div
      ref={containerRef}
      className={`${containerStyle} absolute left-0 top-headerHeight h-fit bg-primaryColorTransparent w-full flex flex-col items-center gap-y-5 duration-300`}
    >
      {HEADER_LINKS.map((link) => {
        return (
          <Link key={link.label} href={link.url}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
