import AllServicesCTO from "@/components/AllServices/AllServicesCTO";
import AllServicesHero from "@/components/AllServices/Hero";
import OurApproach from "@/components/AllServices/OurApproach";
import Technologies from "@/components/AllServices/Technologies";
import WhatWeOffer from "@/components/AllServices/WhatWeOffer";
import AllServicesWhyChooseUs from "@/components/AllServices/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | CodeSync5 ",
  description: "CodeSync  Services Page",
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <AllServicesHero />
      <AllServicesWhyChooseUs />
      <WhatWeOffer />
      <OurApproach />
      <Technologies />
      <AllServicesCTO />
    </div>
  );
};

export default Services;
