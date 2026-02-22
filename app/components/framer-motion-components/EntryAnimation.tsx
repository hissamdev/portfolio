'use client'

import { easeOut, motion } from "framer-motion";

export default function EntryAnimation({ children }: { children: React.ReactNode }) {
    
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut }
                }
            }}
        >
            {children}
        </motion.div>
    )

}