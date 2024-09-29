"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { companyName } from "@/constant/CompanyName";

const termsData = [
  {
    id: "item-1",
    title: "Service Usage",
    content:
      "You agree to utilize our services solely for lawful purposes and in alignment with these Terms & Conditions. Unauthorized access, interference, or attempts to breach the security of our services is strictly prohibited, including accessing data not designated for you.",
  },
  {
    id: "item-2",
    title: "Intellectual Property Rights",
    content:
      "All content, layout, graphics, design, compilation, digital conversion, and related materials associated with our services are protected by applicable copyrights, trademarks, and proprietary rights. Any unauthorized reproduction, redistribution, or publication of these materials, beyond what is permitted in these Terms & Conditions, is prohibited.",
  },
  {
    id: "item-3",
    title: "Limitation of Liability",
    content:
      "CodeSync5 will not be held responsible for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services or materials, even if we have been informed of the possibility of such damages.",
  },
  {
    id: "item-4",
    title: "Termination of Access",
    content:
      "We reserve the right, at our discretion, to suspend or terminate your access to any or all of our services, with or without prior notice, for any reason, including but not limited to a breach of these Terms & Conditions.",
  },
];

export default function TermsAndCondition({
  lastUpdated = "September 23, 2024",
  contactInfo = {
    email: "codesyncfive@gmail.com",
    address: "Dhaka, Bangladesh",
  },
}) {
  const [showContact, setShowContact] = useState(false);
  const cardRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.set(contactRef.current, { height: 0, opacity: 0 });
    }
  }, []);

  const toggleContact = () => {
    if (contactRef.current) {
      if (!showContact) {
        setShowContact(true);
        gsap.to(contactRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(contactRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => setShowContact(false),
        });
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto" ref={cardRef}>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-primaryText">
            Terms & Conditions
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Last updated: {lastUpdated}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-gray-700">
            Welcome to {companyName}. By using our services, you agree
            to comply with and be bound by the following terms and conditions.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {termsData.map((term) => (
              <AccordionItem key={term.id} value={term.id}>
                <AccordionTrigger>{term.title}</AccordionTrigger>
                <AccordionContent>{term.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            onClick={toggleContact}
            className="mb-4 bg-primaryText hover:bg-primaryText-hover"
          >
            {showContact ? "Hide Contact Info" : "Show Contact Info"}
          </Button>
          <div
            ref={contactRef}
            className="text-center text-gray-700 overflow-hidden"
          >
            <p>
              For inquiries about our Terms & Conditions, please contact:
            </p>
            <p className="font-semibold">{contactInfo.email}</p>
            <p>{contactInfo.address}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}