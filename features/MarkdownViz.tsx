"use client";

import { motion } from "framer-motion";

export default function MarkdownViz() {
  return (
    <div className="relative rounded-2xl bg-surface border border-white/[0.07] p-6 overflow-hidden">
      <div className="absolute -bottom-20 -left-16 w-52 h-52 bg-[radial-gradient(circle,rgba(160,120,255,0.12)_0%,transparent_70%)]" />

      {/* Raw markdown line (editing) */}
      <div className="mb-5">
        <div className="text-[11px] font-mono uppercase tracking-widest text-white/35 mb-2">
          Editing
        </div>
        <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-4 py-3 font-mono text-[13px] leading-relaxed">
          <span className="text-white/70"># </span>
          <span className="text-on-surface">On Conservation</span>
          <br />
          <span className="text-accent/70">**</span>
          <span className="text-on-surface">Symmetry</span>
          <span className="text-accent/70">**</span>
          <span className="text-white/60"> implies </span>
          <span className="text-accent/70">*</span>
          <span className="text-on-surface">conservation</span>
          <span className="text-accent/70">*</span>
          <span className="text-white/60">.</span>
          <motion.span
            className="inline-block w-[2px] h-[1.05em] translate-y-[2px] ml-0.5 bg-accent"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* arrow */}
      <div className="flex justify-center mb-5">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/25"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Rendered reading mode */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-accent/80 mb-2">
          Reading
        </div>
        <div className="rounded-lg bg-white/[0.02] border border-white/[0.06] px-5 py-4">
          <div className="font-serif-canvas text-xl text-on-surface mb-2 tracking-tight">
            On Conservation
          </div>
          <p className="font-serif-canvas text-[15px] leading-relaxed text-on-surface-variant">
            <span className="font-semibold text-on-surface">Symmetry</span> implies{" "}
            <span className="italic">conservation</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
