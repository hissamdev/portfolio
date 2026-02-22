
'use client'
import { motion } from "framer-motion"

export default function StaggerWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2,
                    }
                }
            }}
        >
            {children}
        </motion.div>
    )
}