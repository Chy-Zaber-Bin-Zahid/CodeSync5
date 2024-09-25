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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function TermsAndCondition() {
  const [lastUpdated] = useState("September 23, 2024");
  const [showContact, setShowContact] = useState(false);
  const [accepted, setAccepted] = useState(false);
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
              Terms & Conditions
            </CardTitle>
            <CardDescription className="text-center text-gray-500">
              Last updated: {lastUpdated}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-700">
              Welcome to TechInnovate Solutions. By using our services, you
              agree to comply with and be bound by the following terms and
              conditions.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Use of Services</AccordionTrigger>
                <AccordionContent>
                  You agree to use our services only for lawful purposes and in
                  accordance with these Terms & Conditions. You are prohibited
                  from violating or attempting to violate the security of the
                  services, including, without limitation, accessing data not
                  intended for you or logging onto a server or account which you
                  are not authorized to access.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Intellectual Property</AccordionTrigger>
                <AccordionContent>
                  The content, organization, graphics, design, compilation,
                  magnetic translation, digital conversion and other matters
                  related to the services are protected under applicable
                  copyrights, trademarks and other proprietary rights. The
                  copying, redistribution, use or publication by you of any such
                  matters or any part of the services, except as allowed by
                  these Terms & Conditions, is strictly prohibited.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Limitation of Liability</AccordionTrigger>
                <AccordionContent>
                  TechInnovate Solutions shall not be liable for any direct,
                  indirect, incidental, special or consequential damages that
                  result from the use of, or the inability to use, the services
                  or materials on the services, even if we have been advised of
                  the possibility of such damages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Termination</AccordionTrigger>
                <AccordionContent>
                  We reserve the right, in our sole discretion, to terminate
                  your access to all or part of the services, with or without
                  notice, for any reason, including, without limitation, breach
                  of these Terms & Conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="terms"
                checked={accepted}
                onCheckedChange={(checked) => setAccepted(checked === true)}
              />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the terms and conditions
              </Label>
            </div>
            <Button
              onClick={toggleContact}
              className="mb-4 bg-primaryText hover:bg-primaryText-hover"
              disabled={!accepted}
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
              <p className="font-semibold">legal@techinnovatesolutions.com</p>
              <p>123 Tech Street, Innovation City, 12345</p>
            </div>
          </CardFooter>
        </Card>
      </div>
  );
}