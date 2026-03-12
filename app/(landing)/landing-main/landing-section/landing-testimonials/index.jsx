import { fetchFromAPI } from "@/lib/dal/general"
import Image from "next/image"
import LandingSection from ".."
import TestimonialSlider from "@/app/(landing)/landing-main/landing-section/landing-testimonials/testimonial-slider"

export default async function LandingTestimonials() {
    const testimonials = await fetchFromAPI("/api/v1/testimonials")
    console.log(testimonials)

    return (
        <LandingSection className="px-0!">
            <div className="cust-grid-stack">
                <figure className="relative after:absolute after:inset-0 after:bg-black/40">
                    <Image
                        src={"/splash_alt_full.jpg"}
                        alt="Woman doing bicep curls"
                        width={1500}
                        height={1000}
                        className="object-cover h-120"
                        priority
                    />
                </figure>

                <h2 className="font-poppins text-3xl font-semibold text-fit-ff max-w-60 text-center mx-auto mt-8 z-10 h-fit">A word from other Believers</h2>
                <TestimonialSlider slides={testimonials} />
            </div>
        </LandingSection >
    )
}