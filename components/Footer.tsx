"use client"

import Link from 'next/link';
import { DeviceMobile, EnvelopeSimple, FacebookLogo, LinkedinLogo, MapPin } from 'phosphor-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-footerBg text-white px-3 py-12 mt-4">
      <div className='max-w-big-screen mx-auto grid grid-cols-3 gap-x-6 mq-765:grid-cols-1 mq-765:gap-y-8 mq-765:max-w-small-screen'>
        <div className='flex flex-col justify-start items-start gap-1'>
          <h1>logo</h1>
          <p className='text-sm m-0'>Copyright © _____ | 2023-{currentYear}</p>
          <p className='text-sm m-0'>All Rights Reserved.</p>
        </div>
        <div className='flex flex-col justify-start items-start gap-3'>
          <div className='flex flex-col justify-center items-start gap-1'>
            <h1 className='text-xl font-bold m-0' >Bangladesh</h1>
            <p className='text-sm m-0 flex justify-center items-center gap-1'><MapPin size={16} weight="fill" /><Link href="/" className="text-white">____Address____</Link></p>
          </div>
          <div className='flex flex-col justify-center items-start gap-1'>
            <h1 className='text-xl font-bold m-0' >Phone</h1>
            <p className='text-sm m-0 flex justify-center items-center gap-1'><DeviceMobile size={16} weight="fill" /><Link href="/" className="text-white">____PhoneNo____</Link></p>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-3'>
          <div className='flex flex-col justify-center items-start gap-1'>
            <h1 className='text-xl font-bold m-0' >Social</h1>
            <p className='text-sm m-0 flex justify-center items-center gap-1'>
              <Link href="/" className="text-white">
                <FacebookLogo size={16} weight="fill" />
              </Link>
              <Link href="/" className="text-white">
                <LinkedinLogo size={16} weight="fill" />
              </Link>
            </p>
          </div>
          <div className='flex flex-col justify-center items-start gap-1'>
            <h1 className='text-xl font-bold m-0' >Mail</h1>
            <p className='text-sm m-0 flex justify-center items-center gap-1'><EnvelopeSimple size={16} weight="fill" /><Link href="/" className="text-white">____mail____</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer