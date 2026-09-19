import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr"] as const;

export const defaultLocale = "en" as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Keep the default locale's URLs without a prefix (e.g. "/") while
  // other locales are prefixed (e.g. "/fr") for clean, SEO-friendly URLs.
  localePrefix: "as-needed",
});

export type Locale = (typeof locales)[number];
