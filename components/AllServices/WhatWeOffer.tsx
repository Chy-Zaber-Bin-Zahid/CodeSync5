import React from "react";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites with modern frameworks like React, Next.js, and more.",
  },
  {
    title: "Mobile App Development",
    description: "Scalable mobile solutions for Android and iOS.",
  },
  {
    title: "eCommerce Solutions",
    description:
      "End-to-end eCommerce platforms with integrated payment systems.",
  },
  {
    title: "AI Integration",
    description:
      "Bringing AI into your business to automate and optimize workflows.",
  },
  {
    title: "UI/UX Design",
    description: "Engaging designs that provide seamless user experiences.",
  },
  {
    title: "Graphics Design",
    description:
      "Professional branding and creative graphic solutions for your business.",
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
      <div className="max-w-big-screen mx-auto text-xl">
        <p className="mb-8">
          Our service portfolio encompasses a wide array of IT solutions that
          are designed to drive your business forward.
        </p>
        <ul className="list-disc list-inside space-y-4">
          {services.map((service, index) => (
            <li key={index}>
              <strong>{service.title}</strong> – {service.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeOffer;
