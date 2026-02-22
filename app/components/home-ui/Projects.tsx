'use client'
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from 'clsx';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectWithTags } from "@/app/actions/projects";

export default function Projects({ projects }: { projects: ProjectWithTags[] }) {
    const [category, setCategory] = useState("all");
    const projectsToDisplay = category === "all" ? projects : projects.filter(project => project.tags.some(tag => tag.name === category))
    
    return (
        <section className="px-[21px] md:px-0 pt-28 max-w-6xl mx-auto">
            <div className="flex items-center gap-2.5">
                <div className="w-[73px] h-px bg-[#5856E6]"></div>
                <h2 className="md:text-[17.5px] md:leading-[21px] text-[#5856E6] font-bold">Skills</h2>
            </div>
            <div className="md:flex justify-between">
                <div>
                    <h2 className="md:pt-[9px] text-[23.5px] leading-7 font-bold">Previous work and projects</h2>
                    <p className="md:pt-[17px] md:w-[592px] text-[15.75px] leading-[19px]">Exploring the intersection of complex engineering, growth-focused SEO, and high-impact digital marketing.</p>
                </div>
                
                <div className="self-end">
                    <div className="p-[5.25px] flex bg-[#EFEFEF] rounded-[10.5px]">
                        <span 
                            onClick={() => setCategory("all")}
                            className={clsx("py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                            category === "all" && "bg-black text-white hover:text-white")}>
                            All
                        </span>
                        <span 
                            onClick={() => setCategory("FullStack")}
                            className={clsx("py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                            category === "FullStack" && "bg-black text-white hover:text-white")}>
                            Full Stack
                        </span>
                        <span 
                            onClick={() => setCategory("SEO")}
                            className={clsx("py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                            category === "SEO" && "bg-black text-white hover:text-white")}>
                            SEO
                        </span>
                        <span 
                            onClick={() => setCategory("dm")}
                            className={clsx("py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                            category === "dm" && "bg-black text-white hover:text-white")}>
                            Digital Marketing
                        </span>
                    </div>
                </div>
            </div>

            <div className="pt-[62px] project-cards grid gap-y-8 md:grid-cols-[repeat(3,minmax(300,1fr))] md:gap-x-18 md:gap-y-12">
                <AnimatePresence mode="popLayout">
                    {projectsToDisplay.map((p, index) => {
                        return (
                            <motion.div
                                key={p.id}
                                layout
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.1, ease: 'easeOut' }
                                }}
                                className={clsx("py-2.5 px-[10.5px] h-96 rounded-[21px] shadow-lg")}>
                                <div className="relative w-full h-[195px] rounded-[21px] cursor-pointer">
                                    <Image
                                        alt={p.imageAlt}
                                        src="/Ahmed-Hissam-Recording-a-Resume.jpg"
                                        fill
                                        className="object-cover rounded-[21px]"
                                    />
                                </div>
                                <div className="pt-6 px-[18px]">
                                    <div>
                                        {p.tags.map((tag) => <span key={tag.name} className="py-[3.5px] px-[10.5px] gap-2.5 text-[10px] leading-3 font-bold text-[#64748B] bg-[#64748B]/10 rounded-[5.25px]">{tag.name}</span> )}
                                    </div>
                                    <h3 className="pt-3.5 text-[17.5px] leading-[22px] font-bold">{p.heading}</h3>
                                    <p className="pt-[10.5px] text-[12.25px] leading-[15px]">{p.description}</p>
                                    <Link href={p.link ?? "/"} className="inline-flex items-center gap-1.5 mt-[21px] text-[12.25px] leading-[15px] font-bold">View Project <ArrowRight size={14} color="black" /></Link>
                                </div>
                            </motion.div>
                        )
                    })
                    }
                </AnimatePresence>
            </div>
        </section>
    )
}