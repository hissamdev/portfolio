'use client'
import { useState } from "react"
import CreateAccount from "../auth/CreateAccount"

export default function AuditButton() {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    return (
        <>
            <button onClick={toggleModal} className="py-3.5 md:px-8.25 md:py-4 rounded-md md:text-[17.5px] md:leading-5.25 font-bold border border-black cursor-pointer">
                Download Resume
            </button>

            {showModal && <CreateAccount toggleModal={toggleModal} />}
        </>
    )
}