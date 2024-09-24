"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#about-us",
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
          trigger: "#about-us",
        },
      }
    );
    gsap.fromTo(
      "#about-para",
      {
        opacity: 0,
        x: "100%",
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#about-para",
        },
      }
    );
    gsap.fromTo(
      "#about-img",
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
          trigger: "#about-img",
        },
      }
    );
    gsap.fromTo(
      "#below-para",
      {
        opacity: 0,
        x: "100%",
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#below-para",
        },
      }
    );
  });
  return (
    <div className="max-w-big-screen mx-auto flex flex-col gap-2  my-32">
      <h1 className="text-4xl" id="about-us">
        About <span className="text-red-800">US</span>{" "}
      </h1>
      <p
        id="about-para"
        className="text-xl leading-relaxed tracking-wide text-gray-500"
      >
        We are a leading software consultancy firm that specializes in providing
        cutting-edge solutions to businesses of all sizes. Our team of expert
        consultants is committed to delivering personalized and innovative
        services that meet the unique needs of our clients.
      </p>
      <div id="about-img" className="w-3/5 mx-auto h-96 relative my-8">
        <Image
          src="/assets/home/About.svg"
          alt="Team Illustration"
          layout="fill"
          objectFit="contain"
          className="rounded-lg absolute inset-0"
          blurDataURL="data:..."
          placeholder="blur"
        />
      </div>
      <p id="below-para" className="text-2xl leading-relaxed text-slate-700">
        At <span className="text-red-800">XYZ Solutions</span> , we believe that
        technology can transform businesses, and our goal is to help our clients
        harness the power of technology to achieve their strategic objectives.
        We have a passion for innovation and a dedication to excellence, and we
        strive to provide the best possible service to every client we work
        with.
      </p>
    </div>
  );
};

export default AboutUs;
