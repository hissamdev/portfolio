"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Process() {
    const [step, setStep] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            const s = Math.min(2, Math.floor(v * 3));
            setStep(s);
        });
    }, [scrollYProgress]);

    return (
        <section ref={ref} className="py-12 h-[400vh]">
            <div className="sticky top-30">
                <div>
                    <h2 className="text-center">Process</h2>
                    <h3 className="text-center">The Workflow</h3>
                    <h4 className="text-center">High impact projects</h4>
                </div>
                <div className="pt-8 max-w-6xl mx-auto flex justify-between">
                    <div>
                        <div className="bg-black w-80 h-50"></div>
                    </div>
                    <div className="border rounded-xl w-90 overflow-hidden">
                        <div className="px-8 py-4 bg-[#F9F9F9]">top</div>
                        <div className="px-8 py-2">
                            {step === 0 && <Component text="hi" />}
                            {step === 1 && <Component text="step 2" />}
                            {step === 2 && <Component text="step 3" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Component({ text }: { text: string }) {
    return <h3>{text}</h3>;
}
