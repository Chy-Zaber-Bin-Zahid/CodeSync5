import React from "react";

type Service = {
  name: string;
  slug: string;
  icon: string;
  image: string;
  paraFirst: string;
  description: string;
  whyUs: Array<{ point: string; description: string }>;
  whyMatters: Array<{ point: string; description: string }>;
};

type WhyUsProps = {
  service: Service;
};

function WhyUs({ service }: WhyUsProps) {
  return (
    <div id="servicesWhyUs-component" className="w-full px-3 bg-gray-100 py-12">
      <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-start items-start">
        <h2 className="text-2xl mq-875:text-xl mq-500:text-lg font-bold">
          Why We&apos;re Better
        </h2>
        <ul className="list-disc  space-y-3">
          {service.whyUs.map((item, index) => (
            <li
              key={index}
              className="font-bold text-lg mq-875:text-[16px] mq-500:text-sm"
            >
              {item.point}{" "}
              <span className="text-gray-500 font-normal">
                – {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhyUs;
