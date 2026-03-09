import HorizontalDivider from "@/components/ui/horizontal-divider"

export default function LandingFooter() {
    return (
        <footer id="footer" className="container mx-auto flex flex-col items-center w-full gap-3 p-6 self-baseline">
            <HorizontalDivider />
            <div className="flex flex-col items-center font-poppins">
                <p className="text-4xl font-bold italic uppercase text-fit-reg">Believe Fitness</p>
                <small className="text-lg font-bold">Train like a pro</small>
            </div>

            <address className="font-inter flex flex-col items-center not-italic font-">
                <p>Rabalderstræde 48 ‧ 4000 Roskilde</p>
                <p><a href="mailto:someone@example.com">hello@believe-fitness.com</a></p>
            </address>
        </footer >
    )
}