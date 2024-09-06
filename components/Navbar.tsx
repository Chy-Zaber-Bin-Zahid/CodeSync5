"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const currentPath = usePathname();
    const baseLinkClass = "px-2 py-2 transition-all duration-300 no-underline";
    const baseLinkActiveClass = "text-nav-active border-b-2 border-nav-active hover:text-nav-active";
    return (
        <div className='flex gap-2 justify-between items-center p-4'>
            <div>logo</div>
            <div className='flex justify-between items-center gap-4' >
                <Link href="/" className={`${baseLinkClass} ${currentPath === "/" ? baseLinkActiveClass : "hover:text-nav-hover text-nav-default"}`}>Home</Link>
                <Link href="/about" className={`${baseLinkClass} ${currentPath === "/about" ? baseLinkActiveClass : "hover:text-nav-hover text-nav-default"}`}>About</Link>
                <Dropdown as={ButtonGroup}>
                    <Link href="/services" className={`${baseLinkClass} ${currentPath === "/services" ? baseLinkActiveClass : "hover:text-nav-hover text-nav-default p-0"}`}>Services</Link>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className={`dropdown-toggle ${currentPath === "/services" ? "dropdown-toggle-active" : ""
                        }`} />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navbar