import Link from "next/link"
import { getSession } from "@/lib/dal/session"
import { redirect } from "next/navigation"
import PageContainer from "@/components/layout/page-container"
import PageSection from "@/components/layout/page-section"
import AppMain from "@/components/layout/app-main"
import AnimatedHeader from "./animated-header"

export default async function Page() {
    /* const session = await getSession()
    console.log(session)
    if (session) {
        redirect("/profile")
    } */

    return (
         <PageContainer className="w-full max-w-140! mt-6 justify-center">
            <AnimatedHeader />
            <AppMain>
                <PageSection title="Log in with your credentials">
                    Buttons
                </PageSection>
            </AppMain>
        </PageContainer >
    )
}