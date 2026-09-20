import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr"] as const;

export const defaultLocale = "en" as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Static export (`output: "export"`, used for cPanel deployment) has no
  // middleware/proxy, so every locale — including the default — must be
  // prefixed (e.g. "/en", "/fr"). The root "/" redirects based on the
  // visitor's last-selected locale (see public/index.html and
  // public/.htaccess), falling back to their browser language.
  localePrefix: "always",
  // The <LanguageSwitcher> triggers navigation via next-intl's client
  // router, which automatically persists the choice into this cookie
  // (no middleware required). Extending its lifetime to a year means a
  // visitor's language choice is remembered across future visits, not just
  // the current browser session.
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type Locale = (typeof locales)[number];
