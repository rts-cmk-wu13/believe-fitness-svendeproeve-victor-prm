"use server"
import { getSplash,setSplash } from "@/lib/dal/session"
import { redirect } from "next/navigation"
import PageContainer from "@/components/layout/page-container"
import PageSection from "@/components/layout/page-section"
import AppMain from "@/components/layout/app-main"
import AnimatedHeader from "./animated-header"
import Image from "next/image"
import ButtonPrimary from "@/components/ui/buttons/button-primary"

export default async function Page() {
    const hasSeenSplash = await getSplash()
    if (hasSeenSplash) {
        redirect("/")
    }

    return (
        <PageContainer className="w-full max-w-140! mt-6 justify-center">
            <figure className="fixed inset-0 after:absolute after:inset-0 after:bg-black/40 animate-fade-in -z-1">
                <Image
                    src={"/splash_alt_full.jpg"}
                    alt="Woman doing bicep curls"
                    width={2571}
                    height={1356}
                    className="block size-full object-cover"
                    loading="eager"
                />
            </figure>
            <AnimatedHeader splash={true} />
            <AppMain>
                <PageSection title="Where should we take you?" className="text-fit-ff">
                    <div className="flex gap-4 text-black">
                        <form action={setSplash} noValidate>
                            <input type="hidden" name="url" value={"/"} />
                            <ButtonPrimary
                                label="Home"
                            />
                        </form>
                        <form action={setSplash} noValidate>
                            <input type="hidden" name="url" value={"/auth/login"} />
                            <ButtonPrimary
                                label="Log in"
                            />
                        </form>
                    </div>
                </PageSection>
            </AppMain>
        </PageContainer >
    )
}