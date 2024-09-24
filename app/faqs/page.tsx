import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/utils/faqs'

function page() {
    return (
        <div className="w-full px-3 pt-4">
            <div className='mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-between items-center'>
                <h2 className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold text-center m-0">Frequently Asked <span className="text-primaryText">Questions</span></h2>
                <Accordion type="single" collapsible className="w-full max-w-[900px] mx-auto mb-10 parent-class">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-xl font-semibold mq-565:text-[18px]">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-500 text-[16px] mq-500:text-[14px]">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default page