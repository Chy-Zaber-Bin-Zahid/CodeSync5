"use client"

import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from '@/utils/service';

gsap.registerPlugin(ScrollTrigger);

function Services() {
    useGSAP(() => {
        gsap.fromTo(
            "#services-heading",
            { opacity: 0, y: "150" },
            {
                duration: 1, opacity: 1, y: 0, delay: 0,
                scrollTrigger: {
                    trigger: "#services-heading",
                }
            }
        );
        gsap.fromTo(
            ".service-card",
            { opacity: 0, y: "150" },
            {
                duration: 1, opacity: 1, y: 0, delay: 0, stagger: {
                    each: 0.2,
                },
                scrollTrigger: {
                    trigger: ".service-card", 
                }
            }
        );
    });
    return (
        <section id="services" className="w-full mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765" >
            <div className="w-full px-3 py-6">
                <div className='mx-auto max-w-big-screen w-full flex flex-col gap-4 justify-between items-center'>
                    <div id="services-heading" className="w-full flex flex-col gap-3 justify-center items-center" >
                        <h1>Our <span className="text-primaryText" >Services</span></h1>
                        <p>We take digital experience to the next level</p>
                        <p className='text-center' >Our team of experts leverages the latest technologies to create innovative and scalable software solutions that help our clients improve their business processes, increase efficiency, and drive growth. We are committed to delivering high-quality, reliable, and secure software that meets the needs of our clients and their customers. With a wide range of services including.</p>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-4'>
                        {services.map((item) => (
                            <div key={item.name} className="service-card p-4 flex flex-col gap-3 justify-center items-center rounded-sm shadow-services-card">
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services