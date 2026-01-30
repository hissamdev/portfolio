import { Check } from "lucide-react";

export default function Hero() {
    return (
        <>
            <section className="hero-section pt-[140px] h-900 bg-[#0b0e14]">
                <div className="px-[21px]">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-px bg-indigo-500/50 "></div>
                            <span className="text-[#818cf8] text-[12.25px] font-medium tracking-wide ">Hey, I'm Ahmed Hissam</span>
                        </div>
                        <h1 className="pt-[18px] text-white text-[31px] leading-9 font-bold">Full Stack Engineer <br />
                            <span className="bg-[linear-gradient(90deg,#60A5FA,#A78BFA,#F472B6)] bg-clip-text text-transparent">Custom websites</span>
                        </h1>
                        <p className="pt-3.5 text-[15.75px] leading-relaxed font-medium text-[#94a3b8]">
                            Building highly performant websites that are custom made and hand coded aiming to be rich in features and functionality.</p>
                    </div>

                    <div className="">
                        <div className="my-7 py-[21px] border-y border-gray-400/20">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-3">
                                    <div className=" pr-px flex w-4 h-4 justify-center items-center rounded-full bg-white/3 border border-white/10">
                                        <Check color="#475569" size={12} strokeWidth={3} />
                                    </div>
                                    <p className="items-center text-[#64748b] text-[10.5px] leading-3.5 tracking-[1.575px] uppercase font-bold">Clean, maintable code</p>
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className=" pr-px flex w-4 h-4 justify-center items-center rounded-full bg-white/3 border border-white/10">
                                        <Check color="#475569" size={12} strokeWidth={3} />
                                    </div>
                                    <p className="items-center text-[#64748b] text-[10.5px] leading-3.5 tracking-[1.575px] uppercase font-bold">Deployment and hosting</p>
                                </li>

                                <li className="flex items-center gap-3">
                                    <div className=" pr-px flex w-4 h-4 justify-center items-center rounded-full bg-white/3 border border-white/10">
                                        <Check color="#475569" size={12} strokeWidth={3} />
                                    </div>
                                    <p className="items-center text-[#64748b] text-[10.5px] leading-3.5 tracking-[1.575px] uppercase font-bold">WordPress, Shopify & Custom</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="py-3.5 bg-[#6366f1] rounded-xl text-white text-[13.3px] font-bold">Explore Services</button>
                        <button className="py-3.5 bg-[#14171C] rounded-xl text-white text-[13.3px] font-bold border border-white/10">Free SEO Audit</button>
                    </div>
                </div>

                
            </section>
        </>
    )
}