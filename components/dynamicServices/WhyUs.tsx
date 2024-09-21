import React from 'react';

type Service = {
  name: string;
  slug: string;
  icon: string;
  image: string,
  paraFirst: string;
  paraMiddle: string;
  description: string;
  whyUs: Array<{ point: string; description: string; }>;
  whyMatters: Array<{ point: string; description: string; }>;
};

type WhyUsProps = {
  service: Service;
};


function WhyUs({ service }: WhyUsProps) {
  return (
    <div id="servicesWhyUs-component" className="w-full px-3 bg-gray-100 py-6">
      <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-start items-start">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <ul className="list-disc list-inside space-y-3">
          {service.whyUs.map((item, index) => (
            <li key={index} className="font-bold text-xl">
              {item.point}:<span className="text-gray-700 font-normal"> {item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhyUs;
