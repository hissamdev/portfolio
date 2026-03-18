import { Code, Search, TrendingUp } from "lucide-react";
import HeroSkillHeading from "./HeroSkillHeading";

export default function HeroFeatureBoxes() {
    return(
        <div className="mt-20 md:mt-8 md:my-[30px] flex justify-center bg-gray-50 transition-all duration-400">
            <div className="px-[21px] md:px-0 md:py-[100px] max-w-6xl w-full flex flex-col items-center gap-4 md:gap-0 md:flex-row justify-between">
                <div className="child px-5 py-9 md:p-9 max-w-[339px] flex bg-white border md:border-none md:bg-[#F8FAFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:bg-white md:rounded-[21px] cursor-pointer">
                    <div className="flex flex-col gap-3.5">
                        <div className="flex flex-row items-center gap-4 md:flex-col md:gap-0 md:items-start md:justify-start md:gap-3.5">
                            <div className="flex bg-blue-400 p-1 md:p-0 md:bg-transparent rounded-sm"><Code /></div>
                            <HeroSkillHeading text="Full Stack Development" scrollPosition={1743} />
                        </div>
                        <p className="text-sm">I build full stack applications that scale and display high performance with overall 90+ lighthouse scores.</p>
                    </div>
                </div>

                <div className="child p-9 max-w-[339px] flex bg-[#F8FAFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:bg-white rounded-[21px] cursor-pointer">
                    <div className="flex flex-col gap-3.5">
                        <Search />
                        <HeroSkillHeading text="SEO & Visibility" scrollPosition={1743} />
                        <p className="text-sm">Improve your website's visibility on search engines through on page, off page and technical SEO.</p>
                    </div>
                </div>

                <div className="child p-9 max-w-[339px] flex bg-[#F8FAFC] transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl hover:bg-white rounded-[21px] cursor-pointer">
                    <div className="flex flex-col gap-3.5">
                        <TrendingUp />
                        <HeroSkillHeading text="Digital Marketing & Paid Ads" scrollPosition={1743} />
                        <p className="text-sm">Create and manage paid ad campaigns for attracting high intent leads towards your product.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}