import LandingNews from "./landing-section/landing-news"
import LandingNewsletter from "./landing-section/landing-newsletter"
import LandingContact from "./landing-section/landing-contact"
import LandingTestimonials from "./landing-section/landing-testimonials"

export default function LandingMain() {
    return (
        <main id="main" className="grow px-3">
            <LandingNews />
            <LandingNewsletter />
            <LandingTestimonials />
            <LandingContact />
        </main>
    )
}