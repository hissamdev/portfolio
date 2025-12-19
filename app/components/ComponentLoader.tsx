'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"

import Header from "../components/nav-ui/Header";
import ConstructionBar from "../components/ui/ConstructionBar";

export default function ComponentLoader() {
    const [showConstructionBar, setShowConstructionBar] = useState(true)
    const pathname = usePathname();
    const isMatchingPath = pathname === "/projects";
    
    useEffect(() => {
        setShowConstructionBar(!document.cookie.includes("constructionHidden=true")) // If it doesn't exist, turn false to true and show. If it exists, turn true to false and hide.
    })

    return (
        <>
            { //!isMatchingPath &&
            process.env.NODE_ENV === "development" &&
            showConstructionBar &&
            <ConstructionBar closeBar={() => {setShowConstructionBar(false)}} />}

            {!isMatchingPath && <Header />}
        </>
    )
}