"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Reason {
  text: string;
}

const reasons: Reason[] = [
  { text: "Experienced developers with a passion for innovation." },
  { text: "Customized solutions tailored to your business goals." },
  { text: "Commitment to quality and timely delivery." },
];

const AllServicesWhyChooseUs: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#heading-whychoose", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading-whychoose",
      },
    });
    gsap.from("#para-whychoose", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#para-whychoose",
      },
    });
    gsap.from("#list-whychoose li", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#list-whychoose",
      },
    });
  });
  return (
    <div className="py-16 px-3 bg-white">
      <h2
        id="heading-whychoose"
        className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl mb-10"
      >
        Why Choose Us?
      </h2>
      <div className="mx-auto max-w-big-screen">
        <div className="flex flex-col items-center justify-center">
          <p id="para-whychoose" className="mb-4 text-gray-500 mq-400:text-sm text-xl mq-875:text-lg ">
            We are a premier IT firm offering a range of services from web
            development to AI integration. Our experienced team focuses on
            delivering results that make a difference. Here&apos;s why we’re the
            best choice for your business:
          </p>
        </div>
        <ul
          id="list-whychoose"
          className="lg:w-4/5 mx-auto list-disc my-4 text-lg mq-875:text-[16px] mq-500:text-sm"
        >
          {reasons.map((reason, index) => (
            <li key={index}>{reason.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllServicesWhyChooseUs;
