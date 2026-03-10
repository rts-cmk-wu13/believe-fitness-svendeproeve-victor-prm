"use client"

import ButtonMenu from "@/components/ui/buttons/button-menu"
import { LuMenu } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function TopNav() {
    let title = usePathname();

    switch (title) {
        case "/":
            title = "home";
            break;
    }

    console.log(title)

    return (
        <nav className="flex container mx-auto h-8 w-full z-50 items-center">
            <div className="flex items-center gap-4">
                <ButtonMenu className="text-fit-ff">
                    <LuArrowLeft />
                </ButtonMenu>
                <h1 className="text-fit-ff text-2xl">{capitalizeFirstLetter(title)}</h1>
            </div>

            <ButtonMenu className="text-fit-ff ml-auto">
                <LuMenu />
            </ButtonMenu>
        </nav>
    )
}