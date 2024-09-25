"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  name: string;
  slug: string;
  icon: string;
  image: string,
  paraFirst: string;
  description: string;
  whyUs: Array<{ point: string; description: string; }>;
  whyMatters: Array<{ point: string; description: string; }>;
};

type WhyMattersProps = {
  service: Service;
};

function WhyMatters({ service }: WhyMattersProps) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#heading-whymatters",
      {
        duration: 1,
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#heading-whymatters",
        },
      }
    );
    gsap.from("#list-matters li", {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#list-matters",
      },
    });
  });
  return (
    <div id="servicesWhyMatters-component" className="w-full px-3 mb-16">
      <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-start items-start">
        <h2 id="heading-whymatters" className="text-2xl mq-875:text-xl mq-500:text-lg font-bold">Why {service.name} Matters</h2>
        <ul id="list-matters" className="list-disc  space-y-3 m-0">
          {service.whyMatters.map((item, index) => (
            <li key={index} className="font-bold text-lg mq-875:text-[16px] mq-500:text-sm">
              {item.point} <span className="text-gray-500 font-normal">– {item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WhyMatters