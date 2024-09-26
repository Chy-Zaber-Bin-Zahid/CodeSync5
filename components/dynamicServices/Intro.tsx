"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

type Service = {
  service: {
    name: string;
    slug: string;
    image: string;
    paraFirst: string;
    description: string;
    whyUs: Array<{ point: string; description: string }>;
    whyMatters: Array<{ point: string; description: string }>;
  };
};

function Intro({ service }: Service) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#image",
      { opacity: 0, x: "-500px" },
      {
          duration: 1, opacity: 1, x: 0, delay: 0,
          scrollTrigger: {
              trigger: "#image",
          }
      }
    );
    gsap.fromTo(
      "#heading",
      { opacity: 0, x: "500px" },
      {
          duration: 1, opacity: 1, x: 0, delay: 0,
          scrollTrigger: {
              trigger: "#heading",
          }
      }
    );
    gsap.fromTo(
      "#para",
      { opacity: 0, y: "500px" },
      {
          duration: 1, opacity: 1, y: 0, delay: .2,
          scrollTrigger: {
              trigger: "#image",
          }
      }
    );
  });

  return (
    <div id="servicesIntro-component" className="w-full px-3">
      <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-center items-center ">
        <div className="w-full relative h-96">
          <Image
            id="image"
            src={service.image}
            layout="fill"
            style={{ objectFit: "contain" }}
            alt={service.name}
            className="absolute"
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-2 items-center text-center">
          <h1 id="heading" className="m-0 font-bold text-4xl mq-400:text-2xl mq-875:text-3xl">
            {service.name}
          </h1>
          <p id="para" className="m-0 mq-400:text-sm text-xl mq-875:text-lg text-gray-500">
            {service.paraFirst}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
