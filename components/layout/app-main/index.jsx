"use client"
import { usePathname } from "next/navigation"

export default function AppMain({ ...props }) {
    const path = usePathname();
    const affectedRoutes = ["/search"]
    let addPaddingTop = true;

    if (!affectedRoutes.includes(path)) addPaddingTop = false;

    return (
        <main id="main" className={`
            text-black font-inter
            ${addPaddingTop ? "pt-14" : ""} 
            ${props.className || ""}
            `
        }>
            {props.children}
        </main>
    )
}