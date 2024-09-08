import React from "react";

const Services = () => {
  interface ServiceInterface {
    title: string;
  }
  const services: ServiceInterface[] = [
    {
      title: "Software development and customization",
    },
    {
      title: "Business analysis and strategy development",
    },
    {
      title: "Systems integration & AI Solution",
    },
    {
      title: "Systems integration & AI Solution",
    },
    {
      title: "Technical consulting and project management",
    },
    {
      title: "Technical consulting and project management",
    },
  ];
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-5xl text-center">
        Core <span className="text-red-800">Services</span>{" "}
      </h1>
      <ul className="grid grid-cols-2  my-8">
        {services.map((item, index) => (
          <li className="flex gap-2 items-center text-2xl mt-4" key={index}>
            <span>Check Icon</span> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
