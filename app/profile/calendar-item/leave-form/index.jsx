"use client"

import ButtonSecondary from "@/components/ui/buttons/button-secondary";
import { LuCalendarX2 } from "react-icons/lu";
import { useEffect } from "react";
import addRemoveUser from "@/app/classes/[id]/participation-form/action";
import { useActionState } from "react";
import { toast } from "react-toastify";

export default function LeaveForm({ user, activity }) {
    const [state, formAction, isPending] = useActionState(addRemoveUser, {});

    useEffect(() => {
        if (state?.success) {
            toast.success("You've left the class!");
        }
    }, [state]);

    return (
        <form action={formAction}>
            <input type="hidden" name="userId" value={user.id} />
            <input type="hidden" name="activityId" value={activity.id} />
            <input type="hidden" name="isEnrolled" value={true} />
            <ButtonSecondary
                icon={<LuCalendarX2 />}
            />
        </form>
    )
}