"use client"

import MobileNavbar from '@/components/MobileNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { List, WhatsappLogo } from 'phosphor-react';
import { useState, useEffect } from 'react';

function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const baseLinkCommonClass = "px-2 py-2 transition-all duration-300 no-underline border-b-2 cursor-pointer";
    const baseLinkActiveClass = "text-nav-active border-nav-active hover:text-nav-active";
    const baseLinkDefaultClass = "hover:text-nav-hover text-nav-default border-b-white";
    const [toggleNav, setToggleNav] = useState<boolean>(false);

    const handleNav = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, sectionId: string) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(sectionId);
        }
        setToggleNav(false);
    };
    const sections = [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "services", title: "Services" },
    ];
    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.2,
            rootMargin: "-90px 0px 0px 0px",
        });
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='sticky top-0 shadow-nav-shadow min-mq-766:py-6 px-3 z-40 bg-white mq-765:py-2'>
            <div className="flex gap-2 justify-between items-center max-w-big-screen mx-auto" >
                <div onClick={(e) => handleNav(e, "home")} className="flex justify-end items-end gap-2 no-underline text-black hover:cursor-pointer">
                    <Image
                        src="assets/nav-logo.png"
                        width={33}
                        height={33}
                        objectFit="contain"
                        alt="Logo"
                    />
                    <h1 className='text-lg font-semibold m-0'>Rose<span className="text-primaryText" >Tech</span></h1>
                </div>
                <div className='flex justify-between items-center gap-3 mq-765:hidden' >
                    <div onClick={(e) => handleNav(e, "home")} className={`${baseLinkCommonClass} ${activeLink === "home" ? baseLinkActiveClass : baseLinkDefaultClass}`}>Home</div>
                    <div onClick={(e) => handleNav(e, "about")} className={`${baseLinkCommonClass} ${activeLink === "about" ? baseLinkActiveClass : baseLinkDefaultClass}`}>About</div>
                    <div onClick={(e) => handleNav(e, "services")} className={`${baseLinkCommonClass} ${activeLink === "services" ? baseLinkActiveClass : baseLinkDefaultClass}`}>Services</div>
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
                <div onClick={() => setToggleNav(true)} className="p-2 hover:cursor-pointer hidden mq-765:block" >
                    <List size={30} />
                </div>
            </div>
            <MobileNavbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
        </div>
    );
}

export default Navbar;
