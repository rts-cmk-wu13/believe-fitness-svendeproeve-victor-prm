import PageContainer from "@/components/layout/page-container";
import NavHeader from "@/components/ui/nav-header";
import ClassHero from "../class-main/class-hero";
import ClassTrainer from "../class-main/class-trainer";
import PageSection from "@/components/layout/page-section";
import AppMain from "@/components/layout/app-main";
import ParticipationForm from "./participation-form";
import { fetchFromAPI } from "@/lib/dal/general";
import { formattedClassTime } from "@/lib/utils";
import { notFound } from "next/navigation";
import { averageClassRating } from "@/lib/utils";
import { getSession } from "@/lib/dal/session";



export default async function ClassDetailPage({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const d = await fetchFromAPI(`/api/v1/classes/${id}`)
    if (!d) return notFound();

    const user = await getSession();
    const trainer = await fetchFromAPI(`/api/v1/trainers/${d.trainer.id}`)

    return (
        <PageContainer>
            <NavHeader />
            <AppMain>
                <ClassHero data={d} user={user} />
                <PageSection>
                    <hgroup>
                        <h2 className="text-2xl font-poppins font-semibold mb-2">Class Information</h2>
                        <p className="font-semibold">{formattedClassTime(d.classDay, d.classTime)}</p>
                        <p>{d.classDescription}</p>
                    </hgroup>
                    <hgroup>
                        <h2 className="text-2xl font-poppins font-semibold mb-2">Trainer</h2>
                        <ClassTrainer data={trainer} />
                    </hgroup>
                    {
                        user && <ParticipationForm user={user} activity={d} />
                    }
                </PageSection>
            </AppMain>
        </PageContainer>
    )
}