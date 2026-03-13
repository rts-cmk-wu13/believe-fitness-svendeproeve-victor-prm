import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { formattedClassTime } from "@/lib/utils";
import { LuArrowRight } from "react-icons/lu";
import LeaveForm from "./leave-form";
import { getSession } from "@/lib/dal/session";
import ParticipantCount from "../../classes/[id]/participant-count";
import { fetchFromAPI } from "@/lib/dal/general";


export default async function CalendarItem({ ...props }) {
    const u = await getSession();
    const d = await fetchFromAPI(`/api/v1/classes/${props.data.id}`)

    console.log(d)


    return (
        <article className="max-w-sm flex flex-col gap-3 p-5 rounded-4xl border border-black">
            <hgroup className="flex justify-between items-center">
                <h3 className="font-semibold text-xl line-clamp-1">
                    {d.className}
                </h3>
                <ParticipantCount data={d} />
            </hgroup>
            <p>{formattedClassTime(d.classDay, d.classTime)}</p>

            <div className="flex w-full items-center gap-2 justify-between">
                <ButtonPrimary
                    label="Show class"
                    icon={<LuArrowRight />}
                    type="link"
                    href={`/classes/${d.id}`}
                />
                <LeaveForm user={u} activity={d} />
            </div>
        </article>
    )
}