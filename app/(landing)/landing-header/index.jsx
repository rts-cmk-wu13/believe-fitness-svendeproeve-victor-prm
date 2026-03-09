import Image from "next/image"
import ButtonPrimary from "@/components/ui/button-primary"

export default function LandingHeader() {
    return (
        <header className='cust-grid-stack p-5 overflow-hidden'>
            <Image
                src="/welcome.jpg"
                alt="People doing crunches in a gym"
                width={2571}
                height={1356}
                className="block scale-120 -z-1"
            />
            <hgroup className="self-end flex flex-col gap-3">
                <h1 className="font-poppins font-bold text-fit-reg text-4xl">
                    <span className="block text-2xl">Welcome to</span>
                    Believe Fitness
                </h1>
                <div className="flex gap-3">
                    <ButtonPrimary label="Classes" type="link" href="/classes"/>
                    <ButtonPrimary label="Login" type="link" href="/login"/>
                </div>

            </hgroup>

        </header>
    )
}