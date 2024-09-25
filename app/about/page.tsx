import AboutUs from "@/components/about/AboutUs";

import Welcome from "@/components/about/Welcome";
import WhyChoose from "@/components/about/WhyChoose";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CodeSync5 LTD",
  description: "CodeSync LTD About Us Page",
};

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
