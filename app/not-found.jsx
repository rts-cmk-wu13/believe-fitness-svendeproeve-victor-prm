import ButtonSecondary from "@/components/ui/buttons/button-secondary";
import { LuArrowRight } from "react-icons/lu";

export default function Custom404() {
    return (
        <div className="fixed bg-fit-reg inset-0 flex items-center justify-center font-inter">
            <hgroup className="text-dance-e9 text-center">
                <h1 className="text-8xl font-Poppins">404</h1>
                <p className="text-xl">This content does not exist!</p>

                <div className="flex gap-4 mx-auto w-fit mt-8">
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