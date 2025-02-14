'use client';

import { HamburgerIcon } from '@/components/icons/HamburgerIcon';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MOBILE_WIDTH, NAVIGATION_INITIATED_SCROLL } from '@/utils/constants';
import React, { useState } from 'react';
import MobileHeaderMenu from './components/MobileHeaderMenu';
import { CrossIcon } from '@/components/icons/CrossIcon';
import DesktopHeaderMenu from './components/DesktopHeaderMenu';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { basePath } from '@/config/config';

export default function Header() {
  const { width } = useWindowSize();
  const { scrollPosition } = useScrollPosition();

  const [opened, setOpened] = useState<boolean>(false);

  const headerStyle =
    scrollPosition > NAVIGATION_INITIATED_SCROLL
      ? 'bg-primaryColorTransparent'
      : 'bg-primaryColor';

  return (
    <div
      className={`${headerStyle} w-full flex items-center justify-between bg-primaryColor h-headerHeight px-8 sticky top-0 duration-300 z-50`}
    >
      <Image
        src={`${basePath}images/logo.webp`}
        width={500}
        height={500}
        alt="Logo"
        className="h-headerHeight object-contain w-fit py-2"
      />
      {width <= MOBILE_WIDTH ? (
        <>
          <div className="w-10 absolute right-0 top-0 h-headerHeight flex flex-col justify-center">
            <button onClick={() => setOpened(!opened)}>
              {opened ? (
                <div key="close" className="animate-rotate w-fit">
                  <CrossIcon />
                </div>
              ) : (
                <div key="open" className="animate-rotate w-fit">
                  <HamburgerIcon />
                </div>
              )}
            </button>
          </div>
          <MobileHeaderMenu opened={opened} setOpened={setOpened} />
        </>
      ) : (
        <DesktopHeaderMenu />
      )}
    </div>
  );
}
