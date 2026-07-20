"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "./AnimateInView";

export default function Pricing() {
  const t = useTranslations("pricing");

  const freeFeatures = t.raw("free.features") as string[];
  const proFeatures = t.raw("pro.features") as string[];

  return (
    <section className="py-24 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface tracking-tight mb-3">
            {t("title")}
          </h2>
          <p className="text-white/40 text-base">{t("subtitle")}</p>
        </AnimateInView>

        <div className="flex flex-col md:flex-row gap-5 max-w-2xl mx-auto">
          <AnimateInView direction="left" className="flex-1">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 h-full">
              <div className="text-white/50 text-xs font-mono uppercase tracking-widest mb-4">
                {t("free.name")}
              </div>
              <div className="text-4xl font-semibold text-on-surface mb-1">
                {t("free.price")}
              </div>
              <div className="text-white/30 text-sm mb-6">{t("free.period")}</div>
              <div className="flex flex-col gap-2.5">
                {freeFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-accent text-xs mt-0.5">✓</span>
                    <span className="text-white/60 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateInView>

          <AnimateInView direction="right" className="flex-1">
            <div className="relative bg-gradient-to-b from-accent/[0.08] to-accent-deep/[0.06] border border-accent/25 rounded-2xl p-8 h-full">
              <div className="absolute -top-2.5 right-5 px-3 py-1 bg-gradient-to-r from-accent to-accent-strong rounded-md text-[#23005c] text-[11px] font-bold tracking-wide">
                {t("pro.badge")}
              </div>
              <div className="text-accent text-xs font-mono uppercase tracking-widest mb-4">
                {t("pro.name")}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-on-surface">
                  {t("pro.price")}
                </span>
                <span className="text-white/40 text-sm">{t("pro.period")}</span>
              </div>
              <div className="text-white/30 text-sm mb-6">{t("pro.altPricing")}</div>
              <div className="flex flex-col gap-2.5">
                {proFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-accent-strong text-xs mt-0.5">★</span>
                    <span className="text-white/60 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
