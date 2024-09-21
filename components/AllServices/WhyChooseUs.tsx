import React from "react";

interface Reason {
  text: string;
}

const reasons: Reason[] = [
  { text: "Experienced developers with a passion for innovation." },
  { text: "Customized solutions tailored to your business goals." },
  { text: "Commitment to quality and timely delivery." },
];

const AllServicesWhyChooseUs: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div className="mx-auto max-w-big-screen">
        <p className="mb-4 text-2xl">
          We are a premier IT firm offering a range of services from web
          development to AI integration. Our experienced team focuses on
          delivering results that make a difference.
        </p>
        <p className="text-2xl">
          Here’s why we’re the best choice for your business:
        </p>
        <ul className="list-disc list-inside my-4 text-2xl">
          {reasons.map((reason, index) => (
            <li key={index}>{reason.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllServicesWhyChooseUs;
