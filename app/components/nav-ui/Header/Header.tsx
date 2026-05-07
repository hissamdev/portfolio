import { Button } from "@/components/ui/button";
import { ChevronDown, History, Linkedin, Menu, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BoxAnimatedButton from "../../ui/BoxAnimatedButton";
import InteractiveSocialIcons from "./InteractiveSocialIcons";

export default function Header() {
    return (
        <header className="h-fit">
            <div className="bg-[#4F46E5]">
                <div className="px-4 md:px-12 w-full h-14 mx-auto flex justify-between">
                    <div className="text-white md:max-w-[191.25px] md:w-full flex items-center gap-6">
                        <Linkedin className="w-5" />
                        <InteractiveSocialIcons />
                    </div>

                    <div className="text-white hidden md:flex overflow-hidden max-w-4xl w-full mask-[linear-gradient(to_right,transparent,black_5%,black_90%,transparent)]">
                        <div className="flex items-center whitespace-nowrap marque-scroll">
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

                    <div className="text-sm md:text-sm text-white flex items-center gap-1.5 md:gap-2">
                        <History className="w-3.5 md:w-5" />
                        Previous Versions
                        <ChevronDown className="w-4 md:w-5" />
                    </div>
                </div>
                <div className="py-6 px-4 bg-white rounded-t-2xl md:rounded-t-[45px] ">
                    <div className="max-w-292.5 w-full mx-auto flex items-center justify-between">
                        <div className="font-bold text-lg max-w-[132.09px] w-full">
                            AH
                        </div>
                        <nav>
                            <ul className="hidden md:flex items-center gap-3">
                                <li>
                                    <BoxAnimatedButton
                                        text="Home"
                                        link="/"
                                        textSize={16}
                                    />
                                </li>
                                <li>
                                    <BoxAnimatedButton
                                        text="Featured"
                                        link="/"
                                        textSize={16}
                                    />
                                </li>
                                <li>
                                    <BoxAnimatedButton
                                        text="About"
                                        link="/"
                                        textSize={16}
                                    />
                                </li>
                                <li>
                                    <BoxAnimatedButton
                                        text="Projects"
                                        link="/"
                                        textSize={16}
                                    />
                                </li>
                                <li>
                                    <BoxAnimatedButton
                                        text="Contact"
                                        link="/"
                                        textSize={16}
                                    />
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <div>
                                <BoxAnimatedButton
                                    text="Let's Connect"
                                    link="/"
                                    textSize={16}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
