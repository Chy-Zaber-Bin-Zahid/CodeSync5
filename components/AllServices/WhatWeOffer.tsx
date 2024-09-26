"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites with modern frameworks like React, Next.js, and more.",
  },
  {
    title: "Mobile App Development",
    description: "Scalable mobile solutions for Android and iOS.",
  },
  {
    title: "eCommerce Solutions",
    description:
      "End-to-end eCommerce platforms with integrated payment systems.",
  },
  {
    title: "AI Integration",
    description:
      "Bringing AI into your business to automate and optimize workflows.",
  },
  {
    title: "UI/UX Design",
    description: "Engaging designs that provide seamless user experiences.",
  },
  {
    title: "Graphics Design",
    description:
      "Professional branding and creative graphic solutions for your business.",
  },
];

const WhatWeOffer: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#heading-whatweoffer", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading-whatweoffer",
      },
    });
    gsap.from("#para-whatweoffer", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#para-whatweoffer",
      },
    });
    gsap.from("#list-whatweoffer li", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#list-whatweoffer",
      },
    });
  });
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2
        id="heading-whatweoffer"
        className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl mb-10 text-center"
      >
        What We Offer
      </h2>
      <div className="max-w-big-screen mx-auto text-xl">
        <p id="para-whatweoffer" className="mb-8 text-center text-gray-500 mq-400:text-sm text-xl mq-875:text-lg">
          Our service portfolio encompasses a wide array of IT solutions that
          are designed to drive your business forward.
        </p>
        <ul
          id="list-whatweoffer"
          className="lg:w-4/5 lg:mx-auto text-lg mq-875:text-[16px] mq-500:text-sm list-disc space-y-4"
        >
          {services.map((service, index) => (
            <li key={index}>
              <strong>{service.title}</strong> – {service.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeOffer;
