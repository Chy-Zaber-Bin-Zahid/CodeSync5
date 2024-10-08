"use client";
import { companyName } from "@/constant/CompanyName";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Check } from "phosphor-react";

const WhyChoose = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#whychoose",
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
          trigger: "#whychoose",
        },
      }
    );
    gsap.from("#list-whychoose", {
      opacity: 0,
      x: "-100%",
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#list-whychoose",
      },
    });
    gsap.fromTo(
      "#whychoose-img",
      { opacity: 0, x: "100%" },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#whychoose-img",
        },
      }
    );
  });
  interface WhyChooseInterface {
    title: string;
  }
  const whyChoose: WhyChooseInterface[] = [
    {
      title: "Innovative",
    },
    {
      title: "Efficient",
    },
    {
      title: "Expert",
    },
    {
      title: "Reliable",
    },
    {
      title: "Customized",
    },
  ];
  return (
    <div className=" max-w-big-screen mx-auto  my-16 ">
      <h1
        id="whychoose"
        className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold text-center mb-10"
      >
        Why Choose <span className="text-red-800">{companyName}</span>
      </h1>
      <div
        id="why-choose-img-list"
        className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-center"
      >
        <div
          id="whychoose-img"
          className="md:flex-1 w-[60%]  h-64 lg:h-96 relative rounded-lg"
        >
          <Image
            src="/assets/about/whychoose.svg"
            alt="Team Illustration"
            className="rounded-lg absolute inset-0"
            blurDataURL="data:..."
            placeholder="blur"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <div className="w-[40%]">
          {whyChoose.map((item, index) => (
            <div
              id="list-whychoose"
              key={index}
              className="flex gap-2 text-lg lg:text-2xl items-center"
            >
              <p>
                <Check size={32} color="#921c1c" weight="fill" />
              </p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
