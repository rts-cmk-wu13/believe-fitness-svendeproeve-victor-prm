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
import { getSession } from "@/lib/dal/session";

export default function NavHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [toggleInitialized, setToggleInitiatoggleInitialized] = useState(false)
    const [scrollThreshold, setScrollThreshold] = useState(false);
    const router = useRouter();
    const path = usePathname();

    let title;
    let atHome;
    let atClasses;

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrollThreshold(window.pageYOffset > 56)
            );
        }
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const u = await getSession()
            setIsLoggedIn(u);
        };

        fetchUser();
    }, []);

    const handleToggle = () => {
        setToggle(!toggle)
        !toggleInitialized && setToggleInitiatoggleInitialized(true)
    }

    const handleBack = () => {
        router.back() || router.push('/')
    }

    if (path === "/") {
        title = "Home";
        atHome = true;
    }
    if (path === "/search") {
        title = "Search";
    }
    if (path === "/profile") {
        title = "My Profile";
    }
    else if (path.startsWith("/classes/")) {
        title = undefined
        atClasses = true;
    }
    else if (path.startsWith("/classes")) {
        title = "Popular classes"
        atClasses = true;
    }

    return (
        <header className={`fixed w-screen left-1/2 -translate-x-1/2 z-100 transition-colors duration-300  max-w-[1360] ${toggle ? "h-screen" : "h-fit"} ${scrollThreshold ? "bg-fit-ff/33 backdrop-blur-3xl" : "bg-black/0 backdrop-blur-none"}`}>
            <nav className={`relative flex mx-auto w-full container items-center py-2 p-3`}>
                {/* Only show button and title on pages that aren't the landing page */}
                {(!toggle && !atHome) &&
                    <div className="flex items-center gap-4">
                        <ButtonMenu
                            className={`${atClasses || atHome ? "text-fit-reg" : "text-fit-9e"}`}
                            onClick={() => handleBack()}
                        >
                            <LuArrowLeft />
                        </ButtonMenu>
                        {title &&
                            <h1 className={`font-poppins font-medium text-2xl drop-shadow-sm drop-shadow-fit-00/25 ${atClasses || atHome ? "text-fit-reg" : "text-fit-00"}`}>{capitalizeFirstLetter(title)}</h1>
                        }
                    </div>
                }
                {/* Menu button and menu overlay */}
                <ButtonMenu
                    onClick={() => handleToggle()}
                    className={`ml-auto ${toggle ? "text-fit-00" : atClasses || atHome ? "text-fit-reg" : "text-fit-9e"}`}
                >
                    <LuMenu />
                </ButtonMenu>
                <MenuOverlay
                    toggle={toggle}
                    toggleInitialized={toggleInitialized}
                    isLoggedIn={isLoggedIn}
                />
            </nav>
        </header>

    )
}