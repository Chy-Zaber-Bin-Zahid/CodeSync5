import Image from "next/image";
import React from "react";

const AllServicesHero = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center bg-gray-800">
      <Image
        src="/assets/AllServices/Hero.svg"
        alt="Services Hero"
        layout="fill"
        objectFit="contain"
        className=" bg-[#012340] bg-opacity-50 opacity-60 lg:bg-opacity-100 "
      />
      <div className="absolute z-10  text-center text-slate-200 ">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl mt-2">
          Empowering businesses with cutting-edge IT solutions
        </p>
      </div>
    </div>
  );
};

export default AllServicesHero;
