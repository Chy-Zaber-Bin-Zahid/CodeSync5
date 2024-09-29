"use client";

import MobileNavbar from "@/components/MobileNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "phosphor-react";
import { useState } from "react";

function Navbar() {
  const currentPath = usePathname();
  const baseLinkCommonClass =
    "px-2 py-2 transition-all duration-300 no-underline border-b-2";
  const baseLinkActiveClass =
    "text-nav-active border-nav-active hover:text-nav-active";
  const baseLinkDefaultClass =
    "hover:text-nav-hover text-nav-default border-b-white";
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <div className="sticky top-0 shadow-nav-shadow min-mq-766:py-6 px-3 z-40 bg-white mq-765:py-2">
      <div className="flex gap-2 justify-between items-center max-w-big-screen mx-auto">
        <Link
          onClick={() => setToggleNav(false)}
          href="/"
          className="flex justify-end items-end gap-2 no-underline text-black"
        >
          <Image
            src="/assets/nav-logo.png"
            width={140}
            height={35}
            style={{ objectFit: "contain" }}
            alt="Logo"
            blurDataURL="data:..."
            placeholder="blur"
          />
        </Link>
        <div className="flex justify-between items-center gap-3 mq-875:hidden">
          <Link
            href="/"
            className={`${baseLinkCommonClass} ${
              currentPath === "/" ? baseLinkActiveClass : baseLinkDefaultClass
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${baseLinkCommonClass} ${
              currentPath.startsWith("/about")
                ? baseLinkActiveClass
                : baseLinkDefaultClass
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${baseLinkCommonClass} ${
              currentPath.startsWith("/services")
                ? baseLinkActiveClass
                : baseLinkDefaultClass
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${baseLinkCommonClass} ${
              currentPath.startsWith("/contact")
                ? baseLinkActiveClass
                : baseLinkDefaultClass
            }`}
          >
            Contact Us
          </Link>
          {/* <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp-default rounded text-white flex justify-center items-center gap-1 py-2 px-3 transition-all duration-300 hover:bg-whatsapp-hover no-underline"
          >
            <WhatsappLogo size={26} />
            Whatsapp
          </a> */}
        </div>
        <div
          onClick={() => setToggleNav(true)}
          className="p-2 hover:cursor-pointer hidden mq-875:block"
        >
          <List size={30} />
        </div>
      </div>
      <MobileNavbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </div>
  );
}

export default Navbar;
