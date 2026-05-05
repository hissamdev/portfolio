import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 py-12 border-t">
            <div className="px-23.75 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-2xl">
                        Ahmed Hissam<span className="text-[#00AFA7]">.</span>
                    </h3>
                    <h4 className="pt-2">
                        Focused Development & Marketing for Growth
                    </h4>
                </div>
                <div className="flex gap-4 items-center">
                    <Github />
                    <Linkedin />
                    <Twitter />
                </div>
                <div className="flex gap-10 items-center">
                    <span className="font-bold text-2xl">© Ahmed Hissam</span>
                    <span className="font-bold text-xl">
                        All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}
