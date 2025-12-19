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
        <header className="h-[60px] md:h-14 w-full flex justify-center items-center gap-10 bg-[#225252] z-10000 xl:pr-2 lg:px-0">
            <div className="flex">
                <div className="bg-gray-200 flex justify-center items-center cursor-pointer rounded-[50px]">
                    <div className="h-12 w-12"></div>
                </div>
                <nav className="main-header-nav hidden md:flex justify-center items-center text-white">
                    <ul className="flex">
                        <li>
                        <div className="header-portfolio relative z-500 group">
                            <Link href="/" className={"nav-links " + getCurrentLink("/")}>Portfolio</Link>
                            <div className="hover-bridge-div absolute w-48 h-12 left-[-50] invisible group-hover:visible"></div>
                            <div className="absolute flex justify-center w-[666px] pb-[26px] bg-white border border-gray-400 left-[-100] top-13 rounded-sm
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="header-portfolio-menu-alignment  text-black flex flex-col ">
                                    <div className="pt-[26px] text-[14px] leading-[17px] font-light italic w-[558px]">
                                        <p>Full-Stack Development | Digital Marketing | SEO Specialist | WordPress Development</p>
                                    </div>

                                    <div className="flex gap-[47px]">
                                        <div className="pt-[20px] w-[329px] flex flex-col gap-1.5">
                                            <div className="border-b-[2px] border-b-[#2600FF] py-[2.5px]"><a href="/" className="text-[20px] leading-6 font-semibold hover:text-[#456AFF]">Visit Portfolio</a></div>
                                            <div>
                                                <div className="border-b-[2px] border-b-[#2600FF] py-[2.5px]">
                                                    <a href="/projects" className="text-[20px] leading-6 font-semibold hover:text-[#456AFF]">Projects</a>
                                                </div>

                                                <div className="header-projects-nested pt-[11px] pl-[15px] flex flex-col gap-1">
                                                    <a href="/projects" className="header-projects-nested hover:text-[#456AFF]">GitHub UI Clone</a>
                                                    <a href="/projects/small-projects/resume" className="header-projects-nested hover:text-[#456AFF] inline-block">Resume</a>
                                                    <a className="header-projects-nested text-gray-500">Memory Card</a>
                                                    <a className="header-projects-nested text-gray-500">Tic Tac Toe</a>
                                                </div>
                                            </div>

                                            <div className="pt-[38px]">
                                                <p className="text-[14px] leading-[17px] italic font-light ">Founder, Ahmed Hissam</p>
                                            </div>
                                        </div>
                                        <div className="pt-5 text-[14px] leading-[17px] font-light flex flex-col">
                                            <div className="h-full flex flex-col justify-between">
                                                <div>
                                                    <p className="pb-[5px] italic">Tech Stack</p>
                                                    <div className="pl-[7px]">
                                                        <p>HTML</p>
                                                        <p>CSS</p>
                                                        <p>React</p>
                                                        <p>Next JS</p>
                                                        <p>Tailwind</p>
                                                        <p>TypeScript</p>
                                                        <p>Express JS</p>
                                                        <p>PostgresSQL</p>
                                                        <p>Prisma</p>
                                                    </div>
                                                </div>

                                                <a
                                                download="Ahmed Hissam Resume.pdf"
                                                href="Ahmed-Hissam-Resume.pdf"
                                                className="inline-block mt-[19px] ml-[7px] text-[15px] leading-[18px] px-[11.5px] py-[13px] bg-[#FF9500] hover:bg-[#FF9500]/80 cursor-pointer text-white font-semibold rounded-[2px]">Download my Resume</a>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li><Link href="#full-stack-section" className={"nav-links " + getCurrentLink("/root")}>Full Stack</Link></li>
                        <li><Link href="#digital-marketing-section" className={"nav-links " + getCurrentLink("/root")}>Digital Marketing</Link></li>
                        <li><Link href="/cordra" className={"nav-links " + getCurrentLink("/cordra-studios")}>Visit Cordra</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="download-resume">
                <a className="inline-block text-white font-bold leading-[19px] text-[16px] px-[34px] py-[9.5px] bg-[#5174FF] hover:bg-[#5174FF]/90 cursor-pointer rounded-md"
                    href="Ahmed-Hissam-Resume.pdf"
                    download="Ahmed Hissam Resume.pdf"
                >Download Resume</a>
            </div>
        </header>
    )
}