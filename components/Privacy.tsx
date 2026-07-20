"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "./AnimateInView";

const CARDS = [
  {
    key: "local",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "yourCloud",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 19a4.5 4.5 0 0 1-.42-8.98 7 7 0 0 1 13.84 0A4.5 4.5 0 0 1 17.5 19H6.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    key: "noTracking",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "conflict",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5h6l2 2h8v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 10v6M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Privacy() {
  const t = useTranslations("privacy");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface tracking-tight mb-3">
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">{t("subtitle")}</p>
        </AnimateInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => (
            <AnimateInView key={card.key} delay={i * 0.05}>
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 h-full hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent mb-4">
                  {card.icon}
                </div>
                <h3 className="text-on-surface text-sm font-semibold mb-2">
                  {t(`${card.key}.title`)}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {t(`${card.key}.description`)}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
