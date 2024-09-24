import AboutUs from "@/components/about/AboutUs";

import Welcome from "@/components/about/Welcome";
import WhyChoose from "@/components/about/WhyChoose";
import React from "react";

const Page = () => {
  return (
    <section className="w-full">
      <Welcome />
      <AboutUs />
      <WhyChoose />
    </section>
  );
};

export default Page;
