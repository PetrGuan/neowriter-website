"use client";

import { motion } from "framer-motion";

const VERSIONS = [
  { v: "v14", time: "now", label: "Current draft", active: true },
  { v: "v13", time: "12m ago", label: "Added conclusion", active: false },
  { v: "v12", time: "1h ago", label: "Rewrote opening", active: false },
  { v: "v11", time: "Yesterday", label: "First full draft", active: false },
];

export default function HistoryTimeline() {
  return (
    <div className="relative rounded-2xl bg-surface border border-white/[0.07] p-6 overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(230,179,77,0.1)_0%,transparent_70%)]" />

      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-white/35">
          Version history
        </span>
        <span className="text-recovery text-[11px] font-mono uppercase tracking-widest">
          Restorable
        </span>
      </div>

      <div className="relative pl-6">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]" />

        {VERSIONS.map((ver, i) => (
          <motion.div
            key={ver.v}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative mb-4 last:mb-0"
          >
            <span
              className={`absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                ver.active
                  ? "bg-recovery border-recovery"
                  : "bg-surface border-white/20"
              }`}
            />
            <div
              className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 border ${
                ver.active
                  ? "bg-recovery/10 border-recovery/25"
                  : "bg-white/[0.03] border-white/[0.05]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-on-surface text-sm font-semibold">{ver.v}</span>
                  <span className="text-white/30 text-[11px] font-mono">{ver.time}</span>
                </div>
                <div className="text-white/40 text-xs mt-0.5">{ver.label}</div>
              </div>
              {!ver.active && (
                <span className="text-[11px] font-medium text-recovery/80 border border-recovery/25 rounded-md px-2 py-0.5">
                  Restore
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
