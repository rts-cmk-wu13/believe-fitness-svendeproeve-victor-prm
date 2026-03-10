import { fetchFromAPI } from "@/lib/dal/general"
import { shuffleArray } from "@/lib/utils"
import ClassItem from "./class-item"
import PageSection from "@/components/layout/page-section"

export default async function ClassList() {
    const classes = await fetchFromAPI("/api/v1/classes")
    let shuffledClasses = shuffleArray(classes)

    return (
        <main className="container mx-auto">
            <PageSection>
                <div>
                    <ClassItem data={shuffledClasses[0]} />
                </div>
                <div>
                    {shuffledClasses.map((cl, idx) => (idx > 0 && <ClassItem key={idx} data={cl} />))}
                </div>
            </PageSection>
        </main>
    )
}