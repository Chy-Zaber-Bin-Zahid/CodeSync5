import Image from "next/image";
import React from "react";

const AllServicesHero = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center bg-gray-800">
      <Image
        src="/assets/AllServices/AllServicesHero.svg"
        alt="Services Hero"
        layout="fill"
        objectFit="contain"
        className="opacity-30 lg:opacity-50 "
      />
      <div className="absolute z-10  text-center text-slate-200 ">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-2xl mt-4">
          Empowering businesses with cutting-edge IT solutions
        </p>
      </div>
    </div>
  );
};

export default AllServicesHero;
