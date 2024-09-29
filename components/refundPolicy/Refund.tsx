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
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

gsap.registerPlugin(ScrollTrigger);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Refund() {
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

  const policyPoints = [
    {
      title: "30-Day Satisfaction Guarantee",
      content:
        "At CodeSync5, we stand by the quality of our software products and offer a 30-day satisfaction guarantee. If you’re not completely happy with your purchase, you can request a full refund within 30 days from the date of purchase.",
    },
    {
      title: "Refund Eligibility",
      content:
        "To qualify for a refund, your purchase must be made directly through our website. Please note that we cannot offer refunds for products acquired through third-party vendors or app stores.",
    },
    {
      title: "How to Request a Refund",
      content:
        "To begin the refund process, please reach out to our customer support team with your order number and a brief explanation of your request. We aim to process refund requests within 5-7 business days.",
    },
    {
      title: "Non-Refundable Items",
      content:
        "Please be aware that custom development services, consultation fees, and subscription-based services that have been accessed for more than 14 days are not eligible for refunds.",
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
      className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-3 sm:px-6 lg:px-8"
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="How can we assist you with your refund?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}{" "}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600 text-center">
              Request submitted successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600 text-center">
              Failed to submit request. Please try again.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
