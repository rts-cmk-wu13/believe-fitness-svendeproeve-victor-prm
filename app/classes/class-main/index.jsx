import { fetchFromAPI } from "@/lib/dal/general"
import { shuffleArray } from "@/lib/utils"
import AppMain from "@/components/layout/app-main"
import PageSection from "@/components/layout/page-section"
import ClassItem from "./class-item"
import ClassHero from "./class-hero"
import CardList from "@/components/ui/card-list"

export default async function ClassMain() {
    const classes = await fetchFromAPI("/api/v1/classes")
    let shuffledClasses = shuffleArray(classes)

    return (

        <AppMain>
            <ClassHero data={shuffledClasses[0]} link={true} />
            <PageSection title="Classes for you">
                <CardList variant="horizontal">
                    {shuffledClasses.map((cl, idx) => (<ClassItem key={idx} data={cl} />))}
                </CardList>
            </PageSection>
        </AppMain>
    )
}