import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

// Required for `output: "export"` (static export): these routes have no
// dynamic input, so they can be generated once at build time.
export const dynamic = "force-static";

// Sections are anchor links within the single-page app; each locale variant
// of the homepage is listed with its hreflang alternates for search engines.
// Every locale (including the default) is served under its own prefix since
// the static export has no middleware to rewrite an unprefixed "/" route.
export default function sitemap(): MetadataRoute.Sitemap {
  const localizedUrl = (locale: string) => `${siteConfig.url}/${locale}`;

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
