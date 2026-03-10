"use client"

import ButtonMenu from "@/components/ui/buttons/button-menu"
import { LuMenu } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/utils";
import { useState } from "react";
import MenuOverlay from "./menu-overlay";

export default function TopNav() {
    const [toggle, setToggle] = useState(false)
    const [toggleInitialized, setToggleInitiatoggleInitialized] = useState(false)

    let title = usePathname();

    switch (title) {
        case "/":
            title = "home";
            break;
    }

    const handleToggle = () => {
        setToggle(!toggle)
        !toggleInitialized && setToggleInitiatoggleInitialized(true)
    }

    /*  console.log(title) */

    return (
        <nav className="flex container mx-auto h-8 w-full z-100 items-center">
            {
                !toggle &&
                <div className="flex items-center gap-4">
                    <ButtonMenu className={`${toggle ? "text-fit-9e" : "text-fit-ff"}`}>
                        <LuArrowLeft />
                    </ButtonMenu>
                    <h1 className="text-fit-ff text-2xl">{capitalizeFirstLetter(title)}</h1>
                </div>
            }


            <ButtonMenu onClick={() => handleToggle()} className={`${toggle ? "text-fit-9e" : "text-fit-ff"} ml-auto`}>
                <LuMenu />
            </ButtonMenu>
            <MenuOverlay 
                toggle={toggle}
                toggleInitialized={toggleInitialized}
            />
        </nav>
    )
}