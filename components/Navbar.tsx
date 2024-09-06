"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
    const currentPath = usePathname();
    const baseLinkClass = "px-2 py-2 transition-all duration-300";
    const baseLinkActiveClass = "text-nav-active border-b-2 border-nav-active hover:text-nav-active";
    return (
        <div className='flex gap-2 justify-between items-center p-4'>
            <div>logo</div>
            <div className='flex justify-between items-center gap-4' >
                <Link href="/" className={`${baseLinkClass} ${currentPath === "/" ? baseLinkActiveClass : "hover:text-nav-hover text-nav-default"}`}>Home</Link>
                <Link href="/about" className={`${baseLinkClass} ${currentPath === "/about" ? baseLinkActiveClass : "hover:text-nav-hover text-nav-default"}`}>About</Link>
            </div>
        </div>
    )
}

export default Navbar