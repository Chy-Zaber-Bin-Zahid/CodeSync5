"use client";
import { companyName } from "@/constant/CompanyName";
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
    <section className="bg-gray-100 w-full my-14 py-16">
      <div className="max-w-big-screen px-3 mx-auto flex flex-col gap-2 ">
      <h1
        className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold"
        id="about-us"
      >
        About <span className="text-primaryText">US</span>{" "}
      </h1>
      <p
        id="about-para"
        className="leading-relaxed text-gray-500 mq-400:text-sm text-xl mq-875:text-lg m-0"
      >
        We are a leading software consultancy firm that specializes in providing
        cutting-edge solutions to businesses of all sizes. Our team of expert
        consultants is committed to delivering personalized and innovative
        services that meet the unique needs of our clients.
      </p>
      <div id="about-img" className="w-full mx-auto h-96 relative my-8">
        <Image
          src="/assets/home/aboutus.svg"
          alt="Team Illustration"
          className="rounded-lg absolute inset-0"
          blurDataURL="data:..."
          placeholder="blur"
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
      <p
        id="below-para"
        className="leading-relaxed text-gray-500 mq-400:text-sm text-xl mq-875:text-lg"
      >
        At <span className="text-primaryText">{companyName}</span> , we believe
        that technology can transform businesses, and our goal is to help our
        clients harness the power of technology to achieve their strategic
        objectives. We have a passion for innovation and a dedication to
        excellence, and we strive to provide the best possible service to every
        client we work with.
      </p>
    </div>
    </section>
  );
};

export default AboutUs;
