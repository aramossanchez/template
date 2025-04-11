import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';
import { useClickOutside } from '@/hooks/useClickOutside';
import { HEADER_LINKS } from '@/utils/constants';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

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
  const [subMenuOpened, setSubMenuOpened] = useState<boolean>(false);

  const containerStyle = opened
    ? 'min-h-[20px] max-h-[100vh] leading-none overflow-y-auto py-5 opacity-100'
    : 'min-h-0 max-h-0 overflow-y-hidden leading-[0] py-0 opacity-0';

  const subMenuContainerStyle = subMenuOpened
    ? 'min-h-[20px] max-h-[100vh] leading-none opacity-100'
    : 'min-h-0 max-h-0 overflow-y-hidden leading-[0] opacity-0';

  const arrowIconStyle = subMenuOpened
    ? 'transform rotate-180 mb-1'
    : 'transform rotate-0';

  return (
    <div
      ref={containerRef}
      className={`${containerStyle} absolute left-0 top-headerHeightMobile h-fit bg-background w-full flex flex-col items-center duration-300 text-quaternaryColor text-xl`}
    >
      {HEADER_LINKS.map((link) => {
        return (
          <div key={link.label} className="w-full">
            <div
              className="flex flex-row gap-x-1 items-center justify-center"
              onClick={() =>
                link?.sublinks ? setSubMenuOpened(!subMenuOpened) : {}
              }
            >
              <Link href={link.url ?? ''} className="py-5">
                {link.label}
              </Link>
              {link?.sublinks && (
                <ArrowDownIcon
                  size={25}
                  className={`${arrowIconStyle} duration-300`}
                />
              )}
            </div>
            {link?.sublinks && (
              <div
                className={`${subMenuContainerStyle} flex flex-col duration-300 bg-tertiaryColor w-full`}
              >
                {link.sublinks.map((sublink) => {
                  return (
                    <Link
                      key={sublink.label}
                      href={sublink.url ?? ''}
                      className="py-5 text-center"
                    >
                      {sublink.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
