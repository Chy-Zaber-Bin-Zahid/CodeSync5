import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
      <div className="max-w-big-screen mx-auto text-xl">
        <p className="mb-8">
          Our service portfolio encompasses a wide array of IT solutions that
          are designed to drive your business forward.
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Web Development</strong> – Custom websites with modern
            frameworks like React, Next.js, and more.
          </li>
          <li>
            <strong>Mobile App Development</strong> – Scalable mobile solutions
            for Android and iOS.
          </li>
          <li>
            <strong>eCommerce Solutions</strong> – End-to-end eCommerce
            platforms with integrated payment systems.
          </li>
          <li>
            <strong>AI Integration</strong> – Bringing AI into your business to
            automate and optimize workflows.
          </li>
          <li>
            <strong>UI/UX Design</strong> – Engaging designs that provide
            seamless user experiences.
          </li>
          <li>
            <strong>Graphics Design</strong> – Professional branding and
            creative graphic solutions for your business.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeOffer;
