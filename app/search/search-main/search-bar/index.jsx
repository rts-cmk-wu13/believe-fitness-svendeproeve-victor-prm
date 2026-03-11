"use client"

import InputField from "@/components/ui/input-field";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { debounce } from "lodash";

export default function SearchBar({ ...props }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    console.log(searchParams.get("q"))

    const handleSearch = (e) => {
        const searchQuery = e.target.value;

        if (!searchQuery.length) {
            router.push(pathname)
            return;
        }

        const params = new URLSearchParams(searchParams.toString())

        const debouncedQuery = debounce(() => {
            params.set("q", searchQuery)
            router.push(pathname + '?' + params.toString())
        }, 1000)
        debouncedQuery()
    }

    return (
        <div className="cust-grid-stack items-center">
            <InputField name="search" type="search" className={"pl-12"} onChange={(e) => handleSearch(e)} defaultValue={searchParams.get("q")} />
            <span className="flex items-center justify-center size-12 z-10 pointer-events-none">
                <LuSearch />
            </span>
        </div>
    )
}