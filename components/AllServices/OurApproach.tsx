import React from "react";

interface ApproachStep {
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    title: "Consultation",
    description:
      "We start by understanding your business goals and challenges.",
  },
  {
    title: "Strategy",
    description:
      "We create a tailor-made plan to address your specific business needs.",
  },
  {
    title: "Execution",
    description:
      "Our development team works efficiently to build the solution.",
  },
  {
    title: "Feedback",
    description:
      "We iterate based on your feedback to ensure your satisfaction.",
  },
  {
    title: "Support",
    description:
      "Post-deployment, we offer continuous support to maintain your solution.",
  },
];

const OurApproach: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Approach</h2>
      <div className="max-w-big-screen mx-auto text-xl">
        <p className="mb-8">
          We follow a client-first approach, where every solution is customized
          to meet the unique needs of your business.
        </p>
        <ul className="list-disc list-inside space-y-4">
          {approachSteps.map((step, index) => (
            <li key={index}>
              <strong>{step.title}</strong> – {step.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurApproach;
