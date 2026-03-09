import PageContainer from "@/components/layout/page-container";
import LandingHeader from "./(landing)/landing-header";
import LandingFooter from "./(landing)/landing-footer";
import LandingMain from "./(landing)/landing.main";

export default function Home() {
  return (
    <PageContainer>
      <LandingHeader />
      <LandingMain/>
      <LandingFooter />
    </PageContainer>
  );
}
