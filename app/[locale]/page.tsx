import { FaqSection } from "@/components/Blocks/FaqSection";
import { FeaturesSection } from "@/components/Blocks/FeatureSection";
import Hero, { FeaturedProjects } from "@/components/Blocks/Hero";
import { LogoCarousel } from "@/components/Blocks/LogoCarousel";
// import { PricingSection } from "@/components/Blocks/PricingSection";
import { TeamSection } from "@/components/Blocks/TeamSection";
import { TestimonialSection } from "@/components/Blocks/TestimonialSection";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-40">
        <Hero />
        <LogoCarousel />
        <FeaturesSection />
        <FeaturedProjects />
        <TeamSection />
        <TestimonialSection />
        {/* <PricingSection /> */}
        <FaqSection />
      </div>
    </main>
  );
}
