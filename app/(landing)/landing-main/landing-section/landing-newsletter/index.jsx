"use client"

import LandingSection from ".."
import InputField from "@/components/ui/input-field"
import ButtonPrimary from "@/components/ui/buttons/button-primary"

import { useActionState, useEffect } from "react"
import subscribeToNewsletter from "./action"
import { toast } from "react-toastify";

const initialState = {
    values: {
        email: "urs@mail.dk",
    },
    errors: undefined
}


export default function LandingNewsletter() {
    const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);
    /* console.log("Errors", state.errors) */

    console.log("state", state)

    useEffect(() => {
        if (state?.id) {
            toast.success("Tak for din tilmelding")
        }
    }, [state?.id]);


    return (
        <LandingSection title="Sign up for our newsletter">
            <p className="cust-body-text">Sign up to receive the latest news and announcements from Believe Fitness.</p>
            <form className="cust-form" action={formAction} noValidate>
                <InputField type="email" name="email" label="email" defaultValue={state?.values?.email} errors={state?.errors?.email} />
                <ButtonPrimary
                    label={isPending ? "Please wait..." : "Sign up"}
                    disabled={isPending}
                />



            </form>
        </LandingSection>
    )
}
