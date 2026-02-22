import { Award, CircleCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section className="px-[21px] md:px-0 pt-8 md:pt-[119px] max-w-6xl mx-auto">
            <div className="about-alignment md:flex justify-between">
                <div className="about-left">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 md:w-[73px] h-px bg-[#5856E6]"></div>
                        <h2 className="text-[17.5px] leading-[21px] text-[#5856E6] font-bold">About me</h2>
                    </div>
                    <h3 className="pt-[17px] text-xl md:text-[23.5px] md:leading-7 font-bold">Full Stack Developer, SEO Specialist, Digital Marketer</h3>
                    <p className="pt-[17px] md:w-[528px] text-md md:text-[15.75px] md:leading-[19px]">
                        I'm Ahmed Hissam, a World-Class Senior Full-Stack Engineer based in New York City. My journey in tech started over 8 years ago, driven by a fascination with how code can build entirely new digital worlds.
                        <br /> <br />
                        Currently serving as a Lead Developer at a top-tier tech firm, I focus on architecting robust systems that prioritize clean code and exceptional UI/UX design. I've had the privilege of architecting a fintech platform handling over $1B in transactions and maintaining open-source libraries with thousands of stars.
                        <br /> <br />
                        Beyond the screen, you'll find me behind a camera lens capturing cityscapes, strategizing over a chess board, or tinkering with micro-SaaS projects. I believe the best software is built at the intersection of logic and creativity.
                    </p>

                    <div className="pt-8 md:pt-[62px] w-full grid grid-cols-1 md:grid-cols-2 gap-y-[17px] gap-x-[27px]">
                        <div className="pl-[17px] h-[45px] flex-1 flex items-center gap-2.5 bg-[#F4F8FD] rounded-[10.5px] ">
                            <CircleCheck size={15} color="green" />
                            <span className="text-[12.25px] leading-[15px] font-bold">Clean & Maintainable Code</span>
                        </div>

                        <div className="pl-[17px] h-[45px] flex-1 flex items-center gap-2.5 bg-[#F4F8FD] rounded-[10.5px] ">
                            <CircleCheck size={15} color="green" />
                            <span className="text-[12.25px] leading-[15px] font-bold">Clean & Maintainable Code</span>
                        </div>

                        <div className="pl-[17px] h-[45px] flex-1 flex items-center gap-2.5 bg-[#F4F8FD] rounded-[10.5px] ">
                            <CircleCheck size={15} color="green" />
                            <span className="text-[12.25px] leading-[15px] font-bold">Clean & Maintainable Code</span>
                        </div>

                        <div className="pl-[17px] h-[45px] flex-1 flex items-center gap-2.5 bg-[#F4F8FD] rounded-[10.5px] ">
                            <CircleCheck size={15} color="green" />
                            <span className="text-[12.25px] leading-[15px] font-bold">Clean & Maintainable Code</span>
                        </div>
                    </div>
                </div>

                <div className="about-right relative z-10">
                    <div className="relative z-20 p-2.5 bg-white shadow-2xl rounded-[9px]">
                        <div className="relative z-30 md:w-[360px] h-[318px] rounded-[9px] overflow-hidden object-[70%_center] ">
                            <Image
                                src="/Ahmed-Hissam-Recording-a-Resume.jpg"
                                alt="Ahmed Hissam recording a resume video for Full Stack, SEO and Digital Marketing positions."
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-10 right-10 z-40 w-[106px] h-[124px] flex flex-col justify-center items-center gap-[9px] bg-[#4F46E5] rounded-2xl">
                            <Award size={40} color="white" />
                            <span className="text-[18.5px] font-bold text-white">1+ YoE</span>
                        </div>
                    </div>
                    <div className="absolute -top-4 -left-2 md:w-[394px] h-[371px] -rotate-6 border-2 border-dashed border-[#BFBFBF]/40 z-0 rounded-2xl" />
                </div>
            </div>
        </section>
    )
}