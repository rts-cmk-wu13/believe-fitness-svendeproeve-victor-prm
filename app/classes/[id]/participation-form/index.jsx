"use client"

import ButtonPrimary from "@/components/ui/buttons/button-primary";
import ButtonSecondary from "@/components/ui/buttons/button-secondary";
import { useEffect } from "react";
import addRemoveUser from "./action";
import { useActionState } from "react";
import { toast } from "react-toastify";
import { LuCalendarPlus, LuCalendarX2, LuCalendarOff } from "react-icons/lu";



export default function ParticipationForm({ user, activity, fullyBooked, calendarConflict }) {
    const [state, formAction, isPending] = useActionState(addRemoveUser, {});

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

    const disabled = (fullyBooked || calendarConflict);
    let disabledMsg = {}
    if (disabled && calendarConflict) {
        disabledMsg = {
            label: "Double booking",
            explanation: "You've got another class that day!"
        }
    }
    if (disabled && fullyBooked) {
        disabledMsg = {
            label: "No seats left",
            explanation: "This class is full!"
        }
    }


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
                        label={disabled ? disabledMsg.label : (!userIsEnrolled ? "Sign up" : "Leave")}
                        className={"w-full max-w-130"}
                        disabled={disabled}
                        explanation={disabled && disabledMsg.explanation}
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
