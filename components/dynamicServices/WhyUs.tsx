"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  name: string;
  slug: string;
  icon: string;
  image: string;
  paraFirst: string;
  description: string;
  whyUs: Array<{ point: string; description: string }>;
  whyMatters: Array<{ point: string; description: string }>;
};

type WhyUsProps = {
  service: Service;
};

function WhyUs({ service }: WhyUsProps) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#heading-whybetter", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading-whybetter",
      },
    });
    gsap.from("#list-whybetter li", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#list-whybetter",
      },
    });
  });

  return (
    <div className="w-full px-3 bg-gray-100 py-12">
      <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-start items-start">
        <h2 id="heading-whybetter" className="text-2xl mq-875:text-xl mq-500:text-lg font-bold">
          Why We&apos;re Better
        </h2>
        <ul id="list-whybetter" className="list-disc space-y-3">
          {service.whyUs.map((item, index) => (
            <li
              key={index}
              className="font-bold text-lg mq-875:text-[16px] mq-500:text-sm"
            >
              {item.point}{" "}
              <span className="text-gray-500 font-normal">
                – {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhyUs;
