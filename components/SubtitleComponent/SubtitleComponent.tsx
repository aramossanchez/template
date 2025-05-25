import React from 'react';

interface SubtitleComponentProps {
  text: string;
  className?: string;
}

export default function SubtitleComponent({
  text,
  className,
}: SubtitleComponentProps) {
  return (
    <h1
      className={`${className} md:text-2xl text-xl font-bold text-quaternaryColor`}
    >
      {text}
    </h1>
  );
}
