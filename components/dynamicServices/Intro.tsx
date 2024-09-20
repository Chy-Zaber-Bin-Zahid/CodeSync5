import React from 'react'
import Image from "next/image";

type Service = {
    service: {
        name: string;
        slug: string;
        paraFirst: string;
        paraMiddle: string;
        description: string;
        whyUs: Array<{ point: string; description: string; }>;
        whyMatters: Array<{ point: string; description: string; }>;
    }
};


function Intro({ service }: Service) {
    return (
        <div id="servicesIntro-component" className="w-full px-3">
            <div className="mx-auto max-w-big-screen w-full flex flex-col gap-2 justify-center items-center ">
                <div className="w-full relative h-96">
                    <Image
                        src="assets/dynamicServices/services-bg.svg"
                        layout="fill"
                        objectFit="contain"
                        alt="Services Background Image"
                        className="absolute"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-2 items-center">
                    <h1 className='m-0' >{service.name}</h1>
                    <p className='m-0'>{service.paraFirst}</p>
                </div>
                <div className='w-full'>
                    <p className='m-0'>{service.paraMiddle}</p>
                </div>
            </div>
        </div>
    )
}

export default Intro