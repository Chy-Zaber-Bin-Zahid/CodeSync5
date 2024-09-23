"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Statements from "../about/Statements";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  useGSAP(() => {
    gsap.fromTo(
      "#aboutUs-component",
      { opacity: 0, x: "100%" },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#aboutUs-component",
        },
      }
    );
  });

  return (
    <section
      id="about"
      className="w-full mq-1300:flex justify-center items-center bg-gray-100 scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765"
    >
      <div id="aboutUs-component" className="w-full px-3 my-16">
        <div className="mx-auto max-w-big-screen w-full flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col gap-4 mx-2 justify-center items-center lg:items-start w-full lg:w-[55%]">
            <h1 className="font-bold self-start  text-2xl lg:text-4xl">
              About
              <span className="text-primaryText "> Rosetech</span>
            </h1>
            <div className="flex flex-col gap-3 justify-center items-start w-full">
              <p className="text-gray-500 m-0 text-lg lg:text-2xl">
                <span className="text-black font-bold">
                  RoseTech Solutions Ltd
                </span>{" "}
                aspires to provide comprehensive software solutions to
                businesses of all sizes. From enterprises to startups, SMEs,
                agencies, corporations, and institutions, we aim to be the
                technical wing for these organisations.
              </p>
            </div>
          </div>
          <div className="w-full h-64  md:h-96  lg:w-[45%]  lg:pl-[81px] relative">
            <Image
              src="/assets/home/intro.svg"
              layout="fill"
              objectFit="cover"
              alt="Introduction of IT"
              className="absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
        <div className="max-w-big-screen mx-auto">
          <div className="statement">
            <Statements />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
