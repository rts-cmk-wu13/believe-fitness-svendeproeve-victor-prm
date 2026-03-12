"use client"

import ButtonPrimary from "@/components/ui/buttons/button-primary";
import { useEffect } from "react";
import addRemoveUser from "./action";
import { useActionState } from "react";
import { toast } from "react-toastify";


export default function ParticipationForm({ user, activity }) {
    const [state, formAction, isPending] = useActionState(addRemoveUser, {});
    //console.log(state)

    useEffect(() => {
        if (state?.success) {
            toast.success(
                userIsEnrolled
                    ? "Du er nu frameldt!"
                    : "Du er nu tilmeldt!"
            );
            refresh();
        }
    }, [state]);

    console.log(user, activity)

    const userIsEnrolled = user.classes.some(act => act.id === Number(activity.id));
    console.log(userIsEnrolled)

    return (
        <form
            action={formAction}
            className="mt-4"
        >
            <input type="hidden" name="userId" value={user.id} />
            <input type="hidden" name="activityId" value={activity.id} />
            <input
                type="hidden"
                name="isEnrolled"
                value={userIsEnrolled}
            />
            <ButtonPrimary
                label={!userIsEnrolled ? "Sign up" : "Leave"}
                className={"w-full max-w-130"}
            />
        </form>
    )
}
