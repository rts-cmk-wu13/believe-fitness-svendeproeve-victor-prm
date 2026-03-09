import PageContainer from "@/components/layout/page-container";
import LandingHeader from "./(landing)/landing-header";
import LandingMain from "./(landing)/landing-main";
import LandingFooter from "./(landing)/landing-footer";


export default function Home() {
  return (
    <PageContainer>
      <LandingHeader />
      <LandingMain/>
      <LandingFooter />
    </PageContainer>
  );
}
