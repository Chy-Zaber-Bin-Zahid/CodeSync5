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

export default function Privacy() {
  const [lastUpdated] = useState("September 23, 2024");
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
            Last updated: {lastUpdated}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-gray-700">
            At TechInnovate Solutions, we take your privacy seriously. This
            policy describes how we collect, use, and protect your personal
            information.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Information We Collect</AccordionTrigger>
              <AccordionContent>
                We collect information you provide directly to us, such as
                when you create an account, fill out a form, or communicate
                with us. This may include your name, email address, phone
                number, and company information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How We Use Your Information</AccordionTrigger>
              <AccordionContent>
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to comply
                with legal obligations. We may also use your information to
                send you updates about our products and services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Data Security</AccordionTrigger>
              <AccordionContent>
                We implement a variety of security measures to maintain the
                safety of your personal information. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure, so we cannot guarantee absolute security.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Your Rights</AccordionTrigger>
              <AccordionContent>
                You have the right to access, correct, or delete your personal
                information. You may also have the right to restrict or object
                to certain processing of your data. To exercise these rights,
                please contact us using the information provided below.
              </AccordionContent>
            </AccordionItem>
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
            <p>For privacy-related inquiries, please contact:</p>
            <p className="font-semibold">
              privacy@techinnovatesolutions.com
            </p>
            <p>123 Tech Street, Innovation City, 12345</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}