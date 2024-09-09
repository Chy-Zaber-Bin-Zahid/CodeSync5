import React from 'react';
import Intro from '@/components/home/Intro';
import AboutUs from '@/components/home/AboutUs';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Intro/>
      <AboutUs/>
    </div>
  );
}
