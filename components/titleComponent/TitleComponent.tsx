import { Bree_Serif } from 'next/font/google';
import React from 'react';

const bree_serif = Bree_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
});

interface TitleComponentProps {
  text: string;
  className?: string;
}

export default function TitleComponent({
  text,
  className,
}: TitleComponentProps) {
  return (
    <h1 className={`${bree_serif.className} ${className} text-5xl text-center`}>
      {text}
    </h1>
  );
}
