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
import { getSession } from "@/lib/dal/session";
import ParticipantCount from "./participant-count";



export default async function ClassDetailPage({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const d = await fetchFromAPI(`/api/v1/classes/${id}`)
    if (!d) return notFound();

    console.log(d)

    const user = await getSession();
    const trainer = await fetchFromAPI(`/api/v1/trainers/${d.trainer.id}`)

    //Check if user already has classes this day
    const otherClasses = user && user.classes ? user.classes.filter(cl => cl.id != id) : false;
    const calenderConflict = otherClasses ? otherClasses.some(cl => String(cl.classDay).toLowerCase() === String(d.classDay).toLowerCase()) : false;

    //Check if class is full
    const fullyBooked = d.users ? d.users.length === d.maxParticipants : false;

    return (
        <PageContainer>
            <NavHeader />
            <AppMain>
                <ClassHero data={d} user={user} />
                <PageSection>
                    <div className="max-w-130 flex flex-col gap-1">
                        <hgroup className="flex justify-between items-center">
                            <h2 className="text-2xl font-poppins font-semibold">Class Information</h2>
                            <ParticipantCount data={d} />
                        </hgroup>
                        <p className="font-semibold">{formattedClassTime(d.classDay, d.classTime)}</p>
                        <p className="my-3">{d.classDescription}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-poppins font-semibold mb-2">Trainer</h2>
                        <ClassTrainer data={trainer} />
                    </div>
                    {
                        user && <ParticipationForm user={user} activity={d} fullyBooked={fullyBooked} calendarConflict={calenderConflict} />
                    }
                </PageSection>
            </AppMain>
        </PageContainer>
    )
}