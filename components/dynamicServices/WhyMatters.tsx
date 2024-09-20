import React from 'react'

type Service = {
    name: string;
    slug: string;
    paraFirst: string;
    paraMiddle: string;
    description: string;
    whyUs: Array<{ point: string; description: string; }>;
    whyMatters: Array<{ point: string; description: string; }>;
  };
  
  type WhyMattersProps = {
    service: Service;
  };

function WhyMatters({ service }: WhyMattersProps) {
  return (
    <div id="servicesWhyMatters-component" className="w-full px-3 mt-4">
    <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-start items-start">
      <h2 className="text-xl font-bold">Why Matters</h2>
      <ul className="list-disc list-inside">
        {service.whyMatters.map((item, index) => (
          <li key={index} className="font-semibold">
            {item.point}: <span className="text-gray-700 font-normal">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default WhyMatters