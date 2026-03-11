import AppMain from "@/components/layout/app-main"
import LandingNews from "./landing-section/landing-news"
import LandingNewsletter from "./landing-section/landing-newsletter"
import LandingContact from "./landing-section/landing-contact"
import LandingTestimonials from "./landing-section/landing-testimonials"

export default function LandingMain() {
    return (
        <AppMain>
            <LandingNews />
            <LandingNewsletter />
            <LandingTestimonials />
            <LandingContact />
        </AppMain>
    )
}