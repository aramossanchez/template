import React from 'react';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-primaryColor py-10">
      <span>
        {year} - {process.env.NEXT_PUBLIC_PAGE_NAME}
      </span>
    </div>
  );
}
