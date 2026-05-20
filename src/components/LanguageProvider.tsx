import { useEffect, useLayoutEffect, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import { translations, type TranslationKey } from "../i18n/translations";

type Language = "en" | "es";

function getBrowserLanguage(): Language {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const browserLang = navigator.language?.split("-")[0] || "en";
  return browserLang === "es" ? "es" : "en";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLang = localStorage.getItem("selected-language");
  if (storedLang === "es" || storedLang === "en") {
    return storedLang;
  }

  return getBrowserLanguage();
}

function applyTranslations(lang: Language) {
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll<HTMLElement>("[data-translate-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate-key") as TranslationKey;
    if (!key) return;

    element.textContent =
      translations[lang]?.[key] ?? translations.en[key] ?? key;
  });
}

function dispatchLanguageUpdate(lang: Language) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("language-updated", { detail: lang }));
}

export default function LanguageProvider({ children }: { children: ComponentChildren }) {
  const [language, setLanguage] = useState<Language>("en");

  useLayoutEffect(() => {
    const initialLanguage = getInitialLanguage();
    if (initialLanguage !== language) {
      console.log("[LanguageProvider] initialLanguage:", initialLanguage);
      setLanguage(initialLanguage);
    }
  }, []);

  useEffect(() => {
    console.log("[LanguageProvider] language changed:", language);
    if (!language) return;
    localStorage.setItem("selected-language", language);
    applyTranslations(language);
    dispatchLanguageUpdate(language);
  }, [language]);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      if (customEvent.detail === language) return;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("language-change", handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener("language-change", handleLanguageChange as EventListener);
    };
  }, [language]);

  return <>{children}</>;
}
