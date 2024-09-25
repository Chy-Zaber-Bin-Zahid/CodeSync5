import TermsAndCondition from "@/components/termsAndConditions/TermsAndCondition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms And Conditions | CodeSync5 ",
  description: "CodeSync  Terms And Conditions Page",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <TermsAndCondition />
    </div>
  );
}