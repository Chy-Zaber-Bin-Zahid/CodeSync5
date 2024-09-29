"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        <div className="flex  flex-col  gap-8 lg:flex-row-reverse justify-between items-center mx-3 lg:space-x-8">
          <div className="lg:flex-1 w-full h-64  md:h-96 relative">
            <Image
              src="/assets/home/vision.svg"
              alt="Vision Illustration"
              className="rounded-lg absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl mb-3">
              <span className="text-primaryText">Vision</span> Statement:
            </h1>
            <p className="text-gray-500 mq-400:text-sm text-2xl mq-875:text-lg">
              Our vision is to transform how businesses use technology through cost-effective solutions. We strive to empower businesses with cutting-edge tools and fast execution for success in the digital era.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
