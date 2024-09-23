"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AccessibilityIcon, CheckIcon, ArrowRightIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AccessibilityStatement() {
  const [lastUpdated] = useState("September 23, 2024");
  const containerRef = useRef(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const accessibilityPoints = [
    {
      title: "Our Commitment",
      content:
        "TechInnovate Solutions is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
    },
    {
      title: "Conformance Status",
      content:
        "The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website is partially conformant with WCAG 2.1 level AA.",
    },
    {
      title: "Accessibility Features",
      content:
        "Our website incorporates the following accessibility features: semantic HTML, ARIA attributes, keyboard navigation support, color contrast compliance, resizable text without loss of functionality, and alternative text for images.",
    },
    {
      title: "Limitations",
      content:
        "Despite our efforts to ensure accessibility of our website, there may be some limitations. We are working to address these issues and achieve full compliance. If you encounter any issues, please contact us.",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-teal-800 mb-4 flex items-center justify-center">
            <AccessibilityIcon className="w-10 h-10 mr-4" />
            Accessibility Statement
          </h1>
          <p className="text-teal-600">Last updated: {lastUpdated}</p>
        </header>

        <main className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {accessibilityPoints.map((point, index) => (
            <section
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`p-8 ${index % 2 === 0 ? "bg-teal-50" : "bg-white"}`}
            >
              <h2 className="text-2xl font-semibold text-teal-800 mb-4 flex items-center">
                <CheckIcon className="w-6 h-6 mr-2 text-green-500" />
                {point.title}
              </h2>
              <p className="text-gray-700">{point.content}</p>
            </section>
          ))}
        </main>

        <section className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-teal-800 mb-6">
            Feedback
          </h2>
          <p className="mb-4 text-gray-700">
            We welcome your feedback on the accessibility of our website. Please
            let us know if you encounter accessibility barriers:
          </p>
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
              <Label htmlFor="message">Feedback</Label>
              <Textarea
                id="message"
                placeholder="Please describe the accessibility issue you encountered"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Submit Feedback <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
