"use client";

import { useMyContext } from "@/context/MyProvider";
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function Modal() {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";
    const { toggleModal, setToggleModal } = useMyContext();
    const form = useRef<HTMLFormElement | null>(null);
    const handleBackgroundClick = () => {
        setToggleModal(false);
    };
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
                .then(
                    () => {
                        console.log('SUCCESS');
                        setToggleModal(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };
    return (
        <div
            onClick={handleBackgroundClick}
            className={`fixed top-0 w-full h-screen z-50 flex justify-center items-center p-2 ${toggleModal ? "block" : "hidden"
                }`}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div
                onClick={handleContentClick}
                className="relative bg-white rounded p-4 max-w-[500px] w-full mx-auto z-50"
            >
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 w-full">
                    <div>
                        <label>Name</label>
                        <br />
                        <input required placeholder="Jhon" className="mt-2 w-full border-1 focus:outline-none focus:ring-2 focus:ring-primaryText border-gray-300 p-2" type="text" name="form_name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input required placeholder="jhon@email.com" className="mt-2 w-full border-1 focus:outline-none focus:ring-2 focus:ring-primaryText border-gray-300 p-2" type="email" name="form_email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <br />
                        <textarea required placeholder="Message..." className="mt-2 w-full resize-none h-[100px] border-1 focus:outline-none focus:ring-2 focus:ring-primaryText border-gray-300 p-2" name="message" />
                    </div>
                    <input className="w-full bg-primaryText hover:bg-primaryText-hover transition-all duration-300 text-white font-semibold m-0 p-2" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}

export default Modal;
