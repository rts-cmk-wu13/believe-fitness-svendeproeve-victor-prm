import Link from "next/link"
import { LuArrowRight } from "react-icons/lu";


export default function Custom404() {
    return (
        <div className="fixed bg-fit-reg inset-0 flex items-center justify-center font-inter">
            <hgroup className="text-dance-e9 text-center">
                <h1 className="text-8xl font-Poppins">404</h1>
                <p className="text-xl">This content does not exist!</p>

                <Link
                    className="mt-8 ring-2 ring-black px-6 py-3 rounded-4xl cursor-pointer inline-flex gap-2 items-center justify-center hover:opacity-70 font-medium"
                    href={"/"}>
                    Back to home
                    <LuArrowRight />
                </Link>
            </hgroup>
        </div>
    )
}