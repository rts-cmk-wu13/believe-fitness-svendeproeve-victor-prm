import AppMain from "@/components/layout/app-main";
import PageSection from "@/components/layout/page-section";
import PageContainer from "@/components/layout/page-container";
import TopNav from "@/components/ui/nav-header";
import { HiUser } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";

import CalendarItem from "./calendar-item";
import CardList from "@/components/ui/card-list";


export default function Page() {
    return (
        <PageContainer>
            <TopNav />
            <AppMain>
                <PageSection
                className="py-2 mb-8"
                >
                    <div className="flex items-center gap-2">
                        <figure className="size-16 bg-fit-reg rounded-full flex items-end justify-center overflow-clip border border-black">
                            <HiUser className="size-3/4 -mb-[5%]" />
                        </figure>
                        <hgroup className="flex flex-col">
                            <h2 className="text-lg font-medium">Hannah Jones</h2>
                            <small>Member</small>
                        </hgroup>
                    </div>
                </PageSection>

                <PageSection
                    title={<span className="inline-flex gap-2 items-center">
                        <LuCalendarDays className="size-7" />
                        <span>Calendar</span>
                    </span>}
                >
                    <CardList>
                        <CalendarItem />
                        <CalendarItem />
                        <CalendarItem />
                    </CardList>
                </PageSection>
            </AppMain>

        </PageContainer>
    );
}
