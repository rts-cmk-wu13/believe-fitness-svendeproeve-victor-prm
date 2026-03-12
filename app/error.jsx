"use client"
import Link from "next/link"
import { LuArrowRight } from "react-icons/lu";
import { LuRotateCw } from "react-icons/lu";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function Error({ error, reset }) {
    return (
        <div className="fixed bg-fit-reg inset-0 flex items-center justify-center font-inter">
            <hgroup className="text-dance-e9 text-center">
                <h1 className="text-8xl font-poppins">Ouch!</h1>
                <p className="text-xl">Something went wrong...</p>
                {error.message && <p className="text-xl opacity-60">{capitalizeFirstLetter(error.message)}</p>}
                <div className="flex gap-4 mx-auto w-fit">

                    <button
                        className="mt-8 ring-2 ring-black px-6 py-3 rounded-4xl cursor-pointer inline-flex gap-2 items-center justify-center hover:opacity-70 font-medium"
                        onClick={() => reset()}>
                        Try again
                        <LuRotateCw />
                    </button>
                    <Link
                        className="mt-8 ring-2 ring-black px-6 py-3 rounded-4xl cursor-pointer inline-flex gap-2 items-center justify-center hover:opacity-70 font-medium"
                        href={"/"}>
                        Back to home
                        <LuArrowRight />
                    </Link>
                </div>
            </hgroup>
        </div>
    )
}