"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const views = [
  {
    label: "Write",
    number: "01",
    title: "Less interface.\nMore room to think.",
    description:
      "A page that feels like a page. Markdown lives right alongside your prose, with a reading preview when you want a fresh perspective.",
    points: ["Native writing on iPhone and iPad", "Markdown, images, and reading preview", "Your writing saved on this device"],
    image: "editor",
    alt: "NeoWriter's real iPhone editor showing Morning, Low Tide on a warm paper background",
    caption: "The editor · iPhone",
    marginNote: "Just you\nand the page.",
  },
  {
    label: "Organize",
    number: "02",
    title: "A little structure.\nA lot of possibility.",
    description:
      "Give a novel, a journal, or a collection of essays its own project. Keep your documents and folders together without turning writing into administration.",
    points: ["Separate projects for separate ideas", "Folders to give your drafts a home", "An Inbox for the thought that just arrived"],
    image: "project",
    alt: "The Salt Year project in NeoWriter, with four documents and local saved status",
    caption: "Projects & documents · iPhone",
    marginNote: "Everything,\nin its place.",
  },
  {
    label: "Revisit",
    number: "03",
    title: "A new direction.\nNot a lost draft.",
    description:
      "Writing rarely happens in a straight line. Open History to revisit earlier saves when you want to recover a passage or see where a thought began.",
    points: ["History built into your workspace", "Earlier saves, within reach", "Local writing does not require sync"],
    image: "history",
    alt: "NeoWriter's History sheet showing earlier saves of Morning, Low Tide",
    caption: "Writing history · iPhone",
    marginNote: "Leave room\nfor another draft.",
  },
  {
    label: "Make it yours",
    number: "04",
    title: "Find your type.\nSettle into the page.",
    description:
      "Choose the typography and appearance that feel right for your writing. From a sunlit desk to a late-night draft, the words stay at the center.",
    points: ["Light and dark appearances", "A choice of writing fonts", "More themes, papers, and fonts with Pro"],
    image: "editor-dark",
    alt: "NeoWriter's real dark editor with the Literata writing font",
    caption: "Dark appearance · iPhone",
    marginNote: "Your page.\nYour way.",
  },
] as const;

export default function ProductTour() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[active];

  function selectTab(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }

  return (
    <section className="tour-section section-space" id="details" aria-labelledby="tour-title">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">Thoughtfully out of your way</p>
          <h2 id="tour-title">A quieter kind of capable.</h2>
        </div>
        <div className="tour-tabs" role="tablist" aria-label="Explore NeoWriter">
          {views.map((item, index) => (
            <button
              key={item.label}
              role="tab"
              id={`tour-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`tour-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              ref={(element) => { tabs.current[index] = element; }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next: number | undefined;
                if (event.key === "ArrowRight") next = (index + 1) % views.length;
                if (event.key === "ArrowLeft") next = (index - 1 + views.length) % views.length;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = views.length - 1;
                if (next !== undefined) {
                  event.preventDefault();
                  selectTab(next);
                }
              }}
            >
              <span className="tab-number">{item.number}</span>
              {item.label}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        {views.map((item, index) => (
          <div
            key={item.label}
            id={`tour-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tour-tab-${index}`}
            hidden={active !== index}
            tabIndex={0}
            className="tour-panel"
          >
            {active === index && (
              <>
                <div className="tour-copy">
                  <span className="chapter-number">{view.number} / THE EVERYDAY DETAILS</span>
                  <h3>{view.title}</h3>
                  <p>{view.description}</p>
                  <ul className="check-list">
                    {view.points.map((point) => (
                      <li key={point}><Check size={16} aria-hidden="true" />{point}</li>
                    ))}
                  </ul>
                </div>
                <figure className={`tour-visual${active === 3 ? " tour-visual-dark" : ""}`}>
                  <span className="margin-note" aria-hidden="true">{view.marginNote}</span>
                  <div className="phone-frame tour-phone">
                    <Image
                      src={`/images/${view.image}.webp`}
                      alt={view.alt}
                      width={800}
                      height={1738}
                      sizes="(max-width: 600px) 240px, 280px"
                    />
                  </div>
                  <figcaption>{view.caption}</figcaption>
                </figure>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
