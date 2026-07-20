"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "./AnimateInView";
import LucideIcon from "./LucideIcon";
import { GRID_ITEMS } from "@/lib/constants";

export default function FeatureGrid() {
  const t = useTranslations("grid");

  return (
    <section className="py-24 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface tracking-tight mb-3">
            {t("title")}
          </h2>
          <p className="text-white/40 text-base">{t("subtitle")}</p>
        </AnimateInView>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {GRID_ITEMS.map((item, i) => (
            <AnimateInView key={item.key} delay={i * 0.03}>
              <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 text-center hover:border-accent/25 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all h-full">
                <div className="flex justify-center mb-2.5 text-white/60 group-hover:text-accent transition-colors">
                  <LucideIcon name={item.iconName} size={26} strokeWidth={1.5} />
                </div>
                <div className="text-on-surface text-sm font-semibold">
                  {t(`items.${item.key}.title`)}
                </div>
                <div className="text-white/40 text-xs mt-1 leading-snug">
                  {t(`items.${item.key}.description`)}
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
