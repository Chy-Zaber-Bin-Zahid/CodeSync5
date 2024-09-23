"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

gsap.registerPlugin(ScrollTrigger);

export default function RefundPolicy() {
  const [lastUpdated] = useState("September 23, 2024");
  const containerRef = useRef(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const policyPoints = [
    {
      title: "30-Day Money-Back Guarantee",
      content:
        "We offer a 30-day money-back guarantee on all our software products. If you're not satisfied with your purchase, you can request a full refund within 30 days of the purchase date.",
    },
    {
      title: "Eligibility for Refund",
      content:
        "To be eligible for a refund, you must have purchased the software directly from our website. Refunds are not available for products purchased through third-party retailers or app stores.",
    },
    {
      title: "Refund Process",
      content:
        "To initiate a refund, please contact our customer support team with your order number and reason for the refund. We aim to process all refund requests within 5-7 business days.",
    },
    {
      title: "Exceptions",
      content:
        "Custom development services, consultation fees, and subscription-based services that have been used for more than 14 days are not eligible for refunds.",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Refund Policy
          </h1>
          <p className="text-indigo-600">Last updated: {lastUpdated}</p>
        </header>

        <main className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {policyPoints.map((point, index) => (
            <section
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`p-8 ${index % 2 === 0 ? "bg-indigo-50" : "bg-white"}`}
            >
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center">
                <CheckIcon className="w-6 h-6 mr-2 text-green-500" />
                {point.title}
              </h2>
              <p className="text-gray-700">{point.content}</p>
            </section>
          ))}
        </main>

        <section className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
            Need Help?
          </h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we assist you with your refund?"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Request <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
