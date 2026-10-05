"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LaunchLink from "./LaunchLink";
import { sitePath } from "@/lib/constants";

const links = [
  { href: sitePath("/#workspace"), label: "The workspace" },
  { href: sitePath("/#your-cloud"), label: "Your cloud" },
  { href: sitePath("/support/"), label: "Support" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href={sitePath("/")} aria-label="NeoWriter home">
          <Image src={sitePath("/images/app-icon.png")} width={36} height={36} alt="" />
          <span>NeoWriter<span className="wordmark-period">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <LaunchLink className="button button-small" />
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
          }
        }}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
