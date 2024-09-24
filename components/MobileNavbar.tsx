"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhatsappLogo, X } from 'phosphor-react';
import React from 'react';

type MobileNavbar = {
    toggleNav: boolean,
    setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavbar({ toggleNav, setToggleNav }: MobileNavbar) {
    const currentPath = usePathname();
    const baseLinkCommonClass = "transition-all duration-300 no-underline border-b-2 pr-[4px]";
    const baseLinkActiveClass = "text-nav-active border-nav-active hover:text-nav-active";
    const baseLinkDefaultClass = "hover:text-nav-hover text-nav-default border-0";
    const handleNav = () => {
        setToggleNav(false)
    }

    return (
        <div className={`absolute top-0 right-0 z-50 h-screen w-3/4 border-l border-gray-300 pt-3 transition-all duration-500 min-mq-766:hidden mq-875:block ${toggleNav ? "translate-x-0" : "translate-x-full"} mq-400:w-full`}>
           <div className='relative h-full'>
               <div className="relative z-50 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-center gap-4 mb-6 px-4">
                        <Link onClick={() => handleNav()} href="/" className="flex justify-end items-end gap-2 no-underline text-black">
                            <Image
                                src="/assets/nav-logo.png"
                                width={33}
                                height={33}
                                objectFit="contain"
                                alt="Logo"
                                blurDataURL="data:..."
                                placeholder="blur"
                            />
                            <h1 className='text-lg font-semibold m-0'>Rose<span className="text-primaryText" >Tech</span></h1>
                        </Link>
                        <div onClick={() => handleNav()} className="hover:cursor-pointer hover:scale-125 transition-all duration-300"><X size={26} /></div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3 h-full px-4'>
                        <Link onClick={() => handleNav()} href="/" className={`${baseLinkCommonClass} ${currentPath === "/" ? baseLinkActiveClass : baseLinkDefaultClass} w-full`}>Home</Link>
                        <Link onClick={() => handleNav()} href="/about" className={`${baseLinkCommonClass} ${currentPath === "/about" ? baseLinkActiveClass : baseLinkDefaultClass} w-full`}>About</Link>
                        <Link onClick={() => handleNav()} href="/services" className={`${baseLinkCommonClass} ${currentPath.startsWith("/services") ? baseLinkActiveClass : baseLinkDefaultClass} w-full`}>Services</Link>
                        <Link onClick={() => handleNav()} href="/contact" className={`${baseLinkCommonClass} ${currentPath.startsWith("/contact") ? baseLinkActiveClass : baseLinkDefaultClass} w-full`}>Contact Us</Link>
                        <a
                            href="https://rosetech.dev/services/devops/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-whatsapp-default rounded text-white flex justify-center items-center gap-1 py-2 px-3 transition-all duration-300 hover:bg-whatsapp-hover no-underline"
                        >
                            <WhatsappLogo size={26} />
                            Whatsapp
                        </a>
                    </div>
               </div>
               <div className="absolute top-0 w-full h-full bg-white opacity-95 z-40"></div>
           </div>
        </div>
    )
}

export default MobileNavbar