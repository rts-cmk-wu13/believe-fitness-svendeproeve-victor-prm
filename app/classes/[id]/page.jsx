import PageContainer from "@/components/layout/page-container";
import NavHeader from "@/components/ui/nav-header";
import Image from "next/image";
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import ClassHero from "../class-list/class-hero";
import { fetchFromAPI } from "@/lib/dal/general";
import { formattedClassTime } from "@/lib/utils";
import { notFound } from "next/navigation";
import { averageClassRating } from "@/lib/utils";


export default async function ClassDetailPage({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const d = await fetchFromAPI(`/api/v1/classes/${id}`)
    if (!d) return notFound();

    const ratings = await fetchFromAPI(`/api/v1/classes/${d.id}/ratings`)
    const currentRating = averageClassRating(ratings)

    console.log(d)

    const trainer = await fetchFromAPI(`/api/v1/trainers/${d.trainer.id}`)
    console.log(trainer)



    return (
        <PageContainer>
            <NavHeader />
            <ClassHero data={d}/>
            <section className="flex flex-col gap-8 max-w-160 px-10 pb-20">
                <hgroup>
                    <h2 className="text-2xl font-poppins font-semibold mb-2">Class Information</h2>
                    <p className="font-semibold">{formattedClassTime(d.classDay, d.classTime)}</p>
                    <p>{d.classDescription}</p>
                </hgroup>
                <hgroup>
                    <h2 className="text-2xl font-poppins font-semibold mb-2">Trainer</h2>
                    <article className="flex items-center gap-4 pr-4 rounded-2xl overflow-clip">
                        <Image
                            src={trainer.asset.url}
                            alt={`Profile image for trainer named ${trainer.trainerName}`}
                            width={1500}
                            height={1500}
                            className="size-24 object-cover rounded-2xl"
                            loading="eager"
                        />
                        <p className="font-semibold">{trainer.trainerName}</p>
                    </article>
                </hgroup>
                <ButtonPrimary
                    label="Sign up"
                    className="w-full"
                />
            </section>

        </PageContainer>
    )
}