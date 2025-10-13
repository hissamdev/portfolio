'use client';

import Link from "next/link";
import HeaderServicesMenu from "./ServicesMenu";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const getCurrentLink = (path) => {
        return pathname === path ? "text-cyan-400" : "text-white";
    };

    return (
        <header className="h-20 px-82 flex justify-start items-center bg-gray-900 relative">
            <div className="bg-gray-50 flex justify-center items-center cursor-pointer ">
                <img className="h-12 w-12" alt="img"/>
            </div>

            <nav className="flex justify-center text-white">
                <ul className="flex">
                    <li><Link href="/" className={"nav-links " + getCurrentLink("/")}>Home</Link></li>
                    <HeaderServicesMenu />
                    <li><Link href="/about" className={"nav-links " + getCurrentLink("/about")}>About Us</Link></li>
                    <li><Link href="/what-we-do" className={"nav-links " + getCurrentLink("/what-we-do")}>What we do</Link></li>
                    <li><Link href="/portfolio" className={"nav-links " + getCurrentLink("/portfolio")}>Portfolio</Link></li>
                </ul>
            </nav>
        </header>
    )
}