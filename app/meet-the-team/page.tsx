"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet The Team | CodeSync5 LTD",
  description: "CodeSync LTD Meet The Team Page",
};

function MeetTheTeam() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.fromTo(
            "#heading",
            { opacity: 0, y: "-100%" },
            {
                duration: 1, opacity: 1, y: 0, delay: 0,
                scrollTrigger: {
                    trigger: "#heading",
                }
            }
        );
        gsap.fromTo(
            "#image1",
            { opacity: 0, x: "-100%" },
            {
                duration: 1, opacity: 1, x: 0, delay: 0,
                scrollTrigger: {
                    trigger: "#image1",
                }
            }
        );
        gsap.fromTo(
            "#image2",
            { opacity: 0, x: "100%" },
            {
                duration: 1, opacity: 1, x: 0, delay: 0,
                scrollTrigger: {
                    trigger: "#image2",
                }
            }
        );
    });

    return (
        <div id="servicesIntro-component" className="w-full px-3 overflow-hidden bg-gradient-to-br from-teal-50 to-sky-100">
            <div className="mx-auto max-w-big-screen w-full">
                <div className="w-full text-center pb-4 pt-8">
                    <h1 id="heading" className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold">
                        Meet The <span className="text-primaryText">Team</span>
                    </h1>
                </div>
                <div className="w-full flex mq-500:flex-col justify-center items-center mb-12">
                    <div id="image1" className="relative w-fit group overflow-hidden rounded-tl-3xl">
                        <Image
                            src="https://media.licdn.com/dms/image/v2/D5603AQFxSOYnlvHylw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727032482264?e=1732752000&v=beta&t=m481D5h2Hp3hQ57RHIN-b1zni06wFEEMhfNyt2Pch_k"
                            width={370}
                            height={370}
                            objectFit="contain"
                            alt="Chowdhury Zaber Bin Zahid"
                            blurDataURL="data:..."
                            placeholder="blur"
                            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 min-mq-501:-translate-x-full mq-500:-translate-y-full min-mq-501:group-hover:translate-x-0 mq-500:group-hover:translate-y-0 bg-black opacity-30 w-full h-full transition-transform duration-500 z-10"></div>
                        <div className="absolute bottom-0 left-0 min-mq-501:-translate-x-full mq-500:-translate-y-full min-mq-501:group-hover:translate-x-0 mq-500:group-hover:translate-y-0 w-full h-full transition-all duration-500 z-20 flex flex-col justify-center items-center text-white">
                            <h1 className="m-0 text-[18px] mq-565:text-[16px] mq-500:text-lg font-semibold">Chowdhury Zaber Bin Zahid</h1>
                            <p className="mq-565:text-[14px] mq-500:text-[16px]">Co-Founder & CTO</p>
                        </div>
                    </div>
                    <div id="image2" className="relative w-fit group overflow-hidden rounded-br-3xl">
                        <Image
                            src="https://media.licdn.com/dms/image/v2/D5635AQGxlahN9j3IXQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1708025613605?e=1727636400&v=beta&t=UNCH82Jne9YSmCcvl3tYvDGuOlyLvME0EM0evn07ZzQ"
                            width={370}
                            height={370}
                            objectFit="contain"
                            alt="Walid Ibne Hasan"
                            blurDataURL="data:..."
                            placeholder="blur"
                            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 min-mq-501:translate-x-full mq-500:translate-y-full min-mq-501:group-hover:translate-x-0 mq-500:group-hover:translate-y-0 bg-black opacity-30 w-full h-full transition-transform duration-500 z-10"></div>
                        <div className="absolute bottom-0 left-0 min-mq-501:translate-x-full mq-500:translate-y-full min-mq-501:group-hover:translate-x-0 mq-500:group-hover:translate-y-0 w-full h-full transition-all duration-500 z-20 flex flex-col justify-center items-center text-white">
                            <h1 className="m-0 text-[18px] mq-565:text-[16px] mq-500:text-lg font-semibold">Walid Ibne Hasan</h1>
                            <p className="mq-565:text-[14px] mq-500:text-[16px]">Co-Founder & COO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam