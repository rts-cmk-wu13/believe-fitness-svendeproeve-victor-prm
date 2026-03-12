"use client"

import InputField from "@/components/ui/input-field";
import logUserIn from "./action";
import { useActionState } from "react";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

const initialState = {
    values: {
        username: "user3",
        password: "1234",
    },
    errors: undefined
}

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(logUserIn, initialState);
    /*  console.log(state) */

    return (
        <form className="cust-form flex-col" action={formAction} noValidate>
            <InputField type="text" name="username" label="brugernavn" defaultValue={state?.values?.username} errors={state?.errors?.username} />
            <InputField type="password" name="password" label="password" defaultValue={state?.values?.password} errors={state?.errors?.password} />
            <label className="flex gap-2 cust-body-text items-center" htmlFor="remember">
                <input
                    className="size-6 cursor-pointer border-fit-9e rounded-xl bg-white checked:bg-fit-reg checked:border-fit-reg" 
                    type="checkbox"
                    name="remember"
                    value="save"
                />
                <span className="font-poppins font-semibold leading-none">Remember me</span>
            </label>

            <ButtonPrimary
                label={"Log in"}
                className="w-full"
            />
        </form>
    )
}