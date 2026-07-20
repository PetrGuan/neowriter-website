"use client";

import { motion } from "framer-motion";
import { AppleIcon, HarmonyIcon } from "@/components/Icons";

function MiniLines({ widths }: { widths: number[] }) {
  return (
    <div className="space-y-1.5">
      {widths.map((w, i) => (
        <div
          key={i}
          className="h-1.5 rounded-full bg-white/[0.1]"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

export default function PlatformsViz() {
  return (
    <div className="relative rounded-2xl bg-surface border border-white/[0.07] p-6 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-[radial-gradient(circle,rgba(208,188,255,0.12)_0%,transparent_70%)]" />

      <div className="flex items-end justify-center gap-4 py-4">
        {/* Mac window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-[46%] rounded-lg bg-surface-low border border-white/10 overflow-hidden shadow-xl"
        >
          <div className="flex items-center gap-1 px-2.5 h-6 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
            <AppleIcon className="w-2.5 h-2.5 text-white/30 ml-auto" />
          </div>
          <div className="p-3">
            <div className="font-serif-canvas text-[11px] text-on-surface mb-2">
              On Conservation
            </div>
            <MiniLines widths={[100, 88, 94, 70]} />
          </div>
        </motion.div>

        {/* iPhone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-[24%] rounded-[18px] bg-surface-low border-2 border-white/10 overflow-hidden shadow-xl"
        >
          <div className="flex justify-center pt-1.5 pb-1">
            <span className="w-8 h-1.5 rounded-full bg-black/60" />
          </div>
          <div className="px-2.5 pb-3">
            <div className="font-serif-canvas text-[9px] text-on-surface mb-2">
              On Conservation
            </div>
            <MiniLines widths={[100, 80, 92]} />
          </div>
        </motion.div>

        {/* Harmony tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-[38%] rounded-[14px] bg-surface-low border border-white/10 overflow-hidden shadow-xl"
        >
          <div className="flex items-center gap-1.5 px-2.5 h-6 border-b border-white/[0.06] bg-white/[0.02]">
            <HarmonyIcon className="w-3 h-3 text-accent" />
            <span className="text-white/30 text-[9px] font-mono">HarmonyOS</span>
          </div>
          <div className="p-3">
            <div className="font-serif-canvas text-[10px] text-on-surface mb-2">
              On Conservation
            </div>
            <MiniLines widths={[100, 90, 82]} />
          </div>
        </motion.div>
      </div>

      {/* Sync bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex items-center justify-center gap-2"
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent/40" />
        <span className="text-accent/80 text-[11px] font-mono uppercase tracking-widest">
          In sync
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent/40" />
      </motion.div>
    </div>
  );
}
