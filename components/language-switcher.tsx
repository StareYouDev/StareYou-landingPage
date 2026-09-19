"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <ToggleGroup
      aria-label={t("languageSwitcher")}
      value={[locale]}
      onValueChange={(value) => {
        const nextLocale = value[0] as Locale | undefined;
        if (nextLocale && nextLocale !== locale) {
          router.replace(pathname, { locale: nextLocale });
        }
      }}
      variant="outline"
      size="sm"
    >
      {routing.locales.map((l) => (
        <ToggleGroupItem key={l} value={l} aria-label={l} lang={l}>
          {localeLabels[l]}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
