import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

// Sections are anchor links within the single-page app; each locale variant
// of the homepage is listed with its hreflang alternates for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  const localizedUrl = (locale: string) =>
    locale === routing.defaultLocale
      ? siteConfig.url
      : `${siteConfig.url}/${locale}`;

  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedUrl(locale)])
  );

  return routing.locales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
