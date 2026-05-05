"use client";
import { useState } from "react";
import Modal from "../Modal";
import { Paperclip, RotateCw, X } from "lucide-react";
import { CircleLoader, ClipLoader, ClockLoader } from "react-spinners";
import { Spinner } from "@/components/ui/spinner";

export default function HeroAuditButton() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleDownload = () => {
        const timer = setTimeout(() => {
            const link = document.createElement("a");
            link.href = "/Ahmed-Hissam-Resume.pdf";
            link.download = "Ahmed-Hissam-Resume.pdf";
            link.click();

            setLoading(false);
        }, 2500);
    };

    return (
        <>
            <button
                onClick={() => {
                    setShowModal(true);
                    handleDownload();
                }}
                className="
                    py-3 font-semibold
                    md:py-3.5 md:px-8.25 rounded-md md:text-[17.5px] md:leading-5.25 md:font-bold box-border border border-black cursor-pointer
                    transition-colors duration-200
                    hover:bg-[#4F46E5] hover:text-white hover:border-white
                "
            >
                Download Resume
            </button>

            <Modal
                showModal={showModal}
                onClose={() => {
                    setShowModal(false);
                    setLoading(true);
                }}
            >
                <div className="m-auto p-10 w-[800px] h-fit bg-white rounded-2xl">
                    <div className="flex justify-between">
                        <div className="flex gap-5">
                            <Paperclip size={24} />
                            <div>
                                <h3 className="text-2xl font-bold">
                                    Ahmed_Hissam_Resume.pdf
                                </h3>
                                <p className="text-slate-500">
                                    Full Stack Developer
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setLoading(true);
                                }}
                                className="p-2 transition-colors bg-gray-100 hover:bg-gray-200 active:bg-red-300 active:text-white rounded-lg cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="pt-4">
                        {loading ? (
                            <div className="w-full h-[400px] flex justify-center items-center border-2 border-dashed border-slate-300 bg-slate-100 rounded-2xl">
                                <div>
                                    <div className="flex justify-center">
                                        <Spinner className="size-8" />
                                    </div>
                                    <h4 className="pt-4 text-lg text-center font-bold">
                                        Downloading Resume...
                                    </h4>
                                    <p className="text-center">
                                        Preparing your high-resolution copy
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="p-7 w-full h-fit flex flex-col justify-center items-start border-2 border-dashed border-slate-300 bg-slate-100 rounded-2xl">
                                <div className="px-8 w-full h-14 flex justify-between items-center bg-white shadow-lg rounded-lg">
                                    <div>
                                        <p className="font-medium">
                                            Download Started
                                        </p>
                                    </div>

                                    <button className="py-1.5 px-4 flex items-center gap-2 transition-all bg-purple-500 hover:bg-purple-500/90 text-white text-sm font-medium rounded-lg cursor-pointer">
                                        Save Again
                                        <RotateCw size={12} />
                                    </button>
                                </div>

                                <div className="mt-4 w-full bg-white rounded-lg">
                                    <div className="h-120">
                                        <iframe
                                            src="/Ahmed-Hissam-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
}
