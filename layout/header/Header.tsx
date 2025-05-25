'use client';

import { HamburgerIcon } from '@/components/icons/HamburgerIcon';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MOBILE_WIDTH } from '@/utils/constants';
import React, { useState } from 'react';
import MobileHeaderMenu from './components/MobileHeaderMenu';
import { CrossIcon } from '@/components/icons/CrossIcon';
import DesktopHeaderMenu from './components/DesktopHeaderMenu';
import Image from 'next/image';
import { basePath } from '@/config/config';
import Link from 'next/link';

export default function Header() {
  const { width } = useWindowSize();

  const [opened, setOpened] = useState<boolean>(false);

  const headerStyleWidth =
    width < MOBILE_WIDTH ? 'h-headerHeightMobile' : 'h-headerHeight';

  return (
    <div
      className={`${headerStyleWidth} w-full flex items-center justify-around bg-background px-8 sticky mobile:relative top-0 duration-300 z-50`}
    >
      <Link href="/" className="h-full">
        <Image
          src={`${basePath}images/logo.png`}
          width={500}
          height={500}
          alt="Logo"
          className="h-full object-center w-fit mobile:py-8 py-2"
        />
      </Link>
      {width < MOBILE_WIDTH ? (
        <>
          <div className="w-10 absolute right-0 top-0 h-full flex flex-col justify-center">
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
