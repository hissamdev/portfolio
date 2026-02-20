import { RefObject } from "react";

export default function Projects() {
    return (
        <section className="pt-[112px] max-w-6xl m-auto h-900">
            <div className="flex items-center gap-2.5">
                <div className="w-[73px] h-px bg-[#5856E6]"></div>
                <h2 className="md:text-[17.5px] md:leading-[21px] text-[#5856E6] font-bold">Skills</h2>
            </div>
            <div className="flex justify-between">
                <div>
                    <h2 className="md:pt-[9px] text-[23.5px] leading-[28px] font-bold">Previous work and projects</h2>
                    <p className="md:pt-[17px] md:w-[592px] text-[15.75px] leading-[19px]">Exploring the intersection of complex engineering, growth-focused SEO, and high-impact digital marketing.</p>
                </div>

                <div className="self-end">
                    <div className="p-[5.25px] flex bg-[#EFEFEF] rounded-[10.5px]">
                        <span className="py-3 mr-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold bg-black text-white rounded-[7px] cursor-pointer">All</span>
                        <span className="py-3 mx-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer">Full Stack</span>
                        <span className="py-3 mx-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer">SEO</span>
                        <span className="py-3 ml-[5px] px-[17px] text-[12.25px] leading-[15px] tracking-[1.75px] font-bold hover:text-gray-600 rounded-[7px] cursor-pointer">Digital Marketing</span>
                    </div>
                </div>
            </div>
        </section>
    )
}