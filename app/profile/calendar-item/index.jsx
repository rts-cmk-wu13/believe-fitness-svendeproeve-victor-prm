import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { formattedClassTime } from "@/lib/utils";
import { HiUsers } from "react-icons/hi2";
import { LuArrowRight } from "react-icons/lu";
import LeaveForm from "./leave-form";
import { getSession } from "@/lib/dal/session";


export default async function CalendarItem({ ...props }) {
    const u = await getSession();
    const d = props.data;

    return (
        <article className="max-w-sm flex flex-col gap-3 p-5 rounded-4xl border border-black">
            <hgroup className="flex justify-between items-center">
                <h3 className="font-semibold text-xl line-clamp-1">
                    {d.className}
                </h3>
                <div className="flex gap-2 shrink-0">
                    <p className="text-base font-semibold">
                        <span className="text-fit-9e">{d.Roster.length || 0}</span>
                        <span > | {d.maxParticipants}</span>
                    </p>
                    <HiUsers className="size-6" />
                </div>
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