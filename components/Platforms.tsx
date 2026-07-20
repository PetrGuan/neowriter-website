"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "./AnimateInView";
import { AppleIcon, HarmonyIcon } from "./Icons";
import LucideIcon from "./LucideIcon";
import { PLATFORMS } from "@/lib/constants";

function PlatformGlyph({ platformKey }: { platformKey: string }) {
  if (platformKey === "harmony") {
    return <HarmonyIcon className="w-7 h-7 text-accent" />;
  }
  if (platformKey === "macos") {
    return <LucideIcon name="Laptop" size={28} strokeWidth={1.5} className="text-white/80" />;
  }
  return <AppleIcon className="w-7 h-7 text-white/80" />;
}

export default function Platforms() {
  const t = useTranslations("platforms");

  return (
    <section id="platforms" className="py-24 px-6 border-y border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent/90 mb-4">
            {t("label")}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-on-surface tracking-tight mb-3">
            {t("title")}
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">{t("subtitle")}</p>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLATFORMS.map((platform, i) => (
            <AnimateInView key={platform.key} delay={i * 0.08} direction="up">
              <div className="relative h-full bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.07] rounded-2xl p-7 hover:border-accent/25 transition-colors overflow-hidden">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[radial-gradient(circle,rgba(160,120,255,0.1)_0%,transparent_70%)]" />
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <PlatformGlyph platformKey={platform.key} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent/80 bg-accent/10 border border-accent/15 rounded-full px-2.5 py-1">
                    {t(`${platform.key}.tag`)}
                  </span>
                </div>
                <h3 className="text-on-surface text-lg font-semibold mb-2">
                  {t(`${platform.key}.name`)}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {t(`${platform.key}.description`)}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
