import PageContainer from "@/components/layout/page-container";
import NavHeader from "@/components/ui/nav-header";
import LandingHero from "./(landing)/landing-hero";
import LandingMain from "./(landing)/landing-main";
import LandingFooter from "./(landing)/landing-footer";
import { getSplash} from "@/lib/dal/session";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const hasSeenSplash = await getSplash()
  if (!hasSeenSplash) {
    redirect("/splash")
  }

  return (
    <PageContainer>
      <NavHeader />
      <LandingHero />
      <LandingMain />
      <LandingFooter />
    </PageContainer>
  );
}
