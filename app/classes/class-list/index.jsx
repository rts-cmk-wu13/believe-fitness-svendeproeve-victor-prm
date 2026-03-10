import { fetchFromAPI } from "@/lib/dal/general"
import { shuffleArray } from "@/lib/utils"
import ClassItem from "./class-item"
import PageSection from "@/components/layout/page-section"
import ClassHero from "./class-hero"

export default async function ClassList() {
    const classes = await fetchFromAPI("/api/v1/classes")
    let shuffledClasses = shuffleArray(classes)

    return (

        <main className="flex flex-col gap-8">
            <ClassHero data={shuffledClasses[0]} link={true} />
            <div className="flex flex-col gap-2 px-5 text-xl font-poppins font-semibold">
                <h2>Classes for you</h2>
                <div className="grid grid-flow-col auto-cols-[clamp(16rem,20vw,28rem)] gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory">
                    {shuffledClasses.map((cl, idx) => (idx > 0 && <ClassItem key={idx} data={cl} />))}
                </div>
            </div>
        </main>
    )
}