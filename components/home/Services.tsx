"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/utils/services";
import Link from "next/link";
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { CaretDoubleRight } from "phosphor-react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [servicesRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [columnCount, setColumnCount] = useState(3); // Default to 3 columns

  // Update column count based on window size
  const updateColumnCount = () => {
    if (window.innerWidth <= 565) {
      setColumnCount(1);
    } else if (window.innerWidth <= 875) {
      setColumnCount(2);
    } else {
      setColumnCount(3);
    }
  };

  useEffect(() => {
    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => {
      window.removeEventListener('resize', updateColumnCount);
    };
  }, []);

  useGSAP(() => {
    if (inView && containerRef.current) {
      gsap.fromTo(
        "#services-heading",
        { opacity: 0, y: "150" },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#services-heading",
          },
        }
      );

      const rows = containerRef.current.querySelectorAll('.service-row');
      rows.forEach((row) => {
        const cards = row.querySelectorAll('.service-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: "150" },
          {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, [inView]);

  // Helper function to chunk the services array into rows
  const chunkArray = (arr: typeof services, size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const serviceRows = chunkArray(services, columnCount);

  return (
    <section
      id="services"
      ref={servicesRef}
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
          <div ref={containerRef} className="w-full">
            {serviceRows.map((row, rowIndex) => (
              <div key={rowIndex} className="service-row grid grid-cols-3 mq-875:grid-cols-2 mq-565:grid-cols-1 gap-4 mb-4">
                {row.map((item) => (
                  <Tilt key={item.slug}>
                    <div
                      className="service-card py-8 px-16 mq-565:px-16 mq-400:px-8 mq-1010:px-8 flex flex-col h-full gap-2 justify-start items-center rounded-sm shadow-services-card"
                    >
                      <div className="mb-2">
                        <Image
                          src={item.icon}
                          width={60}
                          height={60}
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
                        <button className="mt-20 py-[4px] mq-875:py-2 font-semibold flex justify-center items-center gap-2 px-10 mq-875:px-8 mq-875:text-sm mq-1010:px-8 bg-primaryText transition-all from-neutral-300 hover:bg-primaryText-hover rounded text-white">
                          <span>Read more</span> <CaretDoubleRight size={14} weight="bold" />
                        </button>
                      </Link>
                    </div>
                  </Tilt>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;