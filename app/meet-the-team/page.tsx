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
                            src="https://scontent.fdac178-1.fna.fbcdn.net/v/t1.6435-9/106193072_2701548266770528_2108268956625106134_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=nqBcAJTkvvkQ7kNvgEy-8fg&_nc_ht=scontent.fdac178-1.fna&_nc_gid=AaARRlK28GOaMHzXSCCziW3&oh=00_AYDBN4jxUQuvwGUTS2_KhUUZCDt6TUsPS_FFbvEhqPLPCQ&oe=6717C3A4"
                            width={370}
                            height={370}
                            objectFit="contain"
                            alt="Chowdhury Zaber Bin Zahid"
                            blurDataURL="data:..."
                            placeholder="blur"
                            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 -translate-x-full group-hover:translate-x-0 bg-black opacity-70 w-full h-full text-white flex flex-col justify-center items-center transition-transform duration-300">
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
                        <div className="absolute bottom-0 left-0 translate-x-full group-hover:translate-x-0 bg-black opacity-70 w-full h-full text-white flex flex-col justify-center items-center transition-transform duration-300">
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