import { Linkedin, Twitch, Twitter } from "lucide-react";
import Image from "next/image";
import RollingText from "../../animated/RollingText";
import IconFollowCursor from "../../nav-ui/Header/IconFollowCursor";
import CircleCTA from "../../ui/CircleCTA";

export default function Hero() {
    return (
        <section className="h-fit md:h-screen">
            <div className="px-3">
                <h1 className="mt-8 md:mt-0 text-3xl text-center font-bold md:text-[170px] font-urbanist">
                    Ahmed Hissam
                </h1>

                <div className="mt-5 md:mt-8 max-w-7xl mx-auto flex flex-col-reverse items-center md:flex-row gap-10 md:gap-30">
                    <div className="md:translate-x-0 w-full md:w-fit">
                        <div className="mx-auto relative w-[90%] md:w-80 aspect-square group -rotate-5 hover:rotate-0 duration-300">
                            <div className="absolute inset-0 bg-blue-400 translate-2 md:translate-4"></div>
                            <Image
                                alt="Picture of Ahmed Hissam"
                                src="/Ahmed-Hissam-Recording-a-Resume.jpg"
                                fill
                                className="object-cover duration-300"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        {/* <div className="flex items-center gap-5">
                            <div className="h-px bg-black max-w-12 w-full"></div>
                            <span>Welcome to my Portfolio</span>
                        </div> */}
                        <div className="">
                            <h2 className="mb-4 md:mb-0 text-2xl md:text-3xl font-medium">
                                I am a{" "}
                                <RollingText
                                    phrases={[
                                        "full stack developer",
                                        "SEO expert",
                                        "Digital Marketer",
                                    ]}
                                />
                            </h2>
                            <p className="mt-2 md:mt-4 md:text-2xl text-[#666666] max-w-201.5">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book
                            </p>
                        </div>
                        <div className="relative mt-5 md:mt-15 flex flex-col md:flex-row justify-between">
                            <div className="pl-2 pt-2 md:pl-6 border-l h-fit">
                                <span className="text-sm md:text-xl uppercase">
                                    Follow Me
                                </span>
                                <div className="flex mt-2 -translate-x-4">
                                    <IconFollowCursor padding={10}>
                                        <Linkedin className="w-5 md:w-10" />
                                    </IconFollowCursor>
                                    <IconFollowCursor padding={10}>
                                        <Twitter className="w-5 md:w-10" />
                                    </IconFollowCursor>
                                    <IconFollowCursor padding={10}>
                                        <Twitch className="w-5 md:w-10" />
                                    </IconFollowCursor>
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
