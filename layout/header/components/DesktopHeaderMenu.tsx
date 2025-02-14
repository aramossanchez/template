import { HEADER_LINKS } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

export default function DesktopHeaderMenu() {
  return (
    <div className="flex flex-row gap-x-5">
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
