import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <>
        <footer className="hidden lg:flex flex-col items-center bg-[#332323] text-white">
            <div className="pt-[94px] lg:w-[1196px] flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-[3px]">
                        <h3 className="text-[31px] leading-[38px] font-bold">Ahmed Hissam</h3>
                        <h4 className="text-[22px] leading-[27px]">Full Stack Developer, Digital Marketer, SEO Specialist</h4>
                    </div>
                    <div className="pt-[51px] font-bold">
                        <h3 className="text-[31px] leading-[38px]">Useful Links</h3>
                        <hr className="w-[205px] bg-white h-[2px]" />
                        <ul className="pt-[7px] text-[26px] leading-[31px] space-y-3">
                            <li><Link href="/">Portfolio</Link></li>
                            <li><Link href="/cordra">Cordra</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-[25px] leading-[30px]">
                    <h3 className="font-bold">Contact Me</h3>
                    <p className="pt-[22px]">ahissam05@gmail.com</p>
                    <p className="pt-[17px]">+880 01802895911</p>
                    <p className="pt-[17px] font-bold text-[26px] leading-[31px]">Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="pt-[18px] flex flex-col items-center">
                    <div className="portfolio-social-icons pt-5.5 flex gap-[43px]">
                        <Link href="https://discord.com/" className="w-[39px] h-[39px]"><Image src="discord_logo.svg" alt="discord logo" width={39} height={39} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer"/></Link>
                        <Link href="https://discord.com/" className="w-[39px] h-[39px]"><Image src="linkedin_logo.svg" alt="linkedin logo" width={39} height={39} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
                        <Link href="https://discord.com/" className="w-[39px] h-[39px]"><Image src="github_logo.svg" alt="github logo" width={39} height={39} className="transition-opacity duration-100 hover:opacity-90 cursor-pointer" /></Link>
                    </div>

                    <div className="pt-[24px]">
                        <p className="text-[22px] leading-[27px] pb-[41px]">© Copyright 2025 Ahmed Hissam. All Rights Reserved.</p>
                    </div>
            </div>
        </footer>
        </>
    )
}