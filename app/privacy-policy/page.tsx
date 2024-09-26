import Privacy from "@/components/privacyPolicy/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CodeSync5 ",
  description: "CodeSync  Privacy Policy Page",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-3 sm:px-6 lg:px-8 w-full">
      <Privacy />
    </div>
  );
}