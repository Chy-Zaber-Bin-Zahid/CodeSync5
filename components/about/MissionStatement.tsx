"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyName } from "@/constant/CompanyName";

const MissionStatement = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#mission-statement",
      {
        opacity: 0,
        x: "-100%",
        duration: 1,

        scrollTrigger: {
          trigger: "#mission-statement",
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,

        scrollTrigger: {
          trigger: "#mission-statement",
        },
      }
    );
  }, []);
  return (
    <section className="max-w-big-screen mx-auto bg-white">
      <div id="mission-statement" className=" w-full mx-auto my-12">
        <div className="flex flex-col gap-8 lg:flex-row  lg:justify-between items-center mx-3 lg:space-x-8">
          <div className="lg:flex-1 w-full h-64 md:h-96 l relative">
            <Image
              src="/assets/home/mission.svg"
              alt="Mission Illustration"
              fill
              className="rounded-lg absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl">
              <span className="text-primaryText">Mission</span> Statement:
            </h1>
            <p className="leading-relaxed text-gray-500 mq-400:text-sm text-2xl mq-875:text-lg">
              Our mission at{" "}
              <span className="text-primaryText font-semibold">{companyName} </span>
              is to provide customized, innovative software solutions that help
              our clients achieve their business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
