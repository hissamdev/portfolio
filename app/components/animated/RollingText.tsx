"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { duration } from "drizzle-orm/gel-core";

type Props = {
    phrases?: string[];
    interval?: number;
};

export default function RollingText({
    phrases = ["Phrase one", "Phrase two"],
    interval = 2000,
}: Props) {
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    const [showIndex, setShowIndex] = useState(0);

    useEffect(() => {
        let timer;

        timer = setInterval(() => {
            console.log("Running interval with index:", showIndex);
            setShowIndex((prev) => {
                const newVal = (prev + 1) % phrases.length;
                setCurrentPhrase(phrases[newVal]);
                return newVal;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [phrases, interval, showIndex]);
    return (
        <div className="inline-grid overflow-hidden h-[1.2em] grid-cols-1 grid-rows-1 relative align-bottom w-100">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={showIndex}
                    initial={{ y: "-100%" }}
                    animate={{
                        y: "0%",
                        transition: { duration: 0.5, ease: "easeIn" },
                    }}
                    exit={{
                        y: "100%",
                        transition: { duration: 0.5, ease: "easeIn" },
                    }}
                >
                    {currentPhrase}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
