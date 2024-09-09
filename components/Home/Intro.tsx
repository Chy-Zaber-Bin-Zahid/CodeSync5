"use client"

import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Intro() {
  useGSAP(() => {
    gsap.fromTo(
      "#intro-text",
      { opacity: 0, y: 100 },
      { duration: 0.7, opacity: 1, y: 0, delay: 0 }
    );
    gsap.fromTo(
      "#intro-img",
      { opacity: 0, x: 100 },
      { duration: 0.7, opacity: 1, x: 0, delay: 0 }
    );
  });

  return (
    <div className="h-[calc(100vh-90px)] mq-765:h-[calc(100vh-62px)] min-mq-1301:h-fit w-full mq-1300:flex justify-center items-center" >
      <div className="w-full px-3 pt-4">
        <div className='mx-auto max-w-big-screen w-full flex gap-4 justify-between items-center'>
          <div id="intro-text" className='flex flex-col gap-3 justify-center items-start w-[60%]' >
            <h1 className='font-bold' ><span className='text-primaryText'>Accelerate</span> your Business Growth with <span className="text-primaryText">Rosetech Solutions Ltd.</span></h1>
            <p className="text-gray-400" >Stay ahead of the competition with our cutting-edge software solutions designed for your unique business needs.</p>
            <button className='bg-gray-500 font-semibold hover:bg-gray-700 transition-all duration-300 text-white p-2 rounded animate-bounce' >BOOK US</button>
          </div>
          <div id="intro-img" className='w-[40%] pl-[21px]'>
            <Image
              src="assets/home/intro.svg"
              width={450}
              height={400}
              objectFit="contain"
              alt="Introduction of IT"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro