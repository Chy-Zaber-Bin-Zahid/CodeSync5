import React from 'react'
import Image from "next/image";

function page() {
    return (
        <div id="servicesIntro-component" className="w-full px-3">
            <div className="mx-auto max-w-big-screen w-full">
                <div className="w-full text-center pb-4 pt-8">
                    <h1 className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold">
                        Meet The <span className="text-primaryText">Team</span>
                    </h1>
                </div>
                <div className="w-full flex justify-center items-center mb-12">
                    <div className="relative w-fit group overflow-hidden">
                        <Image
                            src="https://media.licdn.com/dms/image/v2/D5603AQFxSOYnlvHylw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727032482264?e=1732752000&v=beta&t=m481D5h2Hp3hQ57RHIN-b1zni06wFEEMhfNyt2Pch_k"
                            width={370}
                            height={370}
                            objectFit="contain"
                            alt="Chowdhury Zaber Bin Zahid"
                            blurDataURL="data:..."
                            placeholder="blur"
                            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 -translate-x-full group-hover:translate-x-0 bg-black opacity-30 w-full h-full transition-transform duration-500 z-10"></div>
                        <div className="absolute bottom-0 left-0 -translate-x-full group-hover:translate-x-0 w-full h-full transition-all duration-500 z-20 flex flex-col justify-center items-center text-white">
                            <h1 className="text-lg font-semibold">Chowdhury Zaber Bin Zahid</h1>
                            <p>Co-Founder & CTO</p>
                        </div>
                    </div>
                    <div className="relative w-fit group overflow-hidden">
                        <Image
                            src="https://media.licdn.com/dms/image/v2/D5635AQGxlahN9j3IXQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1708025613605?e=1727636400&v=beta&t=UNCH82Jne9YSmCcvl3tYvDGuOlyLvME0EM0evn07ZzQ"
                            width={370}
                            height={370}
                            objectFit="contain"
                            alt="Walid Ibne Hasan"
                            blurDataURL="data:..."
                            placeholder="blur"
                            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 translate-x-full group-hover:translate-x-0 bg-black opacity-30 w-full h-full transition-transform duration-500 z-10"></div>
                        <div className="absolute bottom-0 left-0 translate-x-full group-hover:translate-x-0 w-full h-full transition-all duration-500 z-20 flex flex-col justify-center items-center text-white">
                            <h1 className="text-lg font-semibold">Walid Ibne Hasan</h1>
                            <p>Co-Founder & COO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page