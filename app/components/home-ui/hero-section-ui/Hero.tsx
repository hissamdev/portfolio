import { ArrowRight, Check, Code, Github, Linkedin, Search, TrendingUp } from "lucide-react";
import HeroAuditButton from "./HeroAuditButton";
import { RefObject } from "react";
import HeroSkillHeading from "./HeroSkillHeading";
import { motion } from "framer-motion";
import EntryAnimation from "../../framer-motion-components/EntryAnimation";
import StaggerWrapper from "../../framer-motion-components/StaggerWrapper";
import HeroCTA from "./HeroCTA";
import HeroRight from "./HeroRight";

export default function Hero() {
    return (
            <section className="hero-section pt-[100px] md:pt-[180px] max-w-6xl mx-auto bg-white">
                <div className="hero-container flex justify-between">
                    <StaggerWrapper>
                        <div className="hero-left px-[21px] md:p-0">
                            <div>
                                <EntryAnimation>
                                    <div className="flex items-center gap-2 md:gap-2.5">
                                        <div className="w-5 md:w-10.5 h-px bg-[#5856E6] "></div>
                                        <span className="text-[#5856E6] text-sm md:text-[17.5px] md:font-bold">Hey, I&apos;m Ahmed Hissam</span>
                                    </div>
                                </EntryAnimation>
                                <EntryAnimation>
                                    <h1
                                        className="pt-3 md:pt-[23px] font-bold">
                                        <span className="text-5xl md:text-[81px] md:leading-[98px]">Full Stack</span><br />
                                        <span className="text-5xl md:text-[77px] md:leading-[93px] bg-[linear-gradient(90deg,#524AE6,#808AF7)] bg-clip-text text-transparent">Engineer</span>
                                    </h1>
                                </EntryAnimation>
                                <EntryAnimation>
                                    <h2 className="pt-4 text-md md:pt-5 md:text-[27px] md:leading-[33px] font-bold">
                                        Results-driven software engineering
                                    </h2>
                                </EntryAnimation>
                                <EntryAnimation>
                                    <p className="pt-2 md:pt-[13px] md:w-[441px] text-[#606060] md:text-[17.5px] md:font-bold ">
                                        I shape experiences with full stack development for small to medium businesses. Explore my portfolio to discover more about my services ranging from monthly maintenance to building entire websites tailored to your needs.
                                    </p>
                                </EntryAnimation>
                            </div>
                            <div className="pt-4 md:pt-[30px] flex flex-col md:flex-row gap-4 md:gap-7.5">
                                <HeroCTA>Get in Touch</HeroCTA>
                                <HeroAuditButton />
                            </div>
                            <div className="pt-[26px] flex justify-center md:justify-start items-center gap-3 md:gap-[18px]">
                                <div className="flex gap-2 md:gap-[15px]">
                                    <Github color="#94A3B8" />
                                    <Linkedin color="#94A3B8" />
                                </div>
                                <div className="w-[41px] h-px bg-[#94A3B8]"></div>
                                <span className="text-[15px] leading-[18px] text-[#94A3B8] font-bold">View Profiles</span>
                            </div>
                        </div>
                    </StaggerWrapper>

                    <HeroRight />
                </div>
            </section>
    )
}