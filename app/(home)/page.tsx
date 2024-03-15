import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import Skills from './components/Skills';
import { TabsDemo } from './components/TabsDemo';
import MyButton from './components/MyButton';
import { motion, AnimatePresence } from "framer-motion"

export default function page() {  

    return (
      <div className="min-h-screen overflow-y-auto  relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

        <div className=" absolute w-[80%] mx-auto px-5   z-20 top-[0%] max-sm:w-full max-sm:-mt-5" >
          {/* <Boxes className="opacity-50"/> */}
          <nav className={cn("relative z-20 h-screen ")} >
            <Navbar />
            <HeroSection />
            

            {/* <TabsDemo  /> */}
          </nav>
          <div className="min-h-screen w-full relative  ">
            <TabsDemo />
          </div>
        </div>

      </div>
    );
  }
