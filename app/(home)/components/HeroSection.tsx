import Link from 'next/link';
import React from 'react'
import MyButton from './MyButton';

export default function HeroSection() {
    return (
        <div className="min-h-[100vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between max-sm:py-10 "  >
            <div className="space-y-10 text-center lg:text-left fadeRight " data-aos="fade-right">
                <h1 className="text-4xl lg:text-7xl font-bold">
                   Welcome to my website 🌨<br /> {" "}
                    <span className="underline underline-offset-8 decoration-white">I<span className="text-green-500">{"'"}</span>m <span className="text-green-500">Zens</span></span>
                </h1>
                <p className="md:w-3/4 text-lg text-gray-300">
                    {"As a Fullstack developer based in Phnom Penh, Cambodia, I am deeply committed to crafting exceptional web applications that resonate with users both locally and globally. My passion for coding extends beyond mere functionality; I strive to create digital experiences that captivate and delight users, elevating their online interactions to new heights."}
                </p>

                <Link href={"mailto:some@gmail.com"} className="inline-block group">
                    <div className="duration-300 transition-all hover:rotate-6 hover:scale-110">
                        <h1 className="text-3xl font-bold group-hover:text-green-500 duration-300 transition-all">Contact Me 📪</h1>
                        <div className="w-40 h-2 bg-green-500 rounded-full ">

                        </div>
                        {/* <div className="w-40 h-2 bg-orange-700 rounded-full translate-x-2">

                        </div> */}
                    </div>
                </Link>
            </div>

            <div className="relative fadeLeft" data-aos="fade-left">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative z-10">
                    {/* <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div> */}
                </div>
                <div className="glow w-72 h-72 absolute lg:top-[10%] max-lg:top-[18%] ">

                </div>
                <div className=" absolute bottom-5 sm:bottom-14 left-0 z-20 rotate-[10deg] ">
                    <MyButton title="Hire Me👨🏻‍💻"  />
                </div>
            </div>

        </div>
    );
}
