import React from 'react'
import { X } from 'phosphor-react';

type MobileNavbar = {
    toggleNav: boolean,
    setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavbar({ toggleNav, setToggleNav }: MobileNavbar) {
    return (
        <div className={`absolute top-0 right-0 z-50 bg-white h-screen w-3/4 border-l border-gray-300 py-3 px-4 transition-all duration-300 opacity-95 min-mq-765:hidden mq-765:block ${toggleNav ? "translate-x-0" : "translate-x-full"} mq-400:w-full`} >
            <div className="flex justify-between items-center gap-4" >
                <div>logo</div>
                <div onClick={() => setToggleNav(false)} className="hover:cursor-pointer hover:scale-125 transition-all duration-300" ><X size={26} /></div>
            </div>
        </div>
    )
}

export default MobileNavbar