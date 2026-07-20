import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoWriter — Calm writing, conserved.",
  description:
    "A calm, local-first plain-text writing app for iOS, macOS and HarmonyOS NEXT. Autosave, version history, trash, backups and conflict-safe sync.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
