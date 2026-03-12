import AppMain from "@/components/layout/app-main";
import PageSection from "@/components/layout/page-section";
import PageContainer from "@/components/layout/page-container";
import TopNav from "@/components/ui/nav-header";
import CalendarItem from "./calendar-item";
import CardList from "@/components/ui/card-list";
import LogoutForm from "./logout-form";
import ButtonPrimary from "@/components/ui/buttons/button-primary";

import { getSession } from "@/lib/dal/session";
import { formattedUserHandle } from "@/lib/utils";
import { formatRole } from "@/lib/utils";
import { capitalizeFirstLetter } from "@/lib/utils";
import { HiUser } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";


export default async function Page() {
    const user = await getSession()
    if(!user) return null;

    return (
        <PageContainer>
            <TopNav />
            <AppMain>
                <PageSection className="py-2 my-6">
                    <div className="flex items-center gap-2">
                        <figure className="size-16 bg-fit-reg rounded-full flex items-end justify-center overflow-clip border border-black">
                            <HiUser className="size-3/4 -mb-[5%]" />
                        </figure>
                        <hgroup className="flex flex-col">
                            <h2 className="text-lg font-medium">{formattedUserHandle(user.userFirstName, user.userLastName, user.username)}</h2>
                            <small>{capitalizeFirstLetter(formatRole(user.role))}</small>
                        </hgroup>
                        <LogoutForm />
                    </div>
                </PageSection>

                <PageSection
                    title={<span className="inline-flex gap-2 items-center">
                        <LuCalendarDays className="size-7" />
                        <span>Calendar</span>
                    </span>}
                >
                    <CardList>
                        {user.classes.length ?
                            (
                                user.classes.map((cl, idx) => <CalendarItem key={idx} data={cl} />)
                            ) :

                            <div className="flex flex-col gap-4">
                                <p>You don't have any classes planned</p>
                                <ButtonPrimary
                                    label="Browse classes"
                                    icon={<LuArrowRight />}
                                    type="link"
                                    href="/classes"
                                />
                            </div>
                        }
                    </CardList>
                </PageSection>
            </AppMain>

        </PageContainer>
    );
}
