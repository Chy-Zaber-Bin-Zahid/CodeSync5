"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyName } from "@/constant/CompanyName";
const VisionStatement = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      "#vision-statement",
      {
        opacity: 0,
        x: "100%",
        duration: 1.5,

        scrollTrigger: {
          trigger: "#vision-statement",
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,

        scrollTrigger: {
          trigger: "#vision-statement",
        },
      }
    );
  }, []);
  return (
    <section className=" w-full bg-gray-100">
      <div
        id="vision-statement"
        className="max-w-big-screen w-full mx-auto my-16"
      >
        <div className="flex  flex-col  gap-8 lg:flex-row-reverse justify-between items-center mx-2 lg:space-x-8">
          <div className="lg:flex-1 w-full h-64  md:h-96 relative">
            <Image
              src="/assets/home/vision.png"
              alt="Vision Illustration"
              className="rounded-lg absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold lg:text-4xl lg:mb-8">
              <span className="text-red-800">Vision</span> Statement:
            </h1>
            <p className="leading-relaxed  text-sm lg:text-2xl text-slate-700">
              At{" "}
              <span className="text-red-800 font-semibold">{companyName}</span>{" "}
              , our vision is to be the leading provider of software consultancy
              services in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
