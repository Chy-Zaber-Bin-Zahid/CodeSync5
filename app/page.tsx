import React from "react";
import Intro from "@/components/home/Intro";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import Tools from "@/components/home/Tools";
import Industries from "@/components/home/Industries";
import MissionStatement from "@/components/about/MissionStatement";
import VisionStatement from "@/components/about/VisionStatement";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Intro />
      <AboutUs />
      <MissionStatement />
      <VisionStatement />
      <Services />
      <Tools />
      <Industries />
    </div>
  );
}
