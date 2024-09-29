"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }),
});

export default function Accessibility() {
  const [lastUpdated] = useState("September 23, 2024");
  const containerRef = useRef(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const accessibilityPoints = [
    {
      title: "Our Pledge",
      content:
        "At CodeSync, we are dedicated to making our digital platforms accessible to all users, including those with disabilities. We continually strive to enhance the user experience for everyone, ensuring our solutions adhere to relevant accessibility standards.",
    },
    {
      title: "Compliance Status",
      content:
        "The Web Content Accessibility Guidelines (WCAG) set forth essential criteria for improving web accessibility. These guidelines outline three levels of compliance: Level A, Level AA, and Level AAA. Our website currently meets the requirements of WCAG 2.1 at Level AA, reflecting our commitment to accessibility, though we acknowledge that further improvements are needed.",
    },
    {
      title: "Accessibility Features",
      content:
        "Our website is designed with various accessibility features, including structured HTML for better navigation, ARIA roles to enhance screen reader compatibility, keyboard navigation support, proper colour contrast for readability, resizable text, and alternative text for images to ensure everyone can access our content.",
    },
    {
      title: "Ongoing Improvements",
      content:
        "While we are committed to providing an accessible online experience, we recognize that some areas may still pose challenges. We are actively working to address these limitations to ensure full compliance. If you encounter any accessibility issues, please don't hesitate to reach out to us for support.",
    },
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";

      await emailjs.send(
        serviceId,
        templateId,
        {
          form_name: values.name,
          form_email: values.email,
          message: values.message,
        },
        publicKey
      );

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-3 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-teal-800 mb-4 flex items-center justify-center">
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
              <h2 className="text-2xl font-semibold text-teal-800 mb-4 flex  items-center">
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe the accessibility issue you encountered"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}{" "}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600 text-center">
              Feedback submitted successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600 text-center">
              Failed to submit feedback. Please try again.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
