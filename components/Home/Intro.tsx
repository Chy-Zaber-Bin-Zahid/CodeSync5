import Image from 'next/image'
import React from 'react'

function Intro() {
  return (
    <div className="h-[calc(100vh-90px)] mq-765:h-[calc(100vh-62px)] w-full flex justify-center items-center" >
      <div className="w-full px-3 py-4">
        <div className='mx-auto max-w-big-screen w-full flex gap-4 justify-between items-center'>
          <div className='flex flex-col gap-3 justify-center items-start w-[60%]' >
            <h1>Accelerate your Business Growth with Rosetech Solutions Ltd.</h1>
            <p>Stay ahead of the competition with our cutting-edge software solutions designed for your unique business needs.</p>
            <button className='bg-gray-500 text-white p-2 rounded animate-bounce' >BOOK US</button>
          </div>
          <div className='w-[40%] pl-[21px]'>
            <Image
              src="assets/home/intro.svg"
              width={450}
              height={400}
              objectFit="contain"
              alt="Introduction of IT"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro