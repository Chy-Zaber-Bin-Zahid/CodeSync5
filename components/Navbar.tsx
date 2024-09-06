"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhatsappLogo } from 'phosphor-react';

function Navbar() {
    const currentPath = usePathname();
    const baseLinkCommonClass = "px-2 py-2 transition-all duration-300 no-underline border-b-2";
    const baseLinkActiveClass = "text-nav-active border-nav-active hover:text-nav-active";
    const baseLinkDefaultClass = "hover:text-nav-hover text-nav-default border-b-white";
    return (
        <div className='sticky top-0 shadow-nav-shadow p-4 z-50 bg-white'>
            <div className="flex gap-2 justify-between items-center max-w-big-screen mx-auto" >
                <div>logo</div>
                <div className='flex justify-between items-center gap-3' >
                    <Link href="/" className={`${baseLinkCommonClass} ${currentPath === "/" ? baseLinkActiveClass : baseLinkDefaultClass}`}>Home</Link>
                    <Link href="/about" className={`${baseLinkCommonClass} ${currentPath === "/about" ? baseLinkActiveClass : baseLinkDefaultClass}`}>About</Link>
                    <Dropdown as={ButtonGroup}>
                        <Link href="/services" className={`${baseLinkCommonClass} ${currentPath === "/services" ? baseLinkActiveClass : "hover:text-nav-hover text-nav-default p-0 border-b-white"}`}>Services</Link>

                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className={`dropdown-toggle ${currentPath === "/services" ? "dropdown-toggle-active" : ""
                            }`} />

                        <Dropdown.Menu className='dropdown-menu'>
                            <Dropdown.Item href="#/action-1" className='drop-menu'>Web Application</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className='drop-menu'>Mobile Application</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className='drop-menu'>DevOps</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
        </div>
    )
}

export default Navbar