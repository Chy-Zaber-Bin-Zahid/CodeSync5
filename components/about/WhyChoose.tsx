"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Check } from "phosphor-react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const WhyChoose = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#whychoose",
      {
        opacity: 0,
        x: "-100%",
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#whychoose",
        },
      }
    );
  });
  interface WhyChooseInterface {
    title: string;
  }
  const whyChoose: WhyChooseInterface[] = [
    {
      title: "Expertise",
    },
    {
      title: "Innovation",
    },
    {
      title: "Customer Service",
    },
    {
      title: "Quality",
    },
    {
      title: "Value",
    },
    {
      title: "Commitment",
    },
  ];
  return (
    <div id="whychoose" className=" w-full mx-auto  my-16 lg:my-32">
      <h1 className="text-3xl lg:text-5xl text-center mb-16">
        Why Choose <span className="text-red-800">XYZ</span> Solutions
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-center">
        <div className="md:flex-1 w-full  h-64 lg:h-96 relative rounded-lg">
          <Image
            src="assets/about/WhyChooseIllustration.jpg"
            alt="Team Illustration"
            layout="fill"
            objectFit="contain"
            className="rounded-lg absolute inset-0"
          />
        </div>
        <div className="flex-1">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 text-lg lg:text-2xl items-center"
            >
              <p>
                <Check size={32} color="#921c1c" weight="fill" />
              </p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
