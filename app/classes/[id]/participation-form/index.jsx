"use client"

import ButtonPrimary from "@/components/ui/buttons/button-primary";
import ButtonSecondary from "@/components/ui/buttons/button-secondary";
import { useEffect } from "react";
import addRemoveUser from "./action";
import { useActionState } from "react";
import { toast } from "react-toastify";
import { LuCalendarPlus, LuCalendarX2, LuCalendarOff } from "react-icons/lu";



export default function ParticipationForm({ user, activity, disabled }) {
    const [state, formAction, isPending] = useActionState(addRemoveUser, {});
    console.log(state)

    const userIsEnrolled = user.classes.some(act => act.id === Number(activity.id));

    useEffect(() => {
        if (state?.success) {
            toast.success(
                !userIsEnrolled
                    ? "You've left the class!"
                    : "You've joined the class!"
            );
        }
    }, [state]);



    return (
        <form
            action={formAction}
            className="mt-4"
            noValidate
        >
            <input type="hidden" name="userId" value={user.id} />
            <input type="hidden" name="activityId" value={activity.id} />
            <input type="hidden" name="isEnrolled" value={userIsEnrolled}
            />
            {
                !userIsEnrolled ?
                    <ButtonPrimary
                        label={disabled ? ("Double booking") : (!userIsEnrolled ? "Sign up" : "Leave")}
                        className={"w-full max-w-130"}
                        disabled={disabled}
                        explanation="You've got another class that day!"
                        icon={disabled ? <LuCalendarOff /> : userIsEnrolled ? <LuCalendarX2 /> : <LuCalendarPlus />}
                    /> :
                    <ButtonSecondary
                        label={"Leave"}
                        className={"w-full max-w-130"}
                        icon={<LuCalendarX2 />}
                    />
            }
        </form>
    )
}
