import Link from 'next/link';
import React from 'react'
import { SiFacebook, SiGithub, SiLinkedin, SiTelegram, SiTwitter } from "react-icons/si";
export default function Navbar() {
// social media links label and Icon
const socials = [
    {
        link:"https://www.linkedin.com/in/soun-soratha-71343a289/",
        label: "Linkedin",
        Icon: SiLinkedin 
    },
    {
        link:"https://github.com/ZensYing",
        label: "Github",
        Icon:SiGithub
    },
    {
        link:"https://twitter.com/aaMtLQXJRo23257",
        label: "Twitter",
        Icon: SiTwitter 
    },
    {
        link:"https://telegram.me/Soratha_Soun",
        label: "Telegram",
        Icon:SiTelegram 
    },
    {
        link:"https://www.facebook.com/zea.tha.140/",
        label:"Facebook",
        Icon:SiFacebook 
    }
]

  return <nav className="py-10 flex justify-between items-center sticky top-[0%] z-50">
    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-800 -rotate-2"><a href="/">ZensYing 🌐</a></h1>
    <div className="flex items-center gap-5 max-sm:gap-2">
        {socials.map((social,index)=>{
            const Icon = social.Icon;
            return <Link  href={social.link} key={index} aria-label={social.label} target="_blank">
                <Icon  className="w-5 h-5 hover:scale-125 transition-all duration-300"/>
            </Link>
        })}
    </div>
  </nav>;
}
