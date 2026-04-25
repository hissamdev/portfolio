import {
    ArrowRight,
    Check,
    Code,
    Github,
    Linkedin,
    MoveUpRight,
    Search,
    TrendingUp,
} from "lucide-react";
import HeroAuditButton from "./HeroAuditButton";
import { RefObject } from "react";
import HeroSkillHeading from "./HeroSkillHeading";
import { motion } from "framer-motion";
import EntryAnimation from "../../framer-motion-components/EntryAnimation";
import StaggerWrapper from "../../framer-motion-components/StaggerWrapper";
import HeroCTA from "./HeroCTA";
import HeroRight from "./HeroRight";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="h-screen">
            <div className="">
                <h1 className="pt-8 text-[167.75px] font-bold text-center">
                    Ahmed Hissam
                </h1>

                <div className="mt-6 max-w-7xl mx-auto flex gap-30">
                    <div>
                        <div className="relative w-80 aspect-square group -rotate-5 hover:rotate-0 duration-300">
                            <div className="absolute inset-0 bg-purple-800 translate-4"></div>
                            <Image
                                alt="Picture of Ahmed Hissam"
                                src="/Ahmed-Hissam-Recording-a-Resume.jpg"
                                fill
                                className="object-cover duration-300"
                            />
                        </div>
                    </div>
                    <div className="">
                        {/* <div className="flex items-center gap-5">
                            <div className="h-px bg-black max-w-12 w-full"></div>
                            <span>Welcome to my Portfolio</span>
                        </div> */}
                        <div className="">
                            <h2 className="text-3xl font-medium">
                                I'm Dynamic Text
                            </h2>
                            <p className="mt-4 text-2xl text-[#666666] max-w-[806px]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It h
                            </p>
                        </div>
                        <div className="relative mt-15 flex justify-between">
                            <div className="py-2 pl-6 border-l h-fit">
                                <span className="text-xl uppercase">
                                    Follow Me
                                </span>
                                <div className="flex gap-4 mt-2">
                                    <Linkedin />
                                </div>
                            </div>

                            <div className="p-12 border bg-white rounded-full -translate-y-10 cursor-pointer">
                                <div className="bg-blue-400 aspect-square w-20 flex justify-center items-center rounded-full group">
                                    <MoveUpRight
                                        size={35}
                                        strokeWidth={1}
                                        className="text-white group-hover:rotate-45 duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
