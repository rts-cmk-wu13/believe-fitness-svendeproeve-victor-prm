import LandingNews from "./landing-section/landing-news"
import LandingNewsletter from "./landing-section/landing-newsletter"

export default function LandingMain() {
    return (
        <main id="main" className="grow px-3">
            <LandingNews />
            <LandingNewsletter/>
        </main>
    )
}