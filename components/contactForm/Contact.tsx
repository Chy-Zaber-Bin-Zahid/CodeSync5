'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

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
})

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setSubmitStatus('idle')
        try {
            const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? ""
            const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? ""
            const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""

            await emailjs.send(serviceId, templateId, {
                form_name: values.name,
                form_email: values.email,
                message: values.message,
            }, publicKey)

            setSubmitStatus('success')
            form.reset()
        } catch (error) {
            console.error('Failed to send email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="w-full flex justify-center items-center h-full bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="w-full px-3 py-9">
                <div className="w-full flex flex-col gap-1 justify-center items-center mb-4 text-center">
                    <h1 className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold m-0">
                        Contact <span className="text-primaryText">Us</span>
                    </h1>
                    <p className='m-0 text-xl mq-875:text-lg mq-400:text-sm text-gray-500 font-semibold'>Send us a message and we&apos;ll get back to you as soon as possible.</p>
                </div>
                <div className="mx-auto max-w-big-screen w-full flex gap-4 justify-between mq-875:justify-center items-center flex-row-reverse">
                    <div className="w-[45%] mq-875:w-full">
                        <Card className="w-full max-w-lg mx-auto">
                            <CardContent className="p-6">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-md">Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your name" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Please enter your full name.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-md">Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="Your email" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        We&apos;ll never share your email with anyone else.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-md">Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Your message"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Please provide details about your inquiry.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            className="w-full bg-primaryText text-md font-semibold"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </form>
                                </Form>
                                {submitStatus === 'success' && (
                                    <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again.</p>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="relative h-[500px] w-[55%] mq-875:hidden">
                        <Image
                            src="/assets/contact/contactus.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Contact us"
                            className="absolute"
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}