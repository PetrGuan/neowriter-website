import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export type InformationSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export default function InformationPage({
  eyebrow,
  title,
  introduction,
  sections,
  summary,
  updated,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: InformationSection[];
  summary: ReactNode;
  updated?: string;
}) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main className="shell information-page" id="main">
        <div className="information-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="information-intro">{introduction}</p>
          {updated && <p className="information-date">Last updated: <time dateTime="2026-10-05">{updated}</time></p>}
        </div>
        <div className="information-grid">
          <aside className="information-aside">
            <nav aria-label="On this page">
              <p className="eyebrow">On this page</p>
              {sections.map(({ id, title: sectionTitle }) => (
                <a key={id} href={`#${id}`}>{sectionTitle}</a>
              ))}
            </nav>
            <div className="information-related">
              <a href="/privacy/">Privacy policy</a>
              <a href="/terms/">Terms of use</a>
              <a href="/support/">Support & contact</a>
            </div>
          </aside>
          <div className="information-content">
            <div className="information-summary">{summary}</div>
            {sections.map(({ id, title: sectionTitle, content }) => (
              <section key={id} id={id} aria-labelledby={`${id}-title`}>
                <h2 id={`${id}-title`}>{sectionTitle}</h2>
                {content}
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
