import Image from "next/image";
import React from "react";

const Statements = () => {
  return (
    <section>
      <div className="w-4/5 mx-auto my-8">
        <div className="flex justify-between items-center space-x-8">
          {" "}
          {/* Add spacing between the items */}
          <div className="flex-1 h-96 relative">
            <Image
              src="/assets/about/MissionIllustration.jpg"
              alt="Team Illustration"
              layout="fill"
              objectFit="fill"
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

      <div className="w-4/5 mx-auto my-8">
        <div className="flex flex-row-reverse justify-between items-center space-x-8">
          {" "}
          {/* Add spacing between the items */}
          <div className="flex-1 h-96 relative">
            <Image
              src="/assets/about/VisionIllustration.jpg"
              alt="Team Illustration"
              layout="fill"
              objectFit="fill"
              className="rounded-lg absolute inset-0"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl">
              <span className="text-red-800">Vision</span> Statement:
            </h1>
            <p className="leading-relaxed text-2xl text-slate-700">
              At <span className="text-red-800 font-semibold">XYZ</span>{" "}
              Solutions our vision is to be the leading provider of software
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
