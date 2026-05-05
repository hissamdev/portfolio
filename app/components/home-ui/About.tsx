import { Button } from "@/components/ui/button";
import { Award, CircleCheck, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="px-5.25 md:px-0 pt-8 max-w-361.5 mx-auto">
            <div className="about-alignment md:flex justify-between">
                <div className="about-left">
                    <h2 className="text-[17.5px] leading-5.25 uppercase text-[#5856E6] font-bold">
                        About me
                    </h2>
                    <h3 className="pt-4.25 text-xl md:text-[43.5px] tracking-normal font-bold">
                        Specializing in Modern Frameworks
                    </h3>
                    <p className="pt-[21.75px] md:w-175 md:text-[21.75px]">
                        I build modern web applications that are accessible and
                        trustworthy to create enjoyable experiences for users
                        and efficient problem solving for businesses and
                        founders. I built websites optimized for SEO to get
                        found on Google efficiently.
                        <br /> <br />
                        Currently, I am open to any remote international or
                        on-site local opportunities. If you're interested or
                        would like to learn more about me or my personal
                        details, feel free to{" "}
                        <Button
                            variant="link"
                            asChild
                            className="px-0 h-fit text-[20.75px] leading-4.75 font-bold cursor-pointer"
                        >
                            <Link href="/Ahmed-Hissam-Resume.pdf">
                                download it here
                            </Link>
                        </Button>
                        .
                    </p>

                    <div className="p-12 w-fit self-end border bg-white rounded-full md:translate-y-10 cursor-pointer">
                        <svg viewBox="0 0 200 200" className="absolute inset-0">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="
                                                M 100, 100
                                                m -75,0
                                                a 75,75 0 1,1 150,0
                                                a 75,75 0 1,1 -150,0
                                            "
                                />
                            </defs>
                            <text
                                fill="black"
                                fontSize="16"
                                letterSpacing="7.7"
                            >
                                <textPath href="#circlePath">
                                    HIRE ME NOW • HIRE ME NOW •
                                </textPath>
                            </text>
                        </svg>

                        <div className="bg-blue-400 aspect-square w-20 flex justify-center items-center rounded-full group">
                            <MoveUpRight
                                size={35}
                                strokeWidth={1}
                                className="text-white group-hover:rotate-45 duration-300"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="about-right relative z-10">
                        <div className="relative z-20 p-2.5 bg-white shadow-2xl rounded-[9px]">
                            <div className="relative z-30 md:w-90 h-79.5 rounded-[9px] overflow-hidden object-[70%_center] ">
                                <Image
                                    src="/Ahmed-Hissam-Recording-a-Resume.jpg"
                                    alt="Ahmed Hissam recording a resume video for Full Stack, SEO and Digital Marketing positions."
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 right-10 z-40 w-26.5 h-31 flex flex-col justify-center items-center gap-2.25 bg-[#4F46E5] rounded-2xl">
                                <Award size={40} color="white" />
                                <span className="text-[18.5px] font-bold text-white">
                                    1+ YoE
                                </span>
                            </div>
                        </div>
                        <div className="absolute -top-4 -left-2 md:w-98.5 h-92.75 -rotate-6 border-2 border-dashed border-[#BFBFBF]/40 z-0 rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
