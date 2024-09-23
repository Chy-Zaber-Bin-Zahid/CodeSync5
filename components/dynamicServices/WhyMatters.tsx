import React from 'react'

type Service = {
  name: string;
  slug: string;
  icon: string;
  image: string,
  paraFirst: string;
  description: string;
  whyUs: Array<{ point: string; description: string; }>;
  whyMatters: Array<{ point: string; description: string; }>;
};

type WhyMattersProps = {
  service: Service;
};

function WhyMatters({ service }: WhyMattersProps) {
  return (
    <div id="servicesWhyMatters-component" className="w-full px-3 mb-16">
      <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-start items-start">
        <h2 className="text-2xl mq-875:text-xl mq-500:text-lg font-bold">Why {service.name} Matters</h2>
        <ul className="list-disc list-inside space-y-3 m-0">
          {service.whyMatters.map((item, index) => (
            <li key={index} className="font-bold text-lg mq-875:text-[16px] mq-500:text-sm">
              {item.point} <span className="text-gray-500 font-normal">– {item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WhyMatters