import { fetchFromAPI } from "@/lib/dal/general"
import AppMain from "@/components/layout/app-main"
import PageSection from "@/components/layout/page-section"
import CardList from "@/components/ui/card-list"
import ClassItem from "@/app/classes/class-main/class-item"

import SearchBar from "./search-bar"




export default async function SearchMain() {
    const classes = await fetchFromAPI("/api/v1/classes")
    const trainers = await fetchFromAPI("/api/v1/trainers")

    console.log(trainers)

    return (
        <AppMain>
            <PageSection className="pb-0">
                <SearchBar />
            </PageSection>
            <PageSection title="Popular Classes">
                <CardList variant="horizontal">
                    {classes.map((cl, idx) => (<ClassItem key={idx} data={cl} />))}
                </CardList>
            </PageSection>
            <PageSection title="Popular Trainers">
                Hello
            </PageSection>
        </AppMain>
    )
}