import Link from 'next/link';
import React from 'react';

interface PrimaryButtonComponentProps {
  text: string;
  icon?: React.JSX.Element;
  link?: boolean;
  url?: string;
}

export default function PrimaryButtonComponent({
  text,
  icon,
  link = false,
  url = '/',
}: PrimaryButtonComponentProps) {
  const buttonStyle =
    'text-sm text-primaryColor font-bold border-2 border-primaryColor w-fit px-4 py-2 cursor-pointer rounded-md hover:text-background hover:bg-primaryColor duration-200 flex flex-row items-center gap-x-4';
  return link ? (
    <Link
      href={url}
      className={`${buttonStyle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      {icon && icon}
    </Link>
  ) : (
    <button className={`${buttonStyle}`}>
      {text}
      {icon && icon}
    </button>
  );
}
