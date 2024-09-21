import React from 'react'
import { tools } from '@/utils/tools'
import Image from 'next/image';

function Tools() {
  const commonStyleIcon = "p-[12px] mq-400:p-[6px] mq-565:p-[8px] mq-875:p-[10px] transition-all duration-300 hover:scale-125"
  const commonStyleIconParent = "flex-shrink-0 w-full flex justify-around animate-loop-scroll items-center group-hover:paused"

  return (
    <section className="w-full bg-gray-100 mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765 overflow-auto" >
      <div className="w-full px-3 py-4">
        <div className='mx-auto max-w-big-screen w-full flex flex-col gap-4 justify-between items-center'>
          <div className="w-full flex flex-col gap-3 justify-center items-center" >
            <div className='flex flex-col justify-center items-center gap-1'>
              <h1 className='m-0 text-4xl font-bold'>Our <span className="text-primaryText" >Tools</span></h1>
              <p className='m-0 text-lg'>Technologies we work with</p>
            </div>
          </div>
          <div className='flex w-full overflow-hidden group h-20'>
            <div className={`${commonStyleIconParent}`}>
              {tools.map((tool) => (
                <div key={tool.name} className={`${commonStyleIcon}`}>
                  <Image
                    src={tool.image}
                    width={50}
                    height={50}
                    objectFit="contain"
                    alt={tool.name}
                    blurDataURL="data:..."
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
            <div className={`${commonStyleIconParent}`}>
              {tools.map((tool) => (
                <div key={tool.name} className={`${commonStyleIcon}`}>
                  <Image
                    src={tool.image}
                    width={50}
                    height={50}
                    objectFit="contain"
                    alt={tool.name}
                    blurDataURL="data:..."
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools