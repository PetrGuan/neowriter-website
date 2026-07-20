"use client";

import { useTranslations } from "next-intl";
import AnimateInView from "./AnimateInView";
import { AppleIcon, HarmonyIcon } from "./Icons";
import { APP_STORE_URL, APP_GALLERY_URL } from "@/lib/constants";

export default function FooterCTA() {
  const t = useTranslations("footerCTA");
  const heroT = useTranslations("hero");

  return (
    <section className="py-28 px-6 bg-[radial-gradient(ellipse_at_center,rgba(160,120,255,0.1)_0%,transparent_70%)]">
      <AnimateInView className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-on-surface tracking-tight mb-4">
          {t("title")}
        </h2>
        <p className="text-white/40 text-base mb-8">{t("subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white rounded-xl text-[#12131a] font-semibold text-base hover:bg-white/90 transition-colors"
          >
            <AppleIcon className="w-5 h-5" />
            {heroT("downloadIOS")}
          </a>
          <a
            href={APP_GALLERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-white/70 text-base hover:bg-white/[0.08] transition-colors"
          >
            <HarmonyIcon className="w-5 h-5 text-accent" />
            {heroT("harmonyComingSoon")}
          </a>
        </div>
      </AnimateInView>
    </section>
  );
}
