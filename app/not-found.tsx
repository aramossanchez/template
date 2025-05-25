import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import Image from 'next/image';
import React from 'react';
import { basePath } from '@/config/config';

export default function NotFoundPage() {
  return (
    <div className="container_style">
      <section className="section_style flex flex-col gap-y-5">
        <Image
          src={`${basePath}images/error-404.png`}
          alt={'Error 404'}
          width={1000}
          height={1000}
          className="w-[11/12] h-auto"
        />
        <span>Parece que aquí no hay nada. Prueba a volver al inicio.</span>
        <PrimaryButtonComponent text="VOLVER AL INICIO" link url="/" />
      </section>
    </div>
  );
}
