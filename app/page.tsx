import React from 'react';
import Intro from '@/components/home/Intro';
import AboutUs from '@/components/home/AboutUs';
import Services from '@/components/home/Services';
import Tools from '@/components/home/Tools';
import Industries from '@/components/home/Industries';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Intro/>
      <AboutUs/>
      <Services/>
      <Tools/>
      <Industries/>
    </div>
  );
}
