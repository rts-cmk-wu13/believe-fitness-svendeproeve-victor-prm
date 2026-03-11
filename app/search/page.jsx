import PageContainer from "@/components/layout/page-container";
import TopNav from "@/components/ui/nav-header";
import SearchMain from "./search-main";

export default function ClassPage() {
    return (
        <PageContainer>
            <TopNav />
            <SearchMain />
        </PageContainer>
    );
}
