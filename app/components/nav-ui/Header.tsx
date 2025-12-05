'use client';

import Link from "next/link";
import HeaderServicesMenu from "./ServicesMenu";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const getCurrentLink = (path: string) => {
        return pathname === path ? "text-cyan-400" : "text-white";
    };

    return (
        <header className="h-[26px] md:h-14 w-full flex justify-center items-center gap-10 bg-[#225252] sticky top-0 z-10000 xl:pr-2 lg:px-0">
            <div className="flex">
                <div className="bg-gray-200 flex justify-center items-center cursor-pointer ">
                    <img className="h-12 w-12" alt="img"/>
                </div>
                <nav className="hidden md:flex justify-center items-center text-white">
                    <ul className="flex">
                        <li><Link href="/" className={"nav-links " + getCurrentLink("/")}>Home</Link></li>
                        <li><Link href="/portfolio" className={"nav-links " + getCurrentLink("/portfolio")}>Portfolio</Link></li>
                        <HeaderServicesMenu />
                        <li><Link href="/about" className={"nav-links " + getCurrentLink("/about")}>About Us</Link></li>
                        <li><Link href="/what-we-do" className={"nav-links " + getCurrentLink("/what-we-do")}>What we do</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="download-resume">
                <a className="inline-block text-white font-bold leading-[19px] text-[16px] px-[34px] py-[9.5px] bg-[#5174FF] hover:bg-[#5174FF]/90 cursor-pointer rounded-[6px]"
                    href="Ahmed-Hissam-Resume.pdf"
                    download="Ahmed Hissam Resume.pdf"
                >Download Resume</a>
            </div>
        </header>
    )
}