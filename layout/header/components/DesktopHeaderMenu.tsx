import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import { HEADER_LINKS } from '@/utils/constants';
import React from 'react';
import LinkHeader from './LinkHeader';
import Link from 'next/link';
import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';

export default function DesktopHeaderMenu() {
  return (
    <div className="flex flex-row gap-x-10 items-center">
      {HEADER_LINKS.map((link) => {
        return (
          <div key={link.label} className="relative group">
            <div className="flex flex-row gap-x-1 items-center justify-center">
              <LinkHeader
                label={link.label}
                url={link.url}
                underlineAnimation={link?.sublinks ? false : true}
              />
              {link?.sublinks && <ArrowDownIcon size={25} />}
            </div>
            {link?.sublinks && (
              <div className="rounded-lg bg-tertiaryColor absolute w-fit whitespace-nowrap flex flex-col group-hover:opacity-100 duration-300">
                {link.sublinks.map((sublink) => {
                  return (
                    <Link
                      key={sublink.label}
                      href={sublink.url ?? ''}
                      className="px-0 py-0 text-[0px] group-hover:text-sm text-quaternaryColor hover:bg-quaternaryColor hover:text-background font-semibold duration-300 group-hover:px-8 group-hover:py-4 "
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
      <PrimaryButtonComponent text="CONTACTA" />
    </div>
  );
}
