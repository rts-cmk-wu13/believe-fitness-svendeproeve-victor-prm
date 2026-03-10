import PageContainer from "@/components/layout/page-container";
import TopNav from "@/components/ui/nav-header";
import ClassList from "./class-list";


export default function Home() {
    return (
        <PageContainer>
            <TopNav />
            <ClassList />
        </PageContainer>
    );
}
