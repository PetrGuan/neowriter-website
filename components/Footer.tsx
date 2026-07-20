import { useTranslations } from "next-intl";
import Image from "next/image";
import { PRIVACY_URL, TERMS_URL, SUPPORT_EMAIL } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/app-icon.png"
            alt="NeoWriter"
            width={24}
            height={24}
            className="rounded-md border border-white/10"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white/60 text-sm font-semibold">NeoWriter</span>
            <span className="text-white/25 text-xs">{t("tagline")}</span>
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-sm hover:text-white/50 transition-colors"
          >
            {t("privacy")}
          </a>
          <a
            href={TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-sm hover:text-white/50 transition-colors"
          >
            {t("terms")}
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-white/30 text-sm hover:text-white/50 transition-colors"
          >
            {t("support")}
          </a>
        </div>
        <div className="text-white/20 text-xs">{t("copyright")}</div>
      </div>
    </footer>
  );
}
