"use client";

import { motion } from "framer-motion";

function DeviceDoc({
  name,
  lines,
  accent,
}: {
  name: string;
  lines: number[];
  accent: string;
}) {
  return (
    <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
        <span className="text-white/45 text-[11px] font-mono">{name}</span>
      </div>
      <div className="space-y-1.5">
        {lines.map((w, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full bg-white/[0.08]"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SyncConflictViz() {
  return (
    <div className="relative rounded-2xl bg-surface border border-white/[0.07] p-6 overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(179,157,219,0.12)_0%,transparent_70%)]" />

      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-white/35">
          Sync
        </span>
        <span className="text-conflict text-[11px] font-mono uppercase tracking-widest">
          Kept both
        </span>
      </div>

      {/* Two diverging devices */}
      <div className="flex gap-3 mb-4">
        <DeviceDoc name="iPhone" lines={[90, 70, 82]} accent="#d0bcff" />
        <DeviceDoc name="Mac" lines={[88, 60, 74]} accent="#a078ff" />
      </div>

      {/* Merge indicator */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-conflict/40" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="text-conflict text-[11px] font-mono px-2 py-0.5 rounded-full border border-conflict/30 bg-conflict/10"
        >
          diverged
        </motion.div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-conflict/40" />
      </div>

      {/* Result: both preserved, no overwrite */}
      <div className="space-y-2">
        <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2.5">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-on-surface text-xs font-medium flex-1">
            On Conservation
          </span>
          <span className="text-white/30 text-[11px] font-mono">local</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2.5 rounded-lg bg-conflict/10 border border-conflict/25 px-3 py-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-conflict" />
          <span className="text-on-surface text-xs font-medium flex-1">
            On Conservation{" "}
            <span className="text-conflict">(Sync conflict copy)</span>
          </span>
          <span className="text-white/30 text-[11px] font-mono">synced</span>
        </motion.div>
      </div>
    </div>
  );
}
