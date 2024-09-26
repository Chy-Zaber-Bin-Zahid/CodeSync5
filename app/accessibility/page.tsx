import Accessibility from "@/components/accessibility/Accessibility";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | CodeSync5 ",
  description: "CodeSync  Accessibility Page",
};

export default function AccessibilityStatement() {
  return (
    <>
      <Accessibility />
    </>
  );
}
