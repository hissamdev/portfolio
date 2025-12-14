"use client";
import { ReactHTMLElement, useState } from "react";

export default function Resume() {
    const [info, setInfo] = useState({name: "Ahmed Hissam", email: "ahissam05@gmail.com", title: "Full Stack Developer", school: "", studyTitle: "", studyDate: "", companyName: "", positionTitle: "", mainResponsibilities: "", dateFrom: "", dateTo: ""});
    const [editing, setEditing] = useState({generalSection: false, educationSection: false, workSection: false});

    function handleControlledInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }

    return (
        <>
            <div className="view-container w-full h-[calc(100vh-72px)] flex justify-center items-start">
                <div className="resume-container h-[700px] w-[600px] border mt-16">
                    <div className="resume-content-container mx-4">
                        <h1 className="text-center pt-8 pb-4 text-3xl">Resume</h1>
                        <div className="general-info-container">
                            <div className="general-info-heading">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[18px] font-semibold">General Information</h2>
                                    <button className="text-[13px] border px-4 cursor-pointer" onClick={() => setEditing(prev => ({...prev, generalSection: !prev.generalSection}))}>{editing.generalSection ? "Submit" : "Edit"}</button>
                                </div>
                                <hr className="border-t-2 mt-1" />
                            </div>
                            <div className="mt-2 pl-2">
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Name: {info.name}</p>
                                    {editing.generalSection && <input type="text" name="name" placeholder="Name" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>} {/* React Passes e automatically as argument */}
                                </div>
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Email: {info.email}</p>
                                    {editing.generalSection && <input type="text" name="email" placeholder="Email" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                                <div className="flex justify-between items-center h-[26px]">
                                    <p>Title: {info.title}</p>
                                    {editing.generalSection && <input type="text" name="title" placeholder="Title" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                            </div>
                        </div>

                        <div className="educational-info-container mt-3">
                            <div className="educational-info-heading">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[18px] font-semibold">Educational Experience</h2>
                                    <button className="text-[13px] border px-4 cursor-pointer" onClick={() => setEditing(prev => ({...prev, educationSection: !prev.educationSection}))}>{editing.educationSection ? "Submit" : "Edit"}</button>
                                </div>
                                <hr className="border-t-2 mt-1" />
                            </div>
                            <div className="mt-2 pl-2">
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>School: {info.school}</p>
                                    {editing.educationSection && <input type="text" name="school" placeholder="School Name" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>} {/* React Passes e automatically as argument */}
                                </div>
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Title of Study: {info.studyTitle}</p>
                                    {editing.educationSection && <input type="text" name="studyTitle" placeholder="Study Title" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                                <div className="flex justify-between items-center h-[26px]">
                                    <p>Date of Study: {info.studyDate}</p>
                                    {editing.educationSection && <input type="text" name="studyDate" placeholder="Study Date" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                            </div>
                        </div>

                        <div className="work-info-container mt-3">
                            <div className="work-info-heading">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[18px] font-semibold">Work Experience</h2>
                                    <button className="text-[13px] border px-4 cursor-pointer" onClick={() => setEditing(prev => ({...prev, workSection: !prev.workSection}))}>{editing.workSection ? "Submit" : "Edit"}</button>
                                </div>
                                <hr className="border-t-2 mt-1" />
                            </div>
                            <div className="mt-2 pl-2">
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Company Name: {info.companyName}</p>
                                    {editing.workSection && <input type="text" name="companyName" placeholder="Company Name" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>} {/* React Passes e automatically as argument */}
                                </div>
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Position Title: {info.positionTitle}</p>
                                    {editing.workSection && <input type="text" name="positionTitle" placeholder="Position Title" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Main Responsibilities: {info.mainResponsibilities}</p>
                                    {editing.workSection && <input type="text" name="mainResponsibilities" placeholder="Main Responsibilities" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Date From: {info.dateFrom}</p>
                                    {editing.workSection && <input type="text" name="dateFrom" placeholder="Starting Date" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                                <div className="flex justify-between items-center mb-1 h-[26px]">
                                    <p>Date To: {info.dateTo}</p>
                                    {editing.workSection && <input type="text" name="dateTo" placeholder="Ending Date" className="w-[200px] border px-2 rounded" onChange={handleControlledInput}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}