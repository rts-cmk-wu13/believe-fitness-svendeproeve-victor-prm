import { HiUsers } from "react-icons/hi2"

export default function ParticipantCount({ ...props }) {
    const d = props.data;

    return (
        <div className="flex gap-2 shrink-0">
            <p className="text-base font-semibold">
                <span className="text-fit-9e">{d.users?.length || 0}</span>
                <span > | {d.maxParticipants}</span>
            </p>
            <HiUsers className="size-6" />
        </div>
    )
}