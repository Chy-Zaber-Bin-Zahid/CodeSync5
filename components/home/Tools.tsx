import React from 'react'
import { tools } from '@/utils/tools'

function Tools() {
  const commonStyleIcon = "bg-gray-400 p-3 rounded-full text-3xl text-white transition-all duration-300 hover:scale-125"
  const commonStyleIconParent = "flex-shrink-0 w-full flex justify-around animate-loop-scroll items-center group-hover:paused"

  return (
    <section className="w-full mq-1300:flex justify-center items-center scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765 overflow-auto" >
      <div className="w-full px-3 py-4">
        <div className='mx-auto max-w-big-screen w-full flex flex-col gap-4 justify-between items-center'>
          <div className="w-full flex flex-col gap-3 justify-center items-center" >
            <h1 >Our <span className="text-primaryText" >Tools</span></h1>
          </div>
          <div className='flex w-full overflow-hidden group h-20'>
            <div className={`${commonStyleIconParent}`}>
              {tools.map((tool) => (
                <div className={`${commonStyleIcon}`} key={tool.name}>{tool.icon}</div>
              ))}
            </div>
            <div className={`${commonStyleIconParent}`}>
              {tools.map((tool) => (
                <div className={`${commonStyleIcon}`} key={tool.name}>{tool.icon}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools