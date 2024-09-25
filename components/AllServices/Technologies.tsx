"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

interface Technology {
  name: string;
  description: string;
  image: string;
}

const technologies: Technology[] = [
  {
    name: "React JS",
    description:
      "Highly flexible front-end framework for building user interfaces.",
    image: "/assets/AllServices/ReactJS.svg",
  },
  {
    name: "Next JS",
    description:
      "Server-side rendering and full-stack capabilities for modern web apps.",
    image: "/assets/AllServices/NextJS.svg",
  },
  {
    name: "Node JS",
    description:
      "A robust back-end JavaScript environment for scalable applications.",
    image: "/assets/AllServices/NodeJS.svg",
  },
  {
    name: "Python",
    description:
      "Amazing language for AI, machine learning, and data analysis.",
    image: "/assets/AllServices/Python.svg",
  },
  {
    name: "Animation",
    description:
      "Engaging animations and interactive designs for modern web apps.",
    image: "/assets/AllServices/Animation.svg",
  },
  {
    name: "Postgres",
    description: "Powerful open-source relational database for data storage.",
    image: "/assets/AllServices/Database.svg",
  },
];

const Technologies: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#heading-tech", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading-tech",
      },
    });

    gsap.from("#card-tech div", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#card-tech",
      },
    });
  });
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 id="heading-tech" className="text-4xl font-bold text-center mb-12">
        Technologies We Use
      </h2>
      <div
        id="card-tech"
        className="max-w-big-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-max"
      >
        {technologies.map((tech, index) => (
          <Tilt key={index}>
            <div className=" flex items-center flex-col bg-[#1F2937] hover:bg-primaryText-hover bg-opacity-90 gap-4 text-white p-6 rounded-lg shadow-lg">
              <Image
                src={tech.image}
                alt="Tech Images"
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-bold text-center mb-4">
                {tech.name}
              </h3>
              <p className="text-center">{tech.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
