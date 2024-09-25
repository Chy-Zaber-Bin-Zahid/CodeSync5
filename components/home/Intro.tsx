"use client";

import { companyName } from "@/constant/CompanyName";
import { useMyContext } from "@/context/MyProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { CalendarCheck } from "phosphor-react";

function Intro() {
  const { setToggleModal } = useMyContext();
  useGSAP(() => {
    gsap.fromTo(
      "#intro-text",
      { opacity: 0, y: 100 },
      { duration: 0.7, opacity: 1, y: 0, delay: 0 }
    );
    gsap.fromTo(
      "#intro-img",
      { opacity: 0, x: 100 },
      { duration: 0.7, opacity: 1, x: 0, delay: 0 }
    );
  });

  return (
    <section
      id="home"
      className="h-[calc(100vh-90px)] mq-765:h-[calc(100vh-62px)] min-mq-1301:h-fit w-full mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765"
    >
      <div className="w-full px-3 pt-4">
        <div className="mx-auto max-w-big-screen w-full flex gap-4 justify-between items-center mq-765:flex-col-reverse">
          <div
            id="intro-text"
            className="flex flex-col gap-3 justify-center items-start w-[60%] mq-765:w-full"
          >
            <h1 className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl">
              <span className="text-primaryText">Drive</span> Business
              Innovation with{" "}
              <span className="text-primaryText">{companyName}</span>
            </h1>
            <p className="text-gray-500 mq-400:text-sm text-2xl mq-875:text-lg">
              We empower businesses to innovate and streamline operations,
              ensuring sustainable growth. Let us help you turn your ideas into
              reality with our expert-driven software services.
            </p>
            <button
              onClick={() => setToggleModal(true)}
              className="bg-gray-500 font-bold hover:bg-gray-700 transition-all duration-300 text-white p-2 rounded flex gap-2 justify-center items-center mq-875:text-sm mq-400:text-xs"
            >
              {" "}
              <CalendarCheck size={18} weight="fill" />
              BOOK US
            </button>
          </div>
          <div
            id="intro-img"
            className="w-[40%] pl-[20px] mq-765:pl-0 mq-765:w-full mq-765:flex mq-765:justify-center mq-765:items-center"
          >
            <Image
              src="/assets/home/home-intro.svg"
              width={450}
              height={400}
              objectFit="contain"
              alt="Introduction of IT"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
