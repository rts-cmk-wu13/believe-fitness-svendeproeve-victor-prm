import { fetchFromAPI } from "@/lib/dal/general"
import LandingSection from ".."
import NewsItem from "./news-item"
import HorizontalDivider from "@/components/ui/horizontal-divider"

export default async function LandingNews() {
    const news = await fetchFromAPI("/api/v1/news");

    return (
        <LandingSection title="News">
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
                {
                    news.map((n, idx) =>
                        <NewsItem key={idx} data={n} />
                    )
                }
            </ul>
            <HorizontalDivider />
        </LandingSection>
    )
}

