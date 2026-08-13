import { useEffect, useRef, useState } from "preact/hooks";
import "family-chart/styles/family-chart.css";
import { translations, type TranslationKey } from "../i18n/translations";

type Language = "en" | "es";

// ============================================================
// District 12 Family Tree Data
// Based on canon from the trilogy, The Ballad of Songbirds and
// Snakes, and Sunrise on the Reaping. Relationships marked as
// "probable" are supported theories within the fandom.
// Roles and descriptions use i18n keys (ftRole*, ft*Desc).
// ============================================================

type PersonData = {
  "first name": string;
  "last name": string;
  gender: "M" | "F";
  roleKey?: string;
  descKey?: string;
};

type FamilyMember = {
  id: string;
  data: PersonData;
  rels: { parents?: string[]; spouses?: string[]; children?: string[] };
};

// Main connected tree: The Covey -> Everdeen -> Mellark -> Abernathy
const mainTreeData: FamilyMember[] = [
  // --- The Covey (root generation) ---
  {
    id: "covey-elders",
    data: {
      "first name": "The Covey",
      "last name": "Elders",
      gender: "F",
      roleKey: "ftRoleMusicians",
      descKey: "ftCoveyEldersDesc",
    },
    rels: {
      children: [
        "barb-azure",
        "maude-ivory",
        "tam-amber",
        "lucy-gray",
        "clerk-carmine",
        "billy-taupe",
      ],
    },
  },
  {
    id: "barb-azure",
    data: {
      "first name": "Barb Azure",
      "last name": "",
      gender: "F",
      roleKey: "ftRoleCoveySinger",
      descKey: "ftBarbAzureDesc",
    },
    rels: { parents: ["covey-elders"], children: ["burdock"] },
  },
  {
    id: "maude-ivory",
    data: {
      "first name": "Maude Ivory",
      "last name": "",
      gender: "F",
      roleKey: "ftRoleCoveySinger",
      descKey: "ftMaudeIvoryDesc",
    },
    rels: { parents: ["covey-elders"], children: ["lenore-dove"] },
  },
  {
    id: "tam-amber",
    data: {
      "first name": "Tam Amber",
      "last name": "",
      gender: "M",
      roleKey: "ftRoleCoveyMusician",
      descKey: "ftTamAmberDesc",
    },
    rels: { parents: ["covey-elders"] },
  },
  {
    id: "lucy-gray",
    data: {
      "first name": "Lucy Gray",
      "last name": "Baird",
      gender: "F",
      roleKey: "ftRole10thVictor",
      descKey: "ftLucyGrayDesc",
    },
    rels: { parents: ["covey-elders"] },
  },
  {
    id: "clerk-carmine",
    data: {
      "first name": "Clerk Carmine",
      "last name": "Clade",
      gender: "M",
      roleKey: "ftRoleCoveyMusician",
      descKey: "ftClerkCarmineDesc",
    },
    rels: { parents: ["covey-elders"] },
  },
  {
    id: "billy-taupe",
    data: {
      "first name": "Billy Taupe",
      "last name": "Clade",
      gender: "M",
      roleKey: "ftRoleCoveyMusician",
      descKey: "ftBillyTaupeDesc",
    },
    rels: { parents: ["covey-elders"] },
  },

  // --- Everdeen Family ---
  {
    id: "burdock",
    data: {
      "first name": "Burdock",
      "last name": "Everdeen",
      gender: "M",
      roleKey: "ftRoleCoalMiner",
      descKey: "ftBurdockDesc",
    },
    rels: { parents: ["barb-azure"], spouses: ["asterid"], children: ["katniss", "primrose"] },
  },
  {
    id: "asterid",
    data: {
      "first name": "Asterid",
      "last name": "March",
      gender: "F",
      roleKey: "ftRoleHealer",
      descKey: "ftAsteridDesc",
    },
    rels: { spouses: ["burdock"], children: ["katniss", "primrose"] },
  },
  {
    id: "katniss",
    data: {
      "first name": "Katniss",
      "last name": "Everdeen",
      gender: "F",
      roleKey: "ftRoleMockingjay",
      descKey: "ftKatnissDesc",
    },
    rels: {
      parents: ["burdock", "asterid"],
      spouses: ["peeta"],
      children: ["katniss-son", "katniss-daughter"],
    },
  },
  {
    id: "primrose",
    data: {
      "first name": "Primrose",
      "last name": "Everdeen",
      gender: "F",
      roleKey: "ftRoleMedicalVolunteer",
      descKey: "ftPrimroseDesc",
    },
    rels: { parents: ["burdock", "asterid"] },
  },
  {
    id: "katniss-son",
    data: {
      "first name": "Son",
      "last name": "Everdeen",
      gender: "M",
      roleKey: "ftRoleChild",
      descKey: "ftKatnissSonDesc",
    },
    rels: { parents: ["katniss", "peeta"] },
  },
  {
    id: "katniss-daughter",
    data: {
      "first name": "Daughter",
      "last name": "Everdeen",
      gender: "F",
      roleKey: "ftRoleChild",
      descKey: "ftKatnissDaughterDesc",
    },
    rels: { parents: ["katniss", "peeta"] },
  },

  // --- Mellark Family ---
  {
    id: "otho",
    data: {
      "first name": "Otho",
      "last name": "Mellark",
      gender: "M",
      roleKey: "ftRoleBaker",
      descKey: "ftOthoDesc",
    },
    rels: {
      spouses: ["mrs-mellark"],
      children: ["peeta", "peeta-brother-1", "peeta-brother-2"],
    },
  },
  {
    id: "mrs-mellark",
    data: {
      "first name": "Mrs.",
      "last name": "Mellark",
      gender: "F",
      roleKey: "ftRoleBaker",
      descKey: "ftMrsMellarkDesc",
    },
    rels: {
      spouses: ["otho"],
      children: ["peeta", "peeta-brother-1", "peeta-brother-2"],
    },
  },
  {
    id: "peeta",
    data: {
      "first name": "Peeta",
      "last name": "Mellark",
      gender: "M",
      roleKey: "ftRoleBakerVictor",
      descKey: "ftPeetaDesc",
    },
    rels: {
      parents: ["otho", "mrs-mellark"],
      spouses: ["katniss"],
      children: ["katniss-son", "katniss-daughter"],
    },
  },
  {
    id: "peeta-brother-1",
    data: {
      "first name": "Brother",
      "last name": "Mellark",
      gender: "M",
      roleKey: "ftRoleBaker",
      descKey: "ftPeetaBrotherDesc",
    },
    rels: { parents: ["otho", "mrs-mellark"] },
  },
  {
    id: "peeta-brother-2",
    data: {
      "first name": "Brother",
      "last name": "Mellark",
      gender: "M",
      roleKey: "ftRoleBaker",
      descKey: "ftPeetaBrotherDesc",
    },
    rels: { parents: ["otho", "mrs-mellark"] },
  },

  // --- Abernathy Family (via Lenore Dove) ---
  {
    id: "lenore-dove",
    data: {
      "first name": "Lenore Dove",
      "last name": "Baird",
      gender: "F",
      roleKey: "ftRoleCoveySinger",
      descKey: "ftLenoreDoveDesc",
    },
    rels: { parents: ["maude-ivory"], spouses: ["haymitch"] },
  },
  {
    id: "pa-abernathy",
    data: {
      "first name": "Pa",
      "last name": "Abernathy",
      gender: "M",
      roleKey: "ftRoleCoalMiner",
      descKey: "ftPaAbernathyDesc",
    },
    rels: { spouses: ["willamae"], children: ["haymitch", "sid"] },
  },
  {
    id: "willamae",
    data: {
      "first name": "Willamae",
      "last name": "Abernathy",
      gender: "F",
      roleKey: "ftRoleMother",
      descKey: "ftWillamaeDesc",
    },
    rels: { spouses: ["pa-abernathy"], children: ["haymitch", "sid"] },
  },
  {
    id: "sid",
    data: {
      "first name": "Sid",
      "last name": "Abernathy",
      gender: "M",
      roleKey: "ftRoleBrother",
      descKey: "ftSidDesc",
    },
    rels: { parents: ["pa-abernathy", "willamae"] },
  },
  {
    id: "haymitch",
    data: {
      "first name": "Haymitch",
      "last name": "Abernathy",
      gender: "M",
      roleKey: "ftRole50thVictor",
      descKey: "ftHaymitchDesc",
    },
    rels: { parents: ["pa-abernathy", "willamae"], spouses: ["lenore-dove"] },
  },
];

// Donner & Undersee family (connected to each other, separate tree)
const donnerUnderseeData: FamilyMember[] = [
  {
    id: "donner-grandmother",
    data: {
      "first name": "Mrs.",
      "last name": "Donner",
      gender: "F",
      roleKey: "ftRoleGrandmother",
      descKey: "ftDonnerGrandmotherDesc",
    },
    rels: { children: ["mr-donner"] },
  },
  {
    id: "mr-donner",
    data: {
      "first name": "Mr.",
      "last name": "Donner",
      gender: "M",
      roleKey: "ftRoleSweetshopOwner",
      descKey: "ftMrDonnerDesc",
    },
    rels: {
      parents: ["donner-grandmother"],
      spouses: ["mrs-donner"],
      children: ["maysilee", "merrilee"],
    },
  },
  {
    id: "mrs-donner",
    data: {
      "first name": "Mrs.",
      "last name": "Donner",
      gender: "F",
      roleKey: "ftRoleSweetshopOwner",
      descKey: "ftMrsDonnerDesc",
    },
    rels: { spouses: ["mr-donner"], children: ["maysilee", "merrilee"] },
  },
  {
    id: "maysilee",
    data: {
      "first name": "Maysilee",
      "last name": "Donner",
      gender: "F",
      roleKey: "ftRole50thTribute",
      descKey: "ftMaysileeDesc",
    },
    rels: { parents: ["mr-donner", "mrs-donner"] },
  },
  {
    id: "merrilee",
    data: {
      "first name": "Merrilee",
      "last name": "Donner",
      gender: "F",
      roleKey: "ftRoleMayorsWife",
      descKey: "ftMerrileeDesc",
    },
    rels: {
      parents: ["mr-donner", "mrs-donner"],
      spouses: ["mayor-undersee"],
      children: ["madge"],
    },
  },
  {
    id: "mayor-undersee",
    data: {
      "first name": "Mayor",
      "last name": "Undersee",
      gender: "M",
      roleKey: "ftRoleMayor",
      descKey: "ftMayorUnderseeDesc",
    },
    rels: { spouses: ["merrilee"], children: ["madge"] },
  },
  {
    id: "madge",
    data: {
      "first name": "Madge",
      "last name": "Undersee",
      gender: "F",
      roleKey: "ftRoleMayorsDaughter",
      descKey: "ftMadgeDesc",
    },
    rels: { parents: ["mayor-undersee", "merrilee"] },
  },
];

// Hawthorne family (separate tree)
const hawthorneData: FamilyMember[] = [
  {
    id: "hawthorne-sr",
    data: {
      "first name": "Mr.",
      "last name": "Hawthorne",
      gender: "M",
      roleKey: "ftRoleCoalMiner",
      descKey: "ftHawthorneSrDesc",
    },
    rels: { spouses: ["hawthorne-mrs"], children: ["gale", "hazelle"] },
  },
  {
    id: "hawthorne-mrs",
    data: {
      "first name": "Mrs.",
      "last name": "Hawthorne",
      gender: "F",
      roleKey: "ftRoleSeamMother",
      descKey: "ftHawthorneMrsDesc",
    },
    rels: { spouses: ["hawthorne-sr"], children: ["gale", "hazelle"] },
  },
  {
    id: "gale",
    data: {
      "first name": "Gale",
      "last name": "Hawthorne",
      gender: "M",
      roleKey: "ftRoleHunter",
      descKey: "ftGaleDesc",
    },
    rels: { parents: ["hawthorne-sr", "hawthorne-mrs"] },
  },
  {
    id: "hazelle",
    data: {
      "first name": "Hazelle",
      "last name": "Hawthorne",
      gender: "F",
      roleKey: "ftRoleLaundress",
      descKey: "ftHazelleDesc",
    },
    rels: { parents: ["hawthorne-sr", "hawthorne-mrs"] },
  },
];

function t(lang: Language, key: string | undefined): string {
  if (!key) return "";
  return translations[lang]?.[key as TranslationKey] ?? translations.en[key as TranslationKey] ?? "";
}

function renderChart(container: HTMLDivElement, data: FamilyMember[], mainId: string | undefined, lang: Language) {
  return import("family-chart").then((f3) => {
    const f3Chart = f3.createChart(container, data as any)
      .setCardXSpacing(380)
      .setCardYSpacing(220)
      .setSingleParentEmptyCard(false);

    if (mainId) {
      (f3Chart as any).updateMainId?.(mainId);
    }

    f3Chart.setCardHtml().setCardInnerHtmlCreator((d: any) => {
      const person = d.data.data;
      const first = person["first name"] || "";
      const last = person["last name"] || "";
      const role = t(lang, person.roleKey);
      const desc = t(lang, person.descKey);
      return `
        <div class="ft-card-inner">
          <div class="ft-card-name">${first}${last ? ` ${last}` : ""}</div>
          ${role ? `<div class="ft-card-role">${role}</div>` : ""}
          ${desc ? `<div class="ft-card-desc">${desc}</div>` : ""}
        </div>
      `;
    });

    f3Chart.updateTree({ initial: true });
    return f3Chart;
  });
}

interface FamilyChartProps {
  data: FamilyMember[];
  mainId?: string;
  heightClass?: string;
  lang: Language;
}

function FamilyChart({ data, mainId, heightClass = "h-[420px]", lang }: FamilyChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    let disposed = false;

    container.innerHTML = "";

    renderChart(container, data, mainId, lang).catch((err) => {
      console.error("Family chart failed to render:", err);
      if (!disposed) {
        container.innerHTML = `<div class="text-white-text/70 p-6 font-family-secondary">Error rendering family tree.</div>`;
      }
    });

    return () => {
      disposed = true;
      container.innerHTML = "";
    };
  }, [data, mainId, lang]);

  return (
    <div class={`w-full bg-[#0a0a0a] rounded-xl border border-gray-800/50 overflow-hidden ${heightClass}`}>
      <div ref={containerRef} class="f3 f3-cont ft-container w-full h-full" />
    </div>
  );
}

export default function FamilyTree() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Read initial language (stored by the LanguageProvider)
    let initial: Language = "en";
    try {
      const stored = localStorage.getItem("selected-language");
      if (stored === "es" || stored === "en") initial = stored;
    } catch {
      // ignore
    }
    setLang(initial);

    // Listen for language changes dispatched by LanguageProvider
    const handleLanguageUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      if (customEvent.detail === "es" || customEvent.detail === "en") {
        setLang(customEvent.detail);
      }
    };
    window.addEventListener("language-updated", handleLanguageUpdate as EventListener);
    return () => {
      window.removeEventListener("language-updated", handleLanguageUpdate as EventListener);
    };
  }, []);

  return (
    <div class="w-full flex flex-col gap-10">
      <section class="w-full">
        <h2 class="text-dorado font-family-bunken-tech text-xl md:text-2xl mb-3 text-center" data-translate-key="familyTreeMainTitle">
          Everdeen, Mellark &amp; The Covey
        </h2>
        <FamilyChart data={mainTreeData} mainId="katniss" heightClass="h-[560px]" lang={lang} />
      </section>

      <section class="w-full grid md:grid-cols-2 gap-6">
        <div class="w-full">
          <h2 class="text-dorado font-family-bunken-tech text-xl mb-3 text-center" data-translate-key="familyTreeDonnerTitle">
            Donner &amp; Undersee
          </h2>
          <FamilyChart data={donnerUnderseeData} mainId="mr-donner" heightClass="h-[480px]" lang={lang} />
        </div>
        <div class="w-full">
          <h2 class="text-dorado font-family-bunken-tech text-xl mb-3 text-center" data-translate-key="familyTreeHawthorneTitle">
            Hawthorne
          </h2>
          <FamilyChart data={hawthorneData} mainId="hawthorne-sr" heightClass="h-[480px]" lang={lang} />
        </div>
      </section>
    </div>
  );
}
