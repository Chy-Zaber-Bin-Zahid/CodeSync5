"use client"

import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMyContext } from '@/context/MyProvider';
import { CalendarCheck } from 'phosphor-react';

function Intro() {
  const { setToggleModal } = useMyContext();
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
    <section id="home" className="h-[calc(100vh-90px)] mq-765:h-[calc(100vh-62px)] min-mq-1301:h-fit w-full mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765" >
      <div className="w-full px-3 pt-4">
        <div className='mx-auto max-w-big-screen w-full flex gap-4 justify-between items-center mq-765:flex-col-reverse'>
          <div id="intro-text" className='flex flex-col gap-3 justify-center items-start w-[60%] mq-765:w-full' >
            <h1 className='font-bold mq-400:text-2xl mq-765:text-3xl mq-875:text-2xl' ><span className='text-primaryText'>Accelerate</span> your Business Growth with <span className="text-primaryText">Rosetech Solutions Ltd.</span></h1>
            <p className="text-gray-400 mq-400:text-sm" >Stay ahead of the competition with our cutting-edge software solutions designed for your unique business needs.</p>
            <button onClick={() => setToggleModal(true)} className='bg-gray-500 font-bold hover:bg-gray-700 transition-all duration-300 text-white p-2 rounded animate-bounce flex gap-2 justify-center items-center mq-875:text-sm' > <CalendarCheck size={18} weight="fill" />BOOK US</button>
          </div>
          <div id="intro-img" className='w-[40%] pl-[21px] mq-765:pl-0 mq-765:w-full mq-765:flex mq-765:justify-center mq-765:items-center'>
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
    </section>
  )
}

export default Intro
