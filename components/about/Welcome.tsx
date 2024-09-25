"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyName } from "@/constant/CompanyName";

const Welcome = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#welcome",
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
          trigger: "#welcome",
        },
      }
    );
  });
  return (
    <div
      id="welcome"
      className="flex flex-col lg:flex-row lg:justify-between max-w-big-screen mx-auto items-center py-12 px-3"
    >
      <div className=" flex-1">
        <h1 className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold">
          Welcome to <span className="text-red-800">{companyName}</span> Limited
        </h1>
        <p className="text-xl text-gray-500 tracking-wider leading-relaxed">
          Your go to it-firm for making creative web solutions in the shortest
          time possible. We are a team of experts who are dedicated to providing
          the best services to our clients.
        </p>
      </div>
      <div className=" h-96 w-full relative lg:flex-1">
        {" "}
        <Image
          src="/assets/about/welcome.png"
          alt="Hello Illustration"
          className="rounded-lg"
          blurDataURL="data:..."
          placeholder="blur"
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
    </div>
  );
};

export default Welcome;
