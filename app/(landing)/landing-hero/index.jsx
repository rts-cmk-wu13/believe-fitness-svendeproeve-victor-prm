import Image from "next/image"
import ButtonPrimary from "@/components/ui/buttons/button-primary"
import CompanyLogo from "@/components/ui/company-logo"

export default function LandingHero() {
    return (
        <section className='cust-grid-stack bg-fit-drk py-5 overflow-hidden rounded-[0_0_3rem_3rem]'>
            <figure className="relative scale-120 after:absolute after:inset-0 after:bg-black/40 animate-fade-in max-h-140">
                <Image
                    src="/welcome.jpg"
                    alt="People doing crunches in a gym"
                    width={2571}
                    height={1356}
                    className="relative block"
                    loading="eager"
                />
            </figure>

            <hgroup className="self-end flex flex-col gap-3 container mx-auto px-5 z-1">
                <h1 className="font-poppins font-semibold text-fit-reg text-4xl">
                    <span className="block text-2xl">Welcome to</span>
                    <CompanyLogo lines={2}/>
                </h1>
                <div className="flex gap-3">
                    <ButtonPrimary label="Classes" type="link" href="/classes" />
                    <ButtonPrimary label="Login" type="link" href="/login" />
                </div>
            </hgroup>
        </section>
    )
}