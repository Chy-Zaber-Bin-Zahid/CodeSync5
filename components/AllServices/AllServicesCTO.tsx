"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AllServicesCTO = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#heading-cto", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading-cto",
      },
    });

    gsap.from("#para-cto", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#para-cto",
      },
    });
    gsap.from("#button-cto", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#button-cto",
      },
    });
  });

  return (
    <div className="py-16 px-8 bg-white text-center">
      <h2 id="heading-cto" className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl mb-8">
        Ready to Transform Your Business?
      </h2>
      <p id="para-cto" className="mq-400:text-sm text-xl mq-875:text-lg mb-8">
        Get in touch with us to start building solutions that will help your
        business grow.
      </p>
      <Link
        href="/contact"
        id="button-cto"
        className=" px-4 py-2 no-underline bg-primaryText transition-all duration-300 hover:bg-primaryText-hover text-white font-bold text-lg rounded-lg shadow-lg "
      >
        Contact Us
      </Link>
    </div>
  );
};

export default AllServicesCTO;
