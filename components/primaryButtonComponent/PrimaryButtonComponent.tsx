import React from 'react';

interface PrimaryButtonComponentProps {
  text: string;
  icon?: React.JSX.Element;
}

export default function PrimaryButtonComponent({
  text,
  icon,
}: PrimaryButtonComponentProps) {
  return (
    <button className="text-sm text-primaryColor font-bold border-2 border-primaryColor w-fit px-4 py-2 cursor-pointer rounded-md hover:text-background hover:bg-primaryColor duration-200 flex flex-row items-center gap-x-4">
      {text}
      {icon && icon}
    </button>
  );
}
