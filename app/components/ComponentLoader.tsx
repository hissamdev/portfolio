'use client';

import { usePathname } from "next/navigation"

import Header from "../components/nav-ui/Header";
import ConstructionBar from "../components/ui/ConstructionBar";

export default function ComponentLoader() {
    
    const pathname = usePathname();
    const isMatchingPath = pathname === "/portfolio/projects";
    
    return (
        <>
            {!isMatchingPath && process.env.NODE_ENV === 'production' && <ConstructionBar />}
            {!isMatchingPath && <Header />}
        </>
    )
}