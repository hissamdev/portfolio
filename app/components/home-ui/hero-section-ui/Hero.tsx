import { ArrowRight, Check, Code, Github, Linkedin, Search, TrendingUp } from "lucide-react";
import AuditButton from "../AuditButton";
import { RefObject } from "react";
import HeroSkillHeading from "./HeroSkillHeading";

export default function Hero() {

    return (
        <>
            <section className="hero-section pt-[100px] md:pt-[180px] max-w-6xl mx-auto bg-white">
                <div className="hero-container flex justify-between">
                    <div className="hero-left px-[21px] md:p-0">
                        <div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-10.5 h-[2px] bg-[#5856E6] "></div>
                                <span className="text-[#5856E6] md:text-[17.5px] md:font-bold">Hey, I&apos;m Ahmed Hissam</span>
                            </div>
                            <h1 className="md:pt-[23px] font-bold">
                                <span className="md:text-[81px] md:leading-[98px]">Full Stack</span><br />
                                <span className="md:text-[77px] md:leading-[93px] bg-[linear-gradient(90deg,#524AE6,#808AF7)] bg-clip-text text-transparent">Engineer</span>
                            </h1>
                            <h2 className="pt-5 md:text-[27px] leading-[33px] font-bold">
                                Results-driven software engineering
                            </h2>
                            <p className="pt-[13px] md:w-[441px] text-[#606060] md:text-[17.5px] md:font-bold ">
                                I shape experiences with full stack development for small to medium businesses. Explore my portfolio to discover more about my services ranging from monthly maintenance to building entire websites tailored to your needs.
                            </p>
                        </div>
                        <div className="md:pt-[30px] flex flex-col md:flex-row gap-7.5">
                            <button className="flex items-center justify-center md:gap-2.5 py-3.5 md:px-[33px] md:py-4 bg-[#4F46E5] rounded-md text-white md:text-[17.5px] md:leading-[21px] font-bold cursor-pointer">Get in Touch <ArrowRight size={21} strokeWidth={2.2} /></button>
                            <AuditButton />
                        </div>
                        <div className="pt-[26px] flex items-center gap-[18px]">
                            <div className="flex md:gap-[15px]">
                                <Github color="#94A3B8" />
                                <Linkedin color="#94A3B8" />
                            </div>
                            <div className="w-[41px] h-px bg-[#94A3B8]"></div>
                            <span className="text-[15px] leading-[18px] text-[#94A3B8] font-bold">View Profiles</span>
                        </div>
                    </div>

                    <div className="w-2 aspect-square bg-black">

                    </div>
                </div>

                <div className="wid-section pt-[149px] flex justify-between">
                    <div className="p-9 max-w-[339px] flex bg-[#F8FAFC] hover:bg-[#F3F5FF] rounded-[21px]">
                        <div className="flex flex-col gap-3.5">
                            <Code />
                            <HeroSkillHeading text="Full Stack Development" scrollPosition={1743} />
                            <p className="text-sm">Crafting high-performance, accessible, and stunning user interfaces using modern frameworks.</p>
                        </div>
                    </div>

                    <div className="p-9 max-w-[339px] flex bg-[#F8FAFC] hover:bg-[#F3F5FF] rounded-[21px]">
                        <div className="flex flex-col gap-3.5">
                            <Search />
                            <HeroSkillHeading text="SEO & Visibility" scrollPosition={1743} />
                            <p className="text-sm">Crafting high-performance, accessible, and stunning user interfaces using modern frameworks.</p>
                        </div>
                    </div>

                    <div className="p-9 max-w-[339px] flex bg-[#F8FAFC] hover:bg-[#F3F5FF] rounded-[21px]">
                        <div className="flex flex-col gap-3.5">
                            <TrendingUp />
                            <HeroSkillHeading text="Digital Marketing & Paid Ads" scrollPosition={1743} />
                            <p className="text-sm">Crafting high-performance, accessible, and stunning user interfaces using modern frameworks.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}