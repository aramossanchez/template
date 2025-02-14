import { Bree_Serif } from 'next/font/google';
import React from 'react';

const bree_serif = Bree_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
});

interface TitleComponentProps {
  text: string;
}

export default function TitleComponent({ text }: TitleComponentProps) {
  return (
    <h1 className={`${bree_serif.className} text-5xl text-center`}>{text}</h1>
  );
}
