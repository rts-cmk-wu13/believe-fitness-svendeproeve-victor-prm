import PageContainer from "@/components/layout/page-container";
import TopNav from "@/components/ui/nav-header";
import ClassList from "./class-list";


export default function ClassPage() {
    return (
        <PageContainer>
            <TopNav />
            <ClassList />
        </PageContainer>
    );
}
