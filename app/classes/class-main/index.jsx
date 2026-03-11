import { fetchFromAPI } from "@/lib/dal/general"
import { shuffleArray } from "@/lib/utils"
import AppMain from "@/components/layout/app-main"
import PageSection from "@/components/layout/page-section"
import ClassItem from "./class-item"
import ClassHero from "./class-hero"

export default async function ClassMain() {
    const classes = await fetchFromAPI("/api/v1/classes")
    let shuffledClasses = shuffleArray(classes)

    return (

        <AppMain>
            <ClassHero data={shuffledClasses[0]} link={true} />
            <PageSection title="Classes for you">
                <div className="grid grid-flow-col auto-cols-[clamp(16rem,20vw,28rem)] gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory">
                    {shuffledClasses.map((cl, idx) => (idx > 0 && <ClassItem key={idx} data={cl} />))}
                </div>
            </PageSection>
        </AppMain>
    )
}