"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["10% start", "end end"],
    });
    const springY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const STEP_COUNT = 5;

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            console.log("Progress: ", v);
            const s = Math.min(5, Math.ceil(v * 5));
            console.log(s);
            setStep(s);
        });
    }, [scrollYProgress]);

    return (
        <section className="relative">
            <div ref={ref} className="relative h-1000">
                <div className="sticky top-40">
                    <div>
                        <h2 className="text-center text-xl font-bold font-urbanist uppercase tracking-widest text-blue-400">
                            Process
                        </h2>
                        <h3 className="mt-3 text-center text-4xl font-bold ">
                            The Workflow
                        </h3>
                        <h4 className="mt-3 text-center text-xl">
                            High impact projects
                        </h4>
                    </div>
                    <div>
                        <div className="pt-8 max-w-6xl mx-auto flex justify-between">
                            {/* LEFT IMAGE (kept your structure) */}
                            <div>
                                {step <= 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ amount: 0.5 }}
                                        // animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-black w-80 h-50"
                                    />
                                )}
                                {step >= 2 && step <= 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ amount: 0.5 }}
                                        // animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-gray-300 w-80 h-50"
                                    />
                                )}
                                {step >= 4 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ amount: 0.5 }}
                                        // animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-pink-300 w-80 h-50"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col gap-6 h-110">
                                {step <= 1 && (
                                    <StepBoxes
                                        top="Step 1 Assurance Guaranteed"
                                        text="Receive regular progress updates depending on project type, don't wait for months to hear back"
                                    />
                                )}
                                {step === 1 && (
                                    <StepBoxes
                                        top="Step 2"
                                        text="Receive regular progress updates depending on project type, don't wait for months to hear back"
                                    />
                                )}
                                {step >= 2 && step <= 3 && (
                                    <StepBoxes
                                        top="Step 3"
                                        text="Receive regular progress updates depending on project type, don't wait for months to hear back"
                                    />
                                )}
                                {step === 3 && (
                                    <StepBoxes
                                        top="Step 4"
                                        text="Receive regular progress updates depending on project type, don't wait for months to hear back"
                                    />
                                )}
                                {step >= 4 && step <= 5 && (
                                    <StepBoxes
                                        top="Step 5"
                                        text="Receive regular progress updates depending on project type, don't wait for months to hear back"
                                    />
                                )}
                                {step === 5 && (
                                    <StepBoxes
                                        top="Step 6"
                                        text="Receive regular progress updates depending on project type, don't wait for months to hear back"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="py-1 px-4 m-4 border rounded-lg">
                            <motion.div
                                className="w-full h-2 rounded-lg"
                                style={{
                                    scaleX: springY,
                                    originX: 0,
                                    backgroundColor: "#ff0088",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function StepBoxes({ top, text }: { top: string; text: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="border rounded-xl w-90 min-h-45 overflow-hidden"
        >
            <h3 className="px-8 py-4 bg-black/5">{top}</h3>
            <p className="px-8 py-2">{text}</p>
        </motion.div>
    );
}
