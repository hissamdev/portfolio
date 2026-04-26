"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/app/actions/projects";
import { InferSelectModel } from "drizzle-orm";
import { blogTable, projectTable } from "@/lib/db/schema";
import { db } from "@/lib/db";

type Projects = InferSelectModel<typeof projectTable>;

export default function Projects() {
    const [category, setCategory] = useState("all");

    const projects = [
        {
            heading: "Some kinda heading",
            description: "Some sort of description goes here",
            imageAlt: "Some alt text",
            tags: [{ name: "React" }, { name: "Something Else" }],
        },
        {
            heading: "Some other kinda heading",
            description: "Some sort of description goes here",
            imageAlt: "Some alt text",
            tags: [{ name: "React" }, { name: "Something Else" }],
        },
        {
            heading: "Some kinda real heading",
            description: "Some sort of description goes here",
            imageAlt: "Some alt text",
            tags: [{ name: "React" }, { name: "Something Else" }],
        },
        {
            heading: "Some other fake kinda heading",
            description: "Some sort of description goes here",
            imageAlt: "Some alt text",
            tags: [{ name: "React" }, { name: "Something Else" }],
        },
        {
            heading: "Some other rare kinda heading",
            description: "Some sort of description goes here",
            imageAlt: "Some alt text",
            tags: [{ name: "React" }, { name: "Something Else" }],
        },
    ];

    const projectsToDisplay =
        category === "all"
            ? projects
            : projects.filter((project: any) =>
                  project.tags.some((tag: any) => tag.name === category),
              );

    return (
        <section className="px-5.25 md:px-0 pt-28 max-w-361.5 mx-auto">
            <div className="flex items-center gap-2.5">
                <div className="w-18.25 h-px bg-[#5856E6]"></div>
                <h2 className="md:text-[17.5px] md:leading-5.25 text-[#5856E6] font-bold">
                    Projects
                </h2>
            </div>
            <div className="md:flex justify-between">
                <div>
                    <h2 className="md:pt-2.25 text-[23.5px] leading-7 font-bold">
                        Previous work and projects
                    </h2>
                    <p className="md:pt-4.25 md:w-148 text-[15.75px] leading-4.75">
                        Exploring the intersection of complex engineering,
                        growth-focused SEO, and high-impact digital marketing.
                    </p>
                </div>

                <CategorySelector
                    category={category}
                    setCategory={setCategory}
                />
            </div>
            <ProjectCards projectsToDisplay={projectsToDisplay} />
        </section>
    );
}

export function ProjectCards({ projectsToDisplay }) {
    return (
        <div className="mt-15.5 project-cards grid gap-y-8 md:grid-cols-4 md:gap-x-18 md:gap-y-12">
            <AnimatePresence mode="popLayout">
                {projectsToDisplay.map((p: any, index: any) => {
                    return (
                        <motion.div
                            key={p.heading}
                            layout
                            whileHover={{
                                y: -10,
                                transition: {
                                    duration: 0.1,
                                    ease: "easeOut",
                                },
                            }}
                            className={clsx("min-h-96 shadow-lg")}
                        >
                            <div className="relative w-full h-48.75 cursor-pointer">
                                <Image
                                    alt={p.imageAlt}
                                    src="/Ahmed-Hissam-Recording-a-Resume.jpg"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="pt-6 px-4.5">
                                <div>
                                    {p.tags.map((tag: any) => (
                                        <span
                                            key={tag.name}
                                            className="py-[3.5px] px-[10.5px] gap-2.5 text-[10px] leading-3 font-bold text-[#64748B] bg-[#64748B]/10 rounded-[5.25px]"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="pt-3.5 text-[17.5px] leading-5.5 font-bold">
                                    {p.heading}
                                </h3>
                                <p className="pt-[10.5px] text-[12.25px] leading-3.75">
                                    {p.description}
                                </p>
                                <Link
                                    href={p.link ?? "/"}
                                    className="inline-flex items-center gap-1.5 mt-5.25 text-[12.25px] leading-3.75 font-bold"
                                >
                                    View Project{" "}
                                    <ArrowRight size={14} color="black" />
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

export function CategorySelector({ category, setCategory }) {
    return (
        <div className="self-end">
            <div className="p-[5.25px] flex bg-[#EFEFEF] rounded-[10.5px]">
                <span
                    onClick={() => setCategory("all")}
                    className={clsx(
                        "py-3 mr-1.25 px-4.25 text-[12.25px] leading-3.75 tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                        category === "all" &&
                            "bg-black text-white hover:text-white",
                    )}
                >
                    All
                </span>
                <span
                    onClick={() => setCategory("FullStack")}
                    className={clsx(
                        "py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                        category === "FullStack" &&
                            "bg-black text-white hover:text-white",
                    )}
                >
                    Full Stack
                </span>
                <span
                    onClick={() => setCategory("SEO")}
                    className={clsx(
                        "py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                        category === "SEO" &&
                            "bg-black text-white hover:text-white",
                    )}
                >
                    SEO
                </span>
                <span
                    onClick={() => setCategory("dm")}
                    className={clsx(
                        "py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer",
                        category === "dm" &&
                            "bg-black text-white hover:text-white",
                    )}
                >
                    Digital Marketing
                </span>
            </div>
        </div>
    );
}
