import { ArrowIcon } from '@/components/icons/ArrowIcon';
import React from 'react';

export default function GoToTopButton() {
  return (
    <button className="p-2 fixed bottom-16 right-4 z-50 rounded-full bg-tertiaryColor cursor-pointer shadow-xl">
      <ArrowIcon size={20} fill="var(--quaternaryColor)" />
    </button>
  );
}
