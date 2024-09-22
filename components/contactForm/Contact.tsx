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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // This is where you would typically send the form data to your server
        console.log(values)
    }

    return (
        <section className="w-full flex justify-center items-center ">
            <div className="w-full px-3 pb-6 pt-12 ">
                <div className="mx-auto max-w-big-screen w-full flex gap-4 justify-between items-center">
                    <div className="w-[55%]">
                    <Card className="w-full max-w-lg mx-auto">
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                            <CardDescription>Send us a message and we&apos;ll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
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
                                                <FormLabel>Email</FormLabel>
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
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Your message"
                                                        className="resize-none"
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
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" type="submit" onClick={form.handleSubmit(onSubmit)}>
                                Send Message
                            </Button>
                        </CardFooter>
                    </Card>
                    </div>
                    <div className="relative h-[500px] scale-x-[-1] w-[45%]">
                        <Image
                            src="/assets/contact/contactus.svg"
                            layout="fill"
                            objectFit="contain"
                            alt="Contact us"
                            className="absolute "
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}