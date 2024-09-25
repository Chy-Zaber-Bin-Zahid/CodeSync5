import Refund from "@/components/refundPolicy/Refund";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | CodeSync5 LTD",
  description: "CodeSync LTD Refund Policy Page",
};

export default function RefundPolicy() {
  return (
    <>
      <Refund />
    </>
  );
}