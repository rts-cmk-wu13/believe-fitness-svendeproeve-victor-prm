import Image from "next/image"
import ButtonPrimary from "@/components/ui/buttons/button-primary"
import ButtonMenu from "@/components/ui/buttons/button-menu"

export default function LandingHeader() {
    return (
        <header className='cust-grid-stack p-5 overflow-hidden rounded-[0_0_3rem_3rem]'>
            <figure className="relative scale-120 -z-1 after:absolute after:inset-0 after:bg-black/40 ">
                <Image
                    src="/welcome.jpg"
                    alt="People doing crunches in a gym"
                    width={2571}
                    height={1356}
                    className="relative block"
                    loading="eager"
                />
            </figure>

            <hgroup className="self-end flex flex-col gap-3 container mx-auto">
                <h1 className="font-poppins font-semibold text-fit-reg text-4xl">
                    <span className="block text-2xl">Welcome to</span>
                    <span className="font-bold italic uppercase">Believe Fitness</span>
                </h1>
                <div className="flex gap-3">
                    <ButtonPrimary label="Classes" type="link" href="/classes" />
                    <ButtonPrimary label="Login" type="link" href="/login" />
                </div>
            </hgroup>
            <nav className="container mx-auto h-fit flex">
                <ButtonMenu className="text-fit-ff text-2xl ml-auto" />
            </nav>
        </header>
    )
}