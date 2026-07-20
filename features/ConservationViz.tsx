"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ConservationViz() {
  const t = useTranslations("features.conservation");

  const events = [
    { label: "Autosave", value: "just now", dot: "#d0bcff" },
    { label: "Version", value: "v14 snapshot", dot: "#a078ff" },
    { label: "Trash", value: "30-day hold", dot: "#e6b34d" },
  ];

  return (
    <div className="relative rounded-2xl bg-surface border border-white/[0.07] p-6 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[radial-gradient(circle,rgba(208,188,255,0.12)_0%,transparent_70%)]" />

      {/* keystrokes → saved */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-white/35">
          {t("label")}
        </span>
        <div className="flex items-center gap-1.5">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-accent-strong"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <span className="text-accent text-[11px] font-mono uppercase tracking-widest">
            Saved
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {[92, 78, 64].map((w, i) => (
          <motion.div
            key={i}
            className="h-2.5 rounded-full bg-white/[0.06]"
            style={{ width: `${w}%` }}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          />
        ))}
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-accent/40 to-transparent"
          style={{ width: "45%" }}
          animate={{ width: ["20%", "52%", "20%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="space-y-2">
        {events.map((e, i) => (
          <motion.div
            key={e.label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/[0.05] px-3 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: e.dot }}
              />
              <span className="text-on-surface text-xs font-medium">{e.label}</span>
            </div>
            <span className="text-white/35 text-[11px] font-mono">{e.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
