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
            <button onClick={toggleModal} className="py-3.5 bg-[#14171C] rounded-xl text-white text-[13.3px] font-bold border border-white/10 cursor-pointer">
                Free SEO Audit
            </button>

            {showModal && <CreateAccount toggleModal={toggleModal} />}
        </>
    )
}