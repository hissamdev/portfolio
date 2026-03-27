"use client"
import { usePathname } from "next/navigation";
import Header from "./Header";


export default function PathnameHeader() {
    const path = usePathname()
    const isMatching = path === "/projects"

    if (isMatching) return null
    return <Header />
}