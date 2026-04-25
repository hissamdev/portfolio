import { Button } from "@/components/ui/button";
import { ChevronDown, History, Linkedin, Menu, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    return (
        <header className="h-fit">
            <div className="bg-[#4F46E5]">
                <div className="py-4 px-12 w-full mx-auto flex justify-between">
                    <div className="text-white max-w-[191.25px] w-full">
                        <Linkedin />
                    </div>

                    <div className="text-white flex overflow-hidden max-w-4xl w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_90%,transparent)]">
                        <div className="flex whitespace-nowrap marque-scroll">
                            <span className="px-4">
                                max-w-[1170px] w-full mx-auto flex items-center
                                justify-between
                            </span>
                            <span className="px-4">very random text here</span>
                            <span className="px-4">
                                max-w-[1170px] w-full mx-auto flex items-center
                                justify-between
                            </span>
                            <span className="px-4">
                                random text all over again
                            </span>

                            <span className="px-4">
                                max-w-[1170px] w-full mx-auto flex items-center
                                justify-between
                            </span>
                            <span className="px-4">very random text here</span>
                            <span className="px-4">
                                max-w-[1170px] w-full mx-auto flex items-center
                                justify-between
                            </span>
                            <span className="px-4">
                                random text all over again
                            </span>
                        </div>
                    </div>

                    <div className="text-white flex gap-2">
                        <History className="w-5" />
                        Previous Versions
                        <ChevronDown className="w-5" />
                    </div>
                </div>
                <div className="py-6 bg-white rounded-t-[45px] ">
                    <div className="max-w-[1170px] w-full mx-auto flex items-center justify-between">
                        <div className="font-bold text-lg max-w-[132.09px] w-full">
                            AH
                        </div>
                        <nav>
                            <ul className="flex gap-6">
                                <li>Home</li>
                                <li>Featured</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <div>
                            <div>
                                <Link
                                    href="/"
                                    className="px-5 py-2 bg-black text-white text-sm rounded-full"
                                >
                                    Let's Connect
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
