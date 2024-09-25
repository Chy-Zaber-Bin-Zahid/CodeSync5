"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AllServicesHero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      {
        x: 500,
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#heading",
        },
      },
      {
        x: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#para",
      {
        y: 500,
        duration: 1.6,
        opacity: 0,
        delay: 1,
        scrollTrigger: {
          trigger: "#para",
        },
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      <Image
        src="/assets/AllServices/service.png"
        alt="Services Hero"
        style={{ objectFit: "contain" }}
        fill
        id="image"
        className="bg-white"
      />
      <div className="absolute z-10  text-center bg-gray-200 bg-opacity-70 w-fit px-6">
        <h1 id="heading" className="text-4xl font-bold">
          Our Services
        </h1>
        <p id="para" className="text-xl mt-2">
          Empowering businesses with cutting-edge IT solutions
        </p>
      </div>
    </div>
  );
};

export default AllServicesHero;
