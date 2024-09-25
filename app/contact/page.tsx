import ContactForm from '@/components/contactForm/Contact'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CodeSync5 LTD",
  description: "CodeSync LTD Contact Us Page",
};

function page() {
  return (
    <div className='w-full'>
      <ContactForm/>
    </div>
  )
}

export default page
