
import ButtonPrimary from "@/components/ui/buttons/button-primary";
import ButtonSecondary from "@/components/ui/buttons/button-secondary";
import { HiUsers } from "react-icons/hi2";
import { LuExternalLink, LuCalendarX2 } from "react-icons/lu";


export default function CalendarItem({ ...props }) {
    return (
        <article className="max-w-sm flex flex-col gap-3 p-5 rounded-4xl border border-black">
            <hgroup className="flex justify-between items-center">
                <h3 className="font-semibold text-xl line-clamp-1">
                    Yoga Flow Workout
                </h3>
                <div className="flex gap-2 shrink-0">
                    <p className="text-base font-semibold">
                        <span className="text-fit-9e">6</span>
                        <span > | 12</span>
                    </p>
                    <HiUsers className="size-6" />
                </div>
            </hgroup>
            <p>Monday - 19.30</p>

            <div className="flex w-full items-center gap-2 justify-between">
                <ButtonPrimary
                    label={<span className="inline-flex gap-2 items-center">
                        <p>Show class</p>
                        <LuExternalLink className="size-5" />
                    </span>}
                    type="link"
                    href="/classes/2"
                />
                <ButtonSecondary label={<LuCalendarX2 className="size-5" />} />
            </div>
        </article>
    )
}