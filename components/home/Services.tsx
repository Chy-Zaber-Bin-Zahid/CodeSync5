"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/utils/services";
import Link from "next/link";
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { CaretDoubleRight } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useGSAP(() => {
    gsap.fromTo(
      "#services-heading",
      { opacity: 0, y: "150" },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#services-heading",
        },
      }
    );
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: "150" },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0,
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: ".service-card",
        },
      }
    );
  });
  return (
    <section
      id="services"
      className="w-full mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765 overflow-hidden"
    >
      <div className="w-full px-3 py-6">
        <div className="mx-auto max-w-big-screen w-full flex flex-col gap-8 justify-between items-center">
          <div
            id="services-heading"
            className="w-full flex justify-center items-center"
          >
            <h1 className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold">
              Our <span className="text-primaryText">Services</span>
            </h1>
          </div>
          <div className="w-full grid grid-cols-3 mq-875:grid-cols-2 mq-565:grid-cols-1 gap-4 auto-rows-fr">
            {services.map((item) => (
              <Tilt key={item.slug}>
                <div className="service-card py-4 px-16 mq-565:px-16 mq-400:px-8 mq-950:px-8 flex flex-col h-full gap-2 justify-start items-center rounded-sm shadow-services-card">
                  <div className="mb-2">
                    <Image
                      src={item.icon}
                      width={60}
                      height={60}
                      objectFit="contain"
                      alt={item.name}
                      blurDataURL="data:..."
                      placeholder="blur"
                    />
                  </div>
                  <h1 className="text-lg text-center m-0 font-bold">
                    {item.name}
                  </h1>
                  <p className="text-sm text-center m-0 flex-grow">
                    {item.description}
                  </p>
                  <Link href={`/services/${item.slug}`} className="no-underline">
                    <button className="mt-16 py-1 font-semibold flex justify-center items-center gap-2 px-10 mq-875:px-6 mq-875:text-sm mq-950:px-8 bg-primaryText transition-all from-neutral-300 hover:bg-primaryText-hover rounded text-white">
                      <span>Read more</span> <CaretDoubleRight size={14} weight="bold" />
                    </button>
                  </Link>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
