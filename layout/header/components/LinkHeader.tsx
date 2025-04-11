import Link from 'next/link';
import React from 'react';

interface LinkHeaderProps {
  label: string;
  url: string;
  underlineAnimation?: boolean;
}

export default function LinkHeader({
  label,
  url,
  underlineAnimation = true,
}: LinkHeaderProps) {
  return (
    <div className="flex flex-col items-center group">
      <Link
        key={label}
        href={url ?? ''}
        className="text-sm hover:text-quaternaryColor font-semibold duration-200"
      >
        {label}
      </Link>
      {underlineAnimation && (
        <div className="w-0 group-hover:w-full h-[2px] bg-quaternaryColor duration-300"></div>
      )}
    </div>
  );
}
