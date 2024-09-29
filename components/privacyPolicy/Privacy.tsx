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

const privacyPolicyData = {
  lastUpdated: "September 23, 2024",
  introParagraph:
    "At CodeSync5, we prioritize your privacy and are committed to protecting your personal information. This policy outlines how we gather, utilize, and safeguard your data.",
  sections: [
    {
      id: "item-1",
      title: "Information We Gather",
      content:
        "We collect information that you voluntarily provide to us, such as when you create an account, complete a form, or interact with our team. This information may include your name, email address, phone number, and company details.",
    },
    {
      id: "item-2",
      title: "How We Utilize Your Information",
      content:
        "The information we collect is used to deliver, maintain, and enhance our services, to communicate with you effectively, and to fulfill our legal obligations. Additionally, we may use your information to keep you informed about updates and new offerings related to our products and services.",
    },
    {
      id: "item-3",
      title: "Protecting Your Data",
      content:
        "We implement various security measures to protect your personal information. While we strive to ensure the highest level of security, it’s important to recognize that no online transmission or storage method can be guaranteed to be completely secure.",
    },
    {
      id: "item-4",
      title: "Your Rights Regarding Your Information",
      content:
        "You have the right to access, modify, or delete your personal information at any time. You may also have the ability to limit or object to specific uses of your data. To exercise these rights, please reach out to us using the contact details provided below.",
    },
  ],
  contactInfo: {
    email: "privacy@techinnovatesolutions.com",
    address: "123 Tech Street, Innovation City, 12345",
  },
};

export default function Privacy() {
  const [showContact, setShowContact] = useState(false);
  const cardRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.set(contactRef.current, { height: 0, opacity: 0 });
    }
  }, []);

  const toggleContact = () => {
    setShowContact(!showContact);
    if (contactRef.current) {
      if (!showContact) {
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
        });
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto" ref={cardRef}>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-primaryText">
            Privacy Policy
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Last updated: {privacyPolicyData.lastUpdated}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-gray-700">
            {privacyPolicyData.introParagraph}
          </p>
          <Accordion type="single" collapsible className="w-full">
            {privacyPolicyData.sections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>{section.content}</AccordionContent>
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
            {showContact && (
              <>
                <p>For privacy-related inquiries, please contact:</p>
                <p className="font-semibold">
                  {privacyPolicyData.contactInfo.email}
                </p>
                <p>{privacyPolicyData.contactInfo.address}</p>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
