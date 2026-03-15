import { Code, Search, TrendingUp } from "lucide-react";
import HeroSkillHeading from "./HeroSkillHeading";

export default function HeroFeatureBoxes() {
    return(
        <div className="mt-8 md:my-[30px] flex justify-center bg-gray-50 transition-all duration-400">
            <div className="md:py-[100px] max-w-6xl w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
                <div className="child p-9 max-w-[339px] flex bg-[#F8FAFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:bg-white rounded-[21px] cursor-pointer">
                    <div className="flex flex-col gap-3.5">
                        <Code />
                        <HeroSkillHeading text="Full Stack Development" scrollPosition={1743} />
                        <p className="text-sm">Crafting high-performance, accessible, and stunning user interfaces using modern frameworks.</p>
                    </div>
                </div>

                <div className="child p-9 max-w-[339px] flex bg-[#F8FAFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:bg-white rounded-[21px] cursor-pointer">
                    <div className="flex flex-col gap-3.5">
                        <Search />
                        <HeroSkillHeading text="SEO & Visibility" scrollPosition={1743} />
                        <p className="text-sm">Crafting high-performance, accessible, and stunning user interfaces using modern frameworks.</p>
                    </div>
                </div>

                <div className="child p-9 max-w-[339px] flex bg-[#F8FAFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:bg-white rounded-[21px] cursor-pointer">
                    <div className="flex flex-col gap-3.5">
                        <TrendingUp />
                        <HeroSkillHeading text="Digital Marketing & Paid Ads" scrollPosition={1743} />
                        <p className="text-sm">Crafting high-performance, accessible, and stunning user interfaces using modern frameworks.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}