"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ApproachStep {
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    title: "Consultation",
    description:
      "We start by understanding your business goals and challenges.",
  },
  {
    title: "Strategy",
    description:
      "We create a tailor-made plan to address your specific business needs.",
  },
  {
    title: "Execution",
    description:
      "Our development team works efficiently to build the solution.",
  },
  {
    title: "Feedback",
    description:
      "We iterate based on your feedback to ensure your satisfaction.",
  },
  {
    title: "Support",
    description:
      "Post-deployment, we offer continuous support to maintain your solution.",
  },
];

const OurApproach: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#heading-approach",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#heading-approach",
        },
      }
    );
    gsap.fromTo(
      "#para-approach",
      {
        duration: 1.2,
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#para-approach",
        },
      }
    );
    gsap.from("#list-approach li", {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#list-approach",
      },
    });
  });

  return (
    <div className="py-16 px-8 bg-white">
      <h2
        id="heading-approach"
        className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl mb-10 text-center"
      >
        Our Approach
      </h2>
      <div className="max-w-big-screen mx-auto text-xl">
        <p id="para-approach" className="mb-8 text-center text-gray-500 mq-400:text-sm text-xl mq-875:text-lg">
          We follow a client-first approach, where every solution is customized
          to meet the unique needs of your business.
        </p>
        <ul
          id="list-approach"
          className="list-disc lg:w-4/5 lg:mx-auto space-y-4 text-lg mq-875:text-[16px] mq-500:text-sm"
        >
          {approachSteps.map((step, index) => (
            <li key={index}>
              <strong>{step.title}</strong> – {step.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurApproach;
