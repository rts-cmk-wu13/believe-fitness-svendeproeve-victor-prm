"use client"

import ButtonMenu from "@/components/ui/buttons/button-menu"
import { LuMenu } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MenuOverlay from "./menu-overlay";

export default function NavHeader() {
    const [toggle, setToggle] = useState(false)
    const [toggleInitialized, setToggleInitiatoggleInitialized] = useState(false)
    const [scrollThreshold, setScrollThreshold] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrollThreshold(window.pageYOffset > 56)
            );
        }
    }, []);

    const handleToggle = () => {
        setToggle(!toggle)
        !toggleInitialized && setToggleInitiatoggleInitialized(true)
    }

    const handleBack = () => {
        router.back() || router.push('/') 
    }

    const router = useRouter();
    console.log(router)
    let title = usePathname();

    switch (title) {
        case "/":
            title = "home";
            break;
        case "/classes":
            title = "popular classes";
            break;
    }

    const isHome = title === "home";

    /*  console.log(title) */

    return (
        <header className={`fixed w-screen left-1/2 -translate-x-1/2 z-100 transition-colors duration-300 ${toggle ? "h-screen" : "h-fit"} ${scrollThreshold ? "bg-fit-ff/10 backdrop-blur-3xl" : "bg-black/0 backdrop-blur-none"}`}>
            <nav className={`relative flex mx-auto w-full container items-center py-2 p-3  max-w-[1360]`}>
                {/* Only show button and title on pages that aren't the landing page */}
                {!isHome &&
                    <div className="flex items-center gap-4">
                        <ButtonMenu
                            className={`${scrollThreshold ? "text-fit-9e" : "text-fit-9e"}`}
                            onClick={() => handleBack()}
                        >
                            <LuArrowLeft />
                        </ButtonMenu>
                        <h1 className="text-fit-00 text-2xl">{capitalizeFirstLetter(title)}</h1>
                    </div>
                }
                {/* Menu button and menu overlay */}
                <ButtonMenu
                    onClick={() => handleToggle()}
                    className={`ml-auto ${isHome ? `${toggle || scrollThreshold ? "text-fit-9e" : "text-fit-ff"} ml-auto` : "text-fit-9e"}`}>
                    <LuMenu />
                </ButtonMenu>
                <MenuOverlay
                    toggle={toggle}
                    toggleInitialized={toggleInitialized}
                />
            </nav>
        </header>

    )
}