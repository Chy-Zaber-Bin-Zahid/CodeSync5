"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { TeamMembers } from "@/utils/meet";

function Meet() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        // gsap.fromTo(
        //     "#heading",
        //     { opacity: 0, y: "-100%" },
        //     {
        //         duration: 1, opacity: 1, y: 0, delay: 0,
        //         scrollTrigger: {
        //             trigger: "#heading",
        //         }
        //     }
        // );
        // gsap.fromTo(
        //     "#image1",
        //     { opacity: 0, x: "-100%" },
        //     {
        //         duration: 1, opacity: 1, x: 0, delay: 0,
        //         scrollTrigger: {
        //             trigger: "#image1",
        //         }
        //     }
        // );
        // gsap.fromTo(
        //     "#image2",
        //     { opacity: 0, x: "100%" },
        //     {
        //         duration: 1, opacity: 1, x: 0, delay: 0,
        //         scrollTrigger: {
        //             trigger: "#image2",
        //         }
        //     }
        // );
    });

    return (
        <div className="mx-auto max-w-big-screen w-full">
            <div className="w-full text-center pb-4 pt-8">
                <h1 id="heading" className="text-4xl mq-400:text-2xl mq-875:text-3xl font-bold">
                    Meet The <span className="text-primaryText">Team</span>
                </h1>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {TeamMembers.map((info, index) => (
                    <div key={index} id={`image${index + 1}`} className="relative group overflow-hidden rounded aspect-square">
                        <Image
                            src={info.image}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                            alt={info.name}
                            blurDataURL="data:..."
                            placeholder="blur"
                            className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 min-mq-501:-translate-x-full mq-500:-translate-y-full min-mq-501:group-hover:translate-x-0 mq-500:group-hover:translate-y-0 bg-black opacity-30 w-full h-full transition-transform duration-500 z-10"></div>
                        <div className="absolute bottom-0 left-0 min-mq-501:-translate-x-full mq-500:-translate-y-full min-mq-501:group-hover:translate-x-0 mq-500:group-hover:translate-y-0 w-full h-full transition-all duration-500 z-20 flex flex-col justify-center items-center text-white">
                            <h1 className="m-0 text-[18px] mq-565:text-[16px] mq-500:text-lg font-semibold">{info.name}</h1>
                            <p className="mq-565:text-[14px] mq-500:text-[16px]">{info.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Meet