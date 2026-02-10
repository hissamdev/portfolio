'use client'
import { FormEvent } from "react";
import { useState } from "react";
import AuditForm from "./AuditForm";
import CodeInput from "./CodeInput";
import { motion } from "framer-motion";

export default function CreateAccount({ toggleModal }: {toggleModal: () => void}) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("")
        
        setLoading(false)
    }

    return (
        <>
            <div onClick={toggleModal} className="z-51 px-[21px] fixed inset-0 flex justify-center items-center bg-black/90">
                <div onClick={e => e.stopPropagation()} className="pt-[29px] pb-20 w-full h-fit bg-[#353535] rounded-lg text-white overflow-hidden">
                    <motion.div className="w-[200%] flex" animate={{x: submitted ? "-50%" : "0%"}} transition={{ type: 'spring', duration: 0.2 }} >
                        <div className="px-[24px] w-1/2 ">
                            <AuditForm loading={loading} setEmail={setEmail} />
                            <button onClick={() => setSubmitted(!submitted)}>Swipe</button>
                        </div>
                        <div className="px-[24px] w-1/2">
                            <button onClick={() => setSubmitted(!submitted)}>Swipe</button>
                            <CodeInput email={email} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
  );
};