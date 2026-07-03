"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayDuration?: number;
}

export default function Typewriter({
    words = ["Test"],
    typingSpeed = 100,
    deletingSpeed = 50,
    delayDuration = 1500,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const activeWord = words[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Add next character
                setCurrentText(activeWord.substring(0, currentText.length + 1));

                // Switch to deleting mode if the word is fully typed
                if (currentText === activeWord) {
                    timer = setTimeout(
                        () => setIsDeleting(true),
                        delayDuration,
                    );
                    return;
                }
            } else {
                // Remove last character
                setCurrentText(activeWord.substring(0, currentText.length - 1));

                // Move to the next word if deletion is complete
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    return;
                }
            }

            // Dynamically calculate speed based on action
            const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
            timer = setTimeout(handleTyping, currentSpeed);
        };

        timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed,
        );

        return () => clearTimeout(timer);
    }, [
        currentText,
        isDeleting,
        currentWordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        delayDuration,
    ]);

    return (
        <span className="inline-block">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
