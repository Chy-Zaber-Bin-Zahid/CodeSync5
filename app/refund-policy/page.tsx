import Refund from "@/components/refundPolicy/Refund";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | CodeSync5 ",
  description: "CodeSync5 Refund Policy Page",
};

export default function RefundPolicy() {
  return (
    <>
      <Refund />
    </>
  );
}