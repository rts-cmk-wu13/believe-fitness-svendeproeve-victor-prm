"use client"
import { LuArrowRight } from "react-icons/lu";
import { LuRotateCw } from "react-icons/lu";
import { capitalizeFirstLetter } from "@/lib/utils";
import ButtonSecondary from "@/components/ui/buttons/button-secondary";

export default function Error({ error, reset }) {
    return (
        <div className="fixed bg-fit-reg inset-0 flex items-center justify-center font-inter">
            <hgroup className="text-dance-e9 text-center">
                <h1 className="text-8xl font-poppins">Ouch!</h1>
                <p className="text-xl">Something went wrong...</p>
                {error.message && <p className="text-xl opacity-60">{capitalizeFirstLetter(error.message)}</p>}
                <div className="flex gap-4 mx-auto w-fit mt-8">
                    <ButtonSecondary
                        label="Try again"
                        icon={<LuRotateCw />}
                        onClick={() => reset()}
                    />

                    <ButtonSecondary
                        label="Back to home"
                        icon={<LuArrowRight />}
                        type="link"
                        href="/"
                    />
                </div>
            </hgroup>
        </div>
    )
}