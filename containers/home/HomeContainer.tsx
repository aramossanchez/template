import React from 'react';
import FirstSection from './components/FirstSection';
import { Separator } from '@/components/Separator';
import SecondSection from './components/SecondSection';
import GoToTopButton from './components/GoToTopButton/GoToTopButton';

export default function HomeContainer() {
  return (
    <section className="container_style">
      <div className="w-full relative">
        <FirstSection />
        <Separator fill="var(--tertiaryColor)" />
      </div>
      <SecondSection />
      <GoToTopButton />
    </section>
  );
}
