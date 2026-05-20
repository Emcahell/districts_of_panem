import { useEffect, useLayoutEffect, useState } from "preact/hooks";

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

function LanguageSelect() {
  const [language, setLanguage] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const currentLanguage = getInitialLanguage();
    console.log("[LanguageSelect] init currentLanguage:", currentLanguage);
    setLanguage(currentLanguage);
    setReady(true);
  }, []);

  useEffect(() => {
    const handleLanguageUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("language-updated", handleLanguageUpdated as EventListener);
    return () => {
      window.removeEventListener("language-updated", handleLanguageUpdated as EventListener);
    };
  }, []);

  return (
    <select
      id="language-select"
      name="language"
      value={ready ? language : undefined}
      defaultValue={!ready ? language : undefined}
      onChange={(event) => {
        const selected = event.currentTarget.value as Language;
        console.log("[LanguageSelect] selected:", selected);
        setLanguage(selected);
        window.dispatchEvent(new CustomEvent("language-change", { detail: selected }));
      }}
      class="bg-transparent border-2 border-white-text/30 text-white-text/90 rounded-full px-4 py-2 outline-none focus:border-dorado transition"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}

export default LanguageSelect;
