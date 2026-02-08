'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"

import Header from "./nav-ui/Header/Header";
import ConstructionBar from "../components/ui/ConstructionBar";

export default function ComponentLoader() {
    const pathname = usePathname();
    const isMatchingPath = pathname === "/projects";

    const [showConstructionBar, setShowConstructionBar] = useState(true)
    
    
    useEffect(() => {
        const syncConstructionBar = () => {
            const isHidden = document.cookie.includes("constructionHidden=true");

            setShowConstructionBar((prev) => {
                const newValue = !isHidden;
                return prev !== newValue ? newValue : prev;
            })
        }
        
        syncConstructionBar();
    }, [])

    return (
        <>
            {/*}
            { //!isMatchingPath &&
            process.env.NODE_ENV === "production" &&
            showConstructionBar &&
            <ConstructionBar closeBar={() => {setShowConstructionBar(false)}} />} */}

            {!isMatchingPath && <Header />}
        </>
    )
}