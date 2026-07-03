import { Linkedin, MoveUpRight } from "lucide-react";
import Image from "next/image";
import CircleCTA from "../../ui/CircleCTA";

export default function Hero() {
    return (
        <section className="h-fit md:h-screen">
            <div className="px-3">
                <h1 className="text-5xl leading-14 md:leading-normal sm:text-[167.75px] font-bold md:text-center font-urbanist ">
                    Ahmed Hissam
                </h1>

                <div className="mt-3 md:mt-8 max-w-7xl mx-auto flex flex-col-reverse items-center md:flex-row gap-10 md:gap-30">
                    <div className="-translate-x-2 md:translate-x-0">
                        <div className="relative w-70 md:w-80 aspect-square group -rotate-5 hover:rotate-0 duration-300">
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
                            <h2 className="text-lg md:text-3xl font-medium">
                                I'm Dynamic Text
                            </h2>
                            <p className="mt-2 md:mt-4 md:text-2xl text-[#666666] max-w-201.5">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It h
                            </p>
                        </div>
                        <div className="relative mt-5 md:mt-15 flex flex-col md:flex-row justify-between">
                            <div className="py-2 pl-6 border-l h-fit">
                                <span className="md:text-xl uppercase">
                                    Follow Me
                                </span>
                                <div className="flex gap-4 mt-2">
                                    <Linkedin />
                                </div>
                            </div>

                            <CircleCTA />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
