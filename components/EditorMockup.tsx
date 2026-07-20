"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function EditorMockup() {
  const t = useTranslations("hero.mockup");

  const lines = [
    t("line1"),
    t("line2"),
    t("line3"),
    t("line4"),
    t("line5"),
  ];

  return (
    <motion.div
      className="relative w-full max-w-[560px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Ambient accent glow */}
      <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(160,120,255,0.18)_0%,rgba(208,188,255,0.08)_40%,transparent_70%)] blur-[50px] -z-10" />

      {/* Editor window */}
      <div className="rounded-2xl bg-surface border border-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 h-11 border-b border-white/[0.06] bg-surface-low/60">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
              {t("book")}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-strong animate-pulse" />
            <span className="text-accent text-[11px] font-mono uppercase tracking-widest">
              {t("saved")}
            </span>
          </div>
        </div>

        {/* Writing canvas */}
        <div className="px-8 sm:px-10 py-8 text-left">
          <h3 className="font-serif-canvas text-2xl sm:text-3xl text-on-surface mb-6 tracking-tight">
            {t("title")}
          </h3>
          <div className="space-y-3">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.35, duration: 0.5 }}
                className="font-serif-canvas text-[17px] leading-relaxed text-on-surface-variant"
              >
                {line}
                {i === lines.length - 1 && (
                  <motion.span
                    className="inline-block w-[2px] h-[1.1em] translate-y-[3px] ml-0.5 bg-accent"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 h-9 border-t border-white/[0.06] bg-surface-low/60">
          <span className="text-white/30 text-[11px] font-mono tracking-wide">
            Markdown
          </span>
          <span className="text-white/30 text-[11px] font-mono tracking-wide">
            {t("words")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
