import { Code, TrendingUp } from "lucide-react";

export default function HeroRight() {
    return (
        <div className="pt-10 md:pt-0 px-[21px] md:px-0 md:flex flex-col items-center gap-4 md:gap-10 hidden">
            <div className="w-full md:w-[400px] h-[213px] flex flex-col rounded-md md:rounded-2xl overflow-hidden">
                <div className="pt-[3px] px-6 w-full h-[50px] flex justify-between items-center bg-[#151D29] border-b border-slate-700/50">
                    <div className="flex gap-2">
                        <div className="w-2.5 aspect-square bg-[#FF5F56] rounded-full"></div>
                        <div className="w-2.5 aspect-square bg-[#FFBD2E] rounded-full"></div>
                        <div className="w-2.5 aspect-square bg-[#27C93F] rounded-full"></div>
                    </div>

                    <span className="text-[10px] font-bold font-mono text-slate-500">ahmed@hissam: ~</span>
                </div>
                <div className="p-6 h-full bg-[#0D1117] text-[13px] font-mono">
                    <div className="flex gap-5">
                        <div><span className="text-[13px] text-slate-500 select-none">1</span></div>
                        <div>
                            <span className="text-[13px] text-[#F472B6]">const </span>
                            <span className="text-[13px] text-[#A5B4FC]">hissam </span>
                            <span className="text-[13px] text-white">= {"{"}</span>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div><span className="text-[13px] text-slate-500 select-none">2</span></div>
                        <div className="pl-3">
                            <span className="text-[13px] text-[#A5B4FC]">title</span>
                            <span className="text-[13px] text-[#A5B4FC]">: </span>
                            <span className="text-[13px] text-white">"Full Stack Developer"</span>
                            <span className="text-[13px] text-slate-500">,</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 w-full md:w-[350px] rounded-2xl border">
                <div className="flex gap-4">
                    <div className="p-3 bg-[#059669]/10 rounded-2xl">
                        <TrendingUp color="#059669" />
                    </div>

                    <div className="flex flex-col justify-between">
                        <span className="text-[13px] font-bold text-emerald-600">Marketing</span>
                        <span className="font-bold">Digital Marketing</span>
                    </div>
                </div>

                <div className="pt-4">
                    <p className="text-slate-500 text-[12px]">Digital marketing management to improve your reach online by implementing organic and paid marketing methods.</p>
                </div>
            </div>

            <div className="p-8 w-full md:w-[380px] rounded-2xl border">
                <div className="flex gap-4">
                    <div className="p-3 bg-violet-600/10 rounded-2xl">
                        <Code color="#7c3aed" />
                    </div>

                    <div className="flex flex-col justify-between">
                        <span className="text-[13px] font-bold text-violet-600">Development</span>
                        <span className="font-bold">Modern Tech Stack</span>
                    </div>
                </div>

                <div className="pt-4">
                    <p className="text-slate-500 text-[12px]">Specializing in modern technologies like Next.js, RSC, RESTful APIs, Relational Databases etc. to build performant applications. </p>
                </div>
            </div>
        </div>
    )
}