'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"

import Header from "./nav-ui/Header/Header";

export default function ComponentLoader() {
    const pathname = usePathname();
    const isMatchingPath = pathname === "/projects";

    const [showConstructionBar, setShowConstructionBar] = useState(true)

    return (
        <>
            {/*}
            { //!isMatchingPath &&
            process.env.NODE_ENV === "production" &&
            showConstructionBar &&
            <ConstructionBar closeBar={() => {setShowConstructionBar(false)}} />} */}

            {/* {!isMatchingPath && <Header />} */}
        </>
    )
}