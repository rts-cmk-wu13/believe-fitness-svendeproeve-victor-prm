"use client"
import ButtonPrimary from "@/components/ui/buttons/button-primary"
import RatingMeter from "../../class-item/rating-meter"
import saveRating from "./action";
import { useRef } from "react";
import { useState } from "react"
import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function RatingPopover({ user, activity }) {
    if (!user) return null;
    const popoverElm = useRef();

    const [state, formAction, isPending] = useActionState(saveRating, {});
    const [rating, setRating] = useState(null)

    const handleChange = (e) => {
        setRating(e.target.value)
    }

    useEffect(() => {
        if (state?.success) {
            toast.success("Thank you for your vote!")
            popoverElm?.current.hidePopover()
        }
    }, [state]);


    return (
        <div
            popover="auto"
            id="ratings-popover"
            className=" bg-red-fit-ff w-80 m-auto p-5 rounded-2xl backdrop:bg-black/80"
            ref={popoverElm}
        >
            <form action={formAction} className="flex flex-col gap-4 items-center" noValidate>
                <h3 className="font-poppins font-semibold mb-2">
                    {`Rate ${activity.className}`}
                </h3>
                <RatingMeter enlarge={true} rating={rating} className="flex-col gap-4" />
                <input type="range"
                    min="0"
                    max="5"
                    step={0.5}
                    defaultValue={null}
                    onChange={(e) => handleChange(e)}
                    name="rating"
                    className="accent-fit-reg"
                />
                <input type="hidden" name="userId" value={user.id} />
                <input type="hidden" name="classId" value={activity.id} />
                <ButtonPrimary
                    label={isPending ? "Please wait..." : "Save Rating"}
                    disabled={!rating}
                    className={"mt-3"}
                />
            </form>
        </div>
    )
}