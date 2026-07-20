import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import FeatureSection from "@/components/FeatureSection";
import ConservationViz from "@/features/ConservationViz";
import MarkdownViz from "@/features/MarkdownViz";
import HistoryTimeline from "@/features/HistoryTimeline";
import SyncConflictViz from "@/features/SyncConflictViz";
import PlatformsViz from "@/features/PlatformsViz";
import FeatureGrid from "@/components/FeatureGrid";
import Privacy from "@/components/Privacy";
import Pricing from "@/components/Pricing";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { FEATURES } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

const FEATURE_VISUALS: Record<string, React.ComponentType> = {
  conservation: ConservationViz,
  markdown: MarkdownViz,
  history: HistoryTimeline,
  sync: SyncConflictViz,
  platforms: PlatformsViz,
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#0d0e15]">
      <Nav />
      <Hero />
      <Platforms />
      {FEATURES.map((feature) => {
        const Visual = FEATURE_VISUALS[feature.key];
        return (
          <FeatureSection key={feature.key} feature={feature}>
            <Visual />
          </FeatureSection>
        );
      })}
      <FeatureGrid />
      <Privacy />
      <Pricing />
      <FooterCTA />
      <Footer />
    </main>
  );
}
