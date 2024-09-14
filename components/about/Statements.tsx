import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
        <div className="flex gap-8 justify-between items-center space-x-8">
          <div className="flex-1 h-96 relative">
            <Image
              src="assets/about/MissionIllustration.jpg"
              alt="Mission Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute inset-0"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl">
              <span className="text-red-800">Mission</span> Statement:
            </h1>
            <p className="leading-relaxed text-2xl text-slate-700">
              Our mission at{" "}
              <span className="text-red-800 font-semibold">XYZ</span> Solutions
              is to provide customized, innovative software solutions that help
              our clients achieve their business goals. We are committed to
              delivering exceptional service, and we work closely with our
              clients to understand their unique needs and challenges. Our goal
              is to help our clients optimize their processes and drive growth
              by harnessing the power of technology.
            </p>
          </div>
        </div>
      </div>

      <div id="vision-statement" className=" w-full mx-auto my-32">
        <div className="flex gap-8 flex-row-reverse justify-between items-center space-x-8">
          <div className="flex-1 h-96 relative">
            <Image
              src="assets/about/VisionIllustration.jpg"
              alt="Vision Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg absolute inset-0"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl">
              <span className="text-red-800">Vision</span> Statement:
            </h1>
            <p className="leading-relaxed text-2xl text-slate-700">
              At <span className="text-red-800 font-semibold">XYZ</span>{" "}
              Solutions, our vision is to be the leading provider of software
              consultancy services in the industry. We aim to achieve this by
              constantly innovating and providing exceptional service to our
              clients. We strive to be recognized as the go-to partner for
              businesses looking to leverage technology to drive growth and
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statements;
