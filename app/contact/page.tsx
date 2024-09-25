import ContactForm from '@/components/contactForm/Contact';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CodeSync5 ",
  description: "CodeSync  Contact Us Page",
};

function page() {
  return (
    <div className='w-full'>
      <ContactForm/>
    </div>
  )
}

export default page
