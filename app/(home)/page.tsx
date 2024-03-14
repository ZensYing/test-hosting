import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
export default function page() {
  return (
   
    <div className="min-h-screen  relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg">
      <div className=" absolute w-[80%] mx-auto px-5  z-20 top-[0%] max-sm:w-full max-sm:-mt-5">
        <Boxes className="opacity-50"/>
        <nav className={cn("relative z-20")}> 
          <Navbar  />
          <HeroSection />
        </nav>
      </div>
    </div>
  );
}
