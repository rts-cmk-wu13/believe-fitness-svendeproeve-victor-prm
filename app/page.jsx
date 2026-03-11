import PageContainer from "@/components/layout/page-container";
import NavHeader from "@/components/ui/nav-header";
import LandingHero from "./(landing)/landing-hero";
import LandingMain from "./(landing)/landing-main";
import LandingFooter from "./(landing)/landing-footer";

export default function HomePage() {
  return (
    <PageContainer>
        <NavHeader />
        <LandingHero />
        <LandingMain />
        <LandingFooter />
    </PageContainer>
  );
}
