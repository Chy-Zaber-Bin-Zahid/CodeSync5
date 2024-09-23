import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Statements = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      "#mission-statement",
      {
        opacity: 0,
        x: "-100%",
        duration: 1,

        scrollTrigger: {
          trigger: "#mission-statement",
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,

        scrollTrigger: {
          trigger: "#mission-statement",
        },
      }
    );

    gsap.fromTo(
      "#vision-statement",
      {
        opacity: 0,
        x: "100%",
        duration: 1.5,

        scrollTrigger: {
          trigger: "#vision-statement",
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,

        scrollTrigger: {
          trigger: "#vision-statement",
        },
      }
    );
  }, []);

  return (
    <section>
      <div id="mission-statement" className=" w-full mx-auto my-32">
        <div className="flex flex-col gap-8 lg:flex-row  lg:justify-between items-center mx-2 lg:space-x-8">
          <div className="lg:flex-1 w-full h-64 md:h-96 l relative">
            <Image
              src="/assets/about/MissionIllustration.jpg"
              alt="Mission Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-4xl lg:mb-8">
              <span className="text-red-800">Mission</span> Statement:
            </h1>
            <p className="leading-relaxed text-2xl  lg:text-2xl text-slate-700">
              Our mission at{" "}
              <span className="text-red-800 font-semibold">XYZ</span> Solutions
              is to provide customized, innovative software solutions that help
              our clients achieve their business goals.
            </p>
          </div>
        </div>
      </div>

      <div id="vision-statement" className=" w-full mx-auto my-32">
        <div className="flex  flex-col  gap-8 lg:flex-row-reverse justify-between items-center mx-2 lg:space-x-8">
          <div className="lg:flex-1 w-full h-64  md:h-96 relative">
            <Image
              src="/assets/about/VisionIllustration.jpg"
              alt="Vision Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-4xl lg:mb-8">
              <span className="text-red-800">Vision</span> Statement:
            </h1>
            <p className="leading-relaxed text-2xl lg:text-2xl text-slate-700">
              At <span className="text-red-800 font-semibold">XYZ</span>{" "}
              Solutions, our vision is to be the leading provider of software
              consultancy services in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statements;
