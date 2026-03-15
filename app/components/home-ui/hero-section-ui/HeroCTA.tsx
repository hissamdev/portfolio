'use client'
import { ArrowRight, ChevronRight, Linkedin, Mail, NotebookPen, Phone, X } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

export default function HeroCTA({ children }: { children: React.ReactNode }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="
                    flex items-center justify-center gap-1
                    py-3 font-semibold rounded-md
                    bg-[#4F46E5] text-white cursor-pointer
                    hover:bg-[#4F46E5]/90

                    md:gap-2.5 md:py-4 md:px-[33px] md:text-[17.5px] md:leading-[21px] md:font-bold
                "
            >
                {children}
                <ArrowRight size={21} strokeWidth={2.2} />
            </button>

            <Modal showModal={showModal} onClose={() => setShowModal(false)} >
                    <div className="m-auto py-10 w-[500px] h-fit px-8 bg-white rounded-3xl shadow-2xl">
                        <div className="flex justify-between gap-8">
                            <div>
                                <h2 className="text-[23px] leading-[28px] font-bold">Get in touch</h2>
                                <p className="text-sm text-slate-500 font-medium">Let’s start talking</p>
                            </div>

                            <div>
                                <button onClick={() => setShowModal(false)} className="p-2 transition-colors bg-gray-100 hover:bg-gray-200 active:bg-red-300 active:text-white rounded-lg cursor-pointer">
                                    <X size={24}/>
                                </button>
                            </div>
                        </div>

                        <div className="md:pt-4 flex flex-col md:gap-5">
                            <div className="p-5 h-fit flex justify-between items-center gap-5 border border-black/20 hover:border-indigo-600/50 rounded-md cursor-pointer transition-all group hover:bg-black/1">
                                <div className="w-12 h-12 flex justify-center items-center bg-[#0077b5] rounded-lg transition-all group-hover:scale-110"><Linkedin size={24} color="white"/></div>
                                <div className="w-[80%]">
                                        <h3 className="text-[16px] font-bold">LinkedIn</h3>
                                        <p className="text-[12px]">Connect on LinkedIn for quicker responses</p>
                                </div>
                                <ChevronRight size={18} color="black" className="transition-all group-hover:translate-x-1" />
                            </div>

                            <div className="p-5 h-fit flex justify-between items-center gap-5 border border-black/20 hover:border-indigo-600/50 rounded-md cursor-pointer transition-all group hover:bg-black/1">
                                <div className="w-12 h-12 flex justify-center items-center bg-[#00b558] rounded-lg transition-all group-hover:scale-110"><Phone size={24} color="white"/></div>
                                <div className="w-[80%]">
                                        <h3 className="text-[16px] font-bold">WhatsApp</h3>
                                        <p className="text-[12px]">Send me a text message on WhatsApp</p>
                                </div>
                                <ChevronRight size={18} color="black" className="transition-all group-hover:translate-x-1" />
                            </div>

                            <div className="p-5 h-fit flex justify-between items-center gap-5 border border-black/20 hover:border-indigo-600/50 rounded-md cursor-pointer transition-all group hover:bg-black/1">
                                <div className="w-12 h-12 flex justify-center items-center bg-[#b53900] rounded-lg transition-all group-hover:scale-110"><Mail size={24} color="white"/></div>
                                <div className="w-[80%]">
                                        <h3 className="text-[16px] font-bold">Email</h3>
                                        <p className="text-[12px]">Email me directly through Gmail or any other provider</p>
                                </div>
                                <ChevronRight size={18} color="black" className="transition-all group-hover:translate-x-1" />
                            </div>
                        </div>

                        <h2 className="md:pt-10 text-center text-slate-500 text-sm font-medium">Looking for something else?</h2>
                        <div className="md:mt-2 flex justify-center">
                            <Link href="/" className="py-3 px-6 flex items-center gap-3 text-[14px] text-indigo-600 font-bold bg-indigo-50 rounded-lg"><NotebookPen size={18} color="#4f39f6"/> Free SEO Audit</Link>
                        </div>
                    </div>
            </Modal>
        </>
    )
}