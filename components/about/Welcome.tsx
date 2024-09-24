"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="flex justify-between max-w-big-screen mx-auto items-center"
    >
      <div className="text-slate-700 flex-1">
        <h1>
          Welcome to <span className="text-red-800">XYZ</span> Limited
        </h1>
        <p className="text-xl text-gray-500 tracking-wider leading-relaxed">
          Your go to it-firm for making creative web solutions in the shortest
          time possible. We are a team of experts who are dedicated to providing
          the best services to our clients.
        </p>
      </div>
      <div className=" h-96 relative flex-1">
        {" "}
        <Image
          src="/assets/about/Welcome.svg"
          alt="Hello Illustration"
          layout="fill"
          objectFit="fill"
          className="rounded-lg"
          blurDataURL="data:..."
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Welcome;
