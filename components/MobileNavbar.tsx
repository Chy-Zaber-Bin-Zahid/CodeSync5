"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { WhatsappLogo, X } from 'phosphor-react';
import { useState, useEffect } from 'react';

type MobileNavbarProps = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavbar({ toggleNav, setToggleNav }: MobileNavbarProps) {
  const [activeLink, setActiveLink] = useState("home");
  const baseLinkCommonClass = "transition-all duration-300 no-underline border-b-2 pr-[4px]";
  const baseLinkActiveClass = "text-nav-active border-nav-active hover:text-nav-active";
  const baseLinkDefaultClass = "hover:text-nav-hover text-nav-default border-b-white";

  const handleNav = (sectionId: string) => {
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
    <div className={`absolute top-0 right-0 z-50 bg-white h-screen w-3/4 border-l border-gray-300 py-3 px-4 transition-all duration-500 min-mq-766:hidden mq-765:block ${toggleNav ? "translate-x-0" : "translate-x-full"} mq-400:w-full`} >
      <div className="flex justify-between items-center gap-4 mb-6">
        <div onClick={() => handleNav("home")} className="flex justify-end items-end gap-2 no-underline text-black cursor-pointer">
          <Image
            src="assets/nav-logo.png"
            width={33}
            height={33}
            objectFit="contain"
            alt="Logo"
          />
          <h1 className='text-lg font-semibold m-0'>Rose<span className="text-primaryText">Tech</span></h1>
        </div>
        <div onClick={() => setToggleNav(false)} className="hover:cursor-pointer hover:scale-125 transition-all duration-300">
          <X size={26} />
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-3'>
        <div onClick={() => handleNav("home")} className={`${baseLinkCommonClass} ${activeLink === "home" ? baseLinkActiveClass : baseLinkDefaultClass} w-full cursor-pointer`}>Home</div>
        <div onClick={() => handleNav("about")} className={`${baseLinkCommonClass} ${activeLink === "about" ? baseLinkActiveClass : baseLinkDefaultClass} w-full cursor-pointer`}>About</div>
        <div onClick={() => handleNav("services")} className={`${baseLinkCommonClass} ${activeLink === "services" ? baseLinkActiveClass : baseLinkDefaultClass} w-full cursor-pointer`}>Services</div>
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
  );
}

export default MobileNavbar;
