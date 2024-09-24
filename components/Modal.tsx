'use client';

import { useMyContext } from "@/context/MyProvider";
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

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

export default function Modal() {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";
  const { toggleModal, setToggleModal } = useMyContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (toggleModal) {
      setIsRendered(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
      form.reset();
      setSubmitStatus('idle');
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [toggleModal, form]);

  const handleClose = () => {
    setToggleModal(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await emailjs.send(serviceId, templateId, {
        form_name: values.name,
        form_email: values.email,
        message: values.message,
      }, publicKey);
      setSubmitStatus('success');
      form.reset();
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isRendered && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
            isVisible ? 'bg-black bg-opacity-50' : 'bg-transparent'
          }`}
        >
          <div
            onClick={handleContentClick}
            className={`relative bg-white rounded-lg p-6 w-full max-w-[500px] mx-auto transition-all duration-300 ease-in-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
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
                        <Input type="email" placeholder="Your email" {...field} />
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
                          placeholder="Your message"
                          className="resize-none h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primaryText hover:bg-primaryText-hover transition-all duration-300 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
              </form>
            </Form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}