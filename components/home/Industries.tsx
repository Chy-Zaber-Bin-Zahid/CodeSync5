"use client"
import React from 'react'
import { industries } from '@/utils/industries'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Industries() {
    useGSAP(() => {
        gsap.fromTo(
            "#industries-component",
            { opacity: 0, x: "-100%" },
            {
                duration: 1.5, opacity: 1, x: 0, delay: 0,
                scrollTrigger: {
                    trigger: "#industries-component",
                }
            }
        );
    });

    return (
        <section className="w-full mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765 overflow-auto" >
            <div id="industries-component" className="w-full px-3 py-4">
                <div className='mx-auto max-w-big-screen w-full flex flex-col gap-4 justify-between items-center'>
                    <div className="w-full flex flex-col gap-5 justify-center items-center" >
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <h1 className='m-0'>Industries we are</h1>
                            <h1 className='m-0 text-primaryText'>Serving</h1>
                        </div>
                        <div className='grid gap-y-16 gap-x-2 mq-875:gap-x-4 grid-cols-6 mq-875:grid-cols-3 w-full' >
                            {industries.map((item) => (
                                <div className='flex flex-col justify-center items-center gap-2' key={item.name}>
                                    <div className='text-3xl mq-875:text-2xl' >{item.icon}</div>
                                    <p className="m-0 mq-400:text-sm mq-875:text-[16px] text-lg">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industries