import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  interface WhyChooseInterface {
    title: string;
  }
  const whyChoose: WhyChooseInterface[] = [
    {
      title: "Expertise",
    },
    {
      title: "Innovation",
    },
    {
      title: "Customer Service",
    },
    {
      title: "Quality",
    },
    {
      title: "Value",
    },
    {
      title: "Commitment",
    },
  ];
  return (
    <div className="w-4/5 mx-auto  my-8">
      <h1 className="text-5xl text-center">
        Why Choose <span className="text-red-800">XYZ</span> Solutions
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex-1 h-96 relative">
          <Image
            src="/assets/about/WhyChooseIllustration.jpg"
            alt="Team Illustration"
            layout="fill"
            objectFit="fill"
            className="rounded-lg absolute inset-0"
          />
        </div>
        <div className="flex-1">
          {whyChoose.map((item, index) => (
            <div key={index} className="flex gap-2 text-2xl items-center">
              <p>Check Icon</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
