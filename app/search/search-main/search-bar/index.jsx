"use client"

import InputField from "@/components/ui/input-field";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { debounce } from "lodash";

export default function SearchBar() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        const params = new URLSearchParams(searchParams.toString())

        const debouncedQuery = debounce(() => {
            if (searchQuery.length) {
                params.set("q", searchQuery)
                router.push(pathname + '?' + params.toString())
            } else {
                router.push(pathname)
            }

        }, 300)
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