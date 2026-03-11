import { fetchFromAPI } from "@/lib/dal/general"
import AppMain from "@/components/layout/app-main"
import PageSection from "@/components/layout/page-section"
import ClassItem from "@/app/classes/class-main/class-item"

import SearchBar from "./search-bar"

import { LuSearch } from "react-icons/lu";


export default async function SearchMain() {
    const classes = await fetchFromAPI("/api/v1/classes")

    return (
        <AppMain>
            <PageSection className="pb-0">
                <SearchBar />
            </PageSection>
            <PageSection title="Popular Classes">
                Hello
            </PageSection>
             <PageSection title="Popular Classes">
                Hello
            </PageSection>
        </AppMain>
    )
}