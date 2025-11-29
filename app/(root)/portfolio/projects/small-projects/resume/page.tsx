"use client";
import { useState } from "react";

export default function Resume() {
    

    return (
        <>
            <div className="view-container w-full h-screen bg-gray-800 flex justify-center items-start">
                <div className="resume-container h-[700px] w-[600px] border mt-16">
                    <div className="resume-content-container mx-4">
                        <h1 className="text-center pt-8 pb-4 text-3xl">Resume</h1>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[18px] ">General Information</h2>
                                <button className="text-[13px] border px-4 cursor-pointer">Edit</button>
                            </div>
                            <hr />
                        </div>
                        <div className="mt-2 pl-2">
                            <p>Name: </p>
                            <p>Email: </p>
                            <p>Title: </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}