"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import EditorMockup from "./EditorMockup";
import { AppleIcon, HarmonyIcon } from "./Icons";
import { APP_STORE_URL, APP_GALLERY_URL } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mockY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const mockScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-36 pb-24 px-6 overflow-hidden bg-grid"
    >
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(160,120,255,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/[0.04] border border-white/10 rounded-full mb-8"
          >
            <AppleIcon className="w-3.5 h-3.5 text-white/70" />
            <HarmonyIcon className="w-3.5 h-3.5 text-accent" />
            <span className="text-white/60 text-xs font-mono tracking-wide">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6"
          >
            {t("titleLine1")}
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-strong to-accent-deep bg-clip-text text-transparent">
              {t("titleLine2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl text-[#12131a] font-semibold text-base hover:bg-white/90 transition-colors"
            >
              <AppleIcon className="w-5 h-5" />
              {t("downloadIOS")}
            </a>
            <a
              href={APP_GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white/70 text-base hover:bg-white/[0.08] transition-colors"
            >
              <HarmonyIcon className="w-5 h-5 text-accent" />
              {t("harmonyComingSoon")}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y: mockY, scale: mockScale }}
          className="flex justify-center"
        >
          <EditorMockup />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0e15] to-transparent pointer-events-none" />
    </section>
  );
}
