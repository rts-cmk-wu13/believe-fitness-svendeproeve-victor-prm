import PageSection from "@/components/layout/page-section"
import Link from "next/link"
import { getSession } from "@/lib/dal/session"
import { redirect } from "next/navigation"
import PageContainer from "@/components/layout/page-container"
import AppMain from "@/components/layout/app-main"
import AnimatedHeader from "../splash/animated-header"
import { LuArrowRight } from "react-icons/lu"
import ButtonSecondary from "@/components/ui/buttons/button-secondary"

export default async function Page() {
    /*  const session = await getSession()
     console.log(session)
     if (session) {
         redirect("/profile")
     } */

    return (
        <PageContainer className="w-full max-w-140! mt-6 bg-fit-bri before:fixed before:inset-0 before:bg-fit-bri before:-z-10">
            <AnimatedHeader />
            <AppMain>
                <PageSection title="Slow down, partner!">
                    <p className="font-inter">You need to be logged in to see this content</p>

                    <ButtonSecondary
                        label="Go to login"
                        icon={<LuArrowRight />}
                        className="w-full"
                        type="link"
                        href="/auth/login"
                     />
                </PageSection>
            </AppMain>
        </PageContainer >
    )
}