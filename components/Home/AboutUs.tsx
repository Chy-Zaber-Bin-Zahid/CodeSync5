"use client"

import Image from 'next/image'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    useGSAP(() => {
        gsap.fromTo(
            "#aboutUs-component",
            { opacity: 0, x: "100%" },
            {
                duration: 1.5, opacity: 1, x: 0, delay: 0,
                scrollTrigger: {
                    trigger: "#aboutUs-component",
                }
            }
        );
    });

    return (
        <div className="w-full mq-1300:flex justify-center items-center bg-gray-100" >
            <div id="aboutUs-component" className="w-full px-3">
                <div className='mx-auto max-w-big-screen w-full flex gap-4 justify-between items-center'>
                    <div className='flex flex-col gap-4 justify-center items-start w-[55%]' >
                        <h1 className='font-bold' >About<span className="text-primaryText"> Rosetech</span></h1>
                        <div className="flex flex-col gap-3 justify-center items-start w-full" >
                            <p className="text-gray-400 m-0" ><span className="text-black font-bold" >RoseTech Solutions Ltd</span> aspires to provide comprehensive software solutions to businesses of all sizes. From enterprises to startups, SMEs, agencies, corporations, and institutions, we aim to be the technical wing for these organisations.</p>
                            <p className="text-gray-400 m-0" >Our goal is to enable these businesses to focus solely on their core operations, without worrying about the technical aspects of their operations. Our vision is to be the premier provider of innovative, end-to-end software solutions, empowering businesses to achieve their full potential.</p>
                        </div>
                    </div>
                    <div className='w-[45%] pl-[81px]'>
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

export default AboutUs