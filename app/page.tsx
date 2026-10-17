import Image from "next/image";
import {
  ArrowDown, ArrowUpRight, Check, Cloud, FileText, FolderOpen,
  HardDrive, KeyRound, Laptop, LockKeyhole, Plus, ShieldCheck, Smartphone, Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ProductTour from "@/components/ProductTour";
import LaunchLink from "@/components/LaunchLink";
import SiteFooter from "@/components/SiteFooter";
import { APP_STORE_URL, SUPPORT_EMAIL, sitePath } from "@/lib/constants";

const freeFeatures = [
  "Unlimited local writing",
  "Autosave and writing history",
  "Projects and folders",
  "Plain text and Markdown export",
  "iCloud sync across your Apple devices",
];

const proFeatures = [
  "Dropbox, OneDrive, and HTTPS WebDAV sync",
  "Note links, backlinks, and graph",
  "Smart folders and nested tags",
  "Your own templates and more images",
  "Rich preview for code, math, and diagrams",
  "More themes, papers, and fonts",
  "Optional AI writing assistance",
];

const questions = [
  {
    question: "Which devices is NeoWriter for?",
    answer: "iPhone, iPad, and Mac. Each is a native app built for its device, and Pro is one purchase across all three. On Mac, the interface is currently in English.",
  },
  {
    question: "Can I write without an internet connection?",
    answer: "Yes. Your workspace lives on your device, and local writing does not require sync. Connecting a cloud account is optional. Sync and external AI requests require a connection.",
  },
  {
    question: "Are my documents ordinary files?",
    answer: "Yes. Your writing is stored as Markdown files inside NeoWriter's private workspace, with images stored alongside it. Take your writing out through Export or Share; this version does not edit folders directly in the Files app or Finder.",
  },
  {
    question: "What is encrypted, and what is not?",
    answer: "When sync is enabled, writing history and assets are encrypted before they are sent to your chosen cloud account or HTTPS WebDAV server. Local Markdown files are not encrypted by the sync system. Providers can still see information such as object sizes and request timing. Save your account recovery key somewhere you can access without this device.",
  },
  {
    question: "Do I have to use AI?",
    answer: "No. AI assistance is optional and requires Pro. Suggested edits are shown as changes you accept or reject one by one, and nothing is applied until you accept it. External AI sends the disclosed text and prompt directly to the provider you configure, using your own API key. It is a separate data flow from encrypted sync. On-device assistance depends on Apple Intelligence availability and device support.",
  },
  {
    question: "How much does Pro cost?",
    answer: "Pro offers monthly, yearly, and lifetime purchase options in the app, and one purchase covers iPhone, iPad, and Mac. Every Apple Account can try Pro free for 14 days: no payment, and no automatic renewal. Confirm the current price, regional availability, and included features in the app before purchasing. We do not list unverified storefront prices here.",
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow hero-kicker"><span className="status-dot" />A writing app. A quieter place.</p>
              <h1 id="hero-title">A little room<br />for your<br /><em>words.</em></h1>
              <p className="hero-description">
                For the passing thought. The daily page. The draft that
                becomes something more. A calm Markdown workspace,
                made for iPhone, iPad, and Mac.
              </p>
              <div className="hero-ctas">
                <LaunchLink />
                <a className="text-link" href="#workspace">Meet your workspace<ArrowDown size={15} aria-hidden="true" /></a>
              </div>
              <p className="hero-platforms"><Smartphone size={13} aria-hidden="true" />iPhone & iPad<span aria-hidden="true">·</span><Laptop size={13} aria-hidden="true" />Mac<span aria-hidden="true">·</span>Start with the free essentials</p>
            </div>
            <figure className="hero-visual reveal reveal-delay">
              <div className="hero-paper" aria-hidden="true"><span className="hero-paper-label">SPACE TO WRITE / NEOWRITER</span></div>
              <div className="phone-frame hero-phone">
                <Image
                  src={sitePath("/images/editor.webp")}
                  alt="NeoWriter on iPhone: a quiet paper editor with the draft Morning, Low Tide saved on this device"
                  width={800}
                  height={1738}
                  sizes="(max-width: 760px) 250px, 264px"
                  priority
                />
              </div>
              <div className="hero-note" aria-hidden="true"><Check size={18} />A thought worth<br />keeping.</div>
              <figcaption className="hero-caption">A real page in NeoWriter. Not a mockup.</figcaption>
            </figure>
          </div>
          <div className="hero-bottom">
            <p>Less noise. More of what you came to say.</p>
            <a href="#workspace">Turn the page<ArrowDown size={14} aria-hidden="true" /></a>
          </div>
        </section>

        <div className="principles">
          <div className="shell principle-grid">
            <div className="principle"><FileText size={20} strokeWidth={1.4} aria-hidden="true" /><div><h2>Words, not a walled garden.</h2><p>Real Markdown files. Your writing to take with you.</p></div></div>
            <div className="principle"><HardDrive size={20} strokeWidth={1.4} aria-hidden="true" /><div><h2>Local comes first.</h2><p>A place to write, even when you are offline.</p></div></div>
            <div className="principle"><ShieldCheck size={20} strokeWidth={1.4} aria-hidden="true" /><div><h2>Room to change your mind.</h2><p>Earlier saves, still part of your writing history.</p></div></div>
          </div>
        </div>

        <section className="workspace-section section-space shell" id="workspace" aria-labelledby="workspace-title">
          <div className="workspace-heading">
            <div><p className="eyebrow">01 / A place for the work</p><h2 id="workspace-title">From a first thought<br />to the bigger picture.</h2></div>
            <p>A journal. A story. A folder full of beginnings. Give each project its own home, and keep the page you are writing at the heart of it.</p>
          </div>
          <figure>
            <div className="workspace-figure">
              <div className="workspace-screen">
                <Image
                  src={sitePath("/images/ipad-workspace.webp")}
                  alt="NeoWriter's real iPad workspace showing the Library, The Salt Year project, and the active Markdown document side by side"
                  width={1400}
                  height={1867}
                  sizes="(max-width: 760px) 90vw, 1020px"
                />
              </div>
            </div>
            <figcaption className="figure-caption"><span>The workspace / iPad</span><span>Actual app capture, cropped for this view. Sample writing is fictional.</span></figcaption>
          </figure>
          <div className="workspace-footnotes">
            <div><p className="eyebrow">A home for each idea</p><h3>Projects, not piles.</h3><p>Keep related documents together. A new novel need not live in the same place as yesterday&apos;s shopping list.</p></div>
            <div><p className="eyebrow">Space for the words</p><h3>Markdown, naturally.</h3><p>Headings, emphasis, lists, and images. Write with familiar Markdown, then step into a reading preview.</p></div>
            <div><p className="eyebrow">Yours beyond the app</p><h3>Take the writing with you.</h3><p>Export plain text or Markdown. When a Markdown export includes images, they travel alongside it in a ZIP. On Mac, export to PDF or print.</p></div>
          </div>
        </section>

        <section className="mac-section section-space shell" id="mac" aria-labelledby="mac-title">
          <div className="workspace-heading">
            <div><p className="eyebrow">02 / At your desk</p><h2 id="mac-title">The same quiet page.<br />Now on your Mac.</h2></div>
            <p>A native Mac app with a sidebar for your projects, room for the documents in each, and the page you are writing beside them. Your writing saves on this Mac as you go.</p>
          </div>
          <figure>
            <div className="workspace-figure mac-figure">
              <div className="mac-screen">
                <Image
                  src={sitePath("/images/mac-workspace.webp")}
                  alt="NeoWriter's real Mac window showing projects in the sidebar, the documents in The Salt Year, and the essay Morning, Low Tide open in the editor"
                  width={1440}
                  height={984}
                  sizes="(max-width: 760px) 90vw, 1020px"
                />
              </div>
            </div>
            <figcaption className="figure-caption"><span>The workspace / Mac</span><span>Actual app capture. Sample writing is fictional.</span></figcaption>
          </figure>
          <div className="workspace-footnotes">
            <div><p className="eyebrow">When a thought arrives</p><h3>Quick Capture.</h3><p>Catch an idea from the menu bar without leaving what you are doing. New NeoWriter Note in the Services menu saves text you select in other apps.</p></div>
            <div><p className="eyebrow">Stay on the keys</p><h3>Made for the keyboard.</h3><p>A command palette, Library search, an outline, and Reading and Focus views keep your hands on the keys and your eyes on the page.</p></div>
            <div><p className="eyebrow">One purchase</p><h3>Pro, wherever you write.</h3><p>Pro bought on iPhone or iPad is the same Pro on Mac, and the other way round. Sync keeps your projects together across your devices.</p></div>
          </div>
        </section>

        <ProductTour />

        <section className="cloud-section section-space" id="your-cloud" aria-labelledby="cloud-title">
          <div className="shell cloud-grid">
            <div className="cloud-copy">
              <p className="eyebrow">03 / Your cloud. Your keys.</p>
              <h2 id="cloud-title">Carry the words.<br /><em>Keep the control.</em></h2>
              <p>Start on this device. When you want your writing on another, choose your own cloud account or server. NeoWriter encrypts writing history and assets before they leave for sync.</p>
              <div className="cloud-footnote"><KeyRound size={16} aria-hidden="true" /><span>Keep your account recovery key somewhere safe, outside this device. It helps you recover your encrypted writing on another device.</span></div>
            </div>
            <div className="cloud-card" aria-label="Supported sync providers">
              <div className="cloud-card-header"><span>A destination you choose.</span><LockKeyhole size={20} strokeWidth={1.5} aria-hidden="true" /></div>
              {[
                { name: "iCloud", detail: "Across your Apple devices", tier: "FREE", icon: Cloud },
                { name: "Dropbox", detail: "Use your own account", tier: "PRO", icon: FolderOpen },
                { name: "OneDrive", detail: "Use your own account", tier: "PRO", icon: Cloud },
                { name: "HTTPS WebDAV", detail: "A compatible server you trust", tier: "PRO", icon: HardDrive },
              ].map(({ name, detail, tier, icon: Icon }) => (
                <div className="provider" key={name}><Icon size={20} strokeWidth={1.4} aria-hidden="true" /><div><div className="provider-name">{name}</div><div className="provider-detail">{detail}</div></div><span className="provider-tier">{tier}</span></div>
              ))}
              <p className="cloud-card-caption">Sync is optional. Local writing works without it.<br />Content encryption does not hide all network metadata.</p>
            </div>
          </div>
        </section>

        <section className="ai-section section-space shell" aria-labelledby="ai-title">
          <div className="ai-grid">
            <div className="ai-symbol"><Sparkles size={26} strokeWidth={1.3} aria-hidden="true" /></div>
            <div className="ai-heading"><p className="eyebrow">04 / Assistance, by invitation</p><h2 id="ai-title">A second perspective.<br />Still your voice.</h2></div>
            <div className="ai-copy"><p>When you want a hand, optional AI tools can help you rewrite, summarize, or continue a draft, or leave margin notes the way a first reader would. Suggested edits arrive as changes you accept or reject one by one, and each accepted change is kept as its own version in your writing history. Choose on-device assistance where Apple Intelligence is supported, or connect a supported provider with your own API key.</p><p className="ai-disclosure">A Pro feature, not a requirement for writing. External AI receives the disclosed text and prompt in readable form. It is separate from encrypted sync.</p></div>
          </div>
        </section>

        <section className="section-space shell" id="free-and-pro" aria-labelledby="pricing-title">
          <div className="pricing-heading">
            <div><p className="eyebrow">05 / Start simply. Go further.</p><h2 id="pricing-title">The essentials are free.<br />The possibilities grow.</h2></div>
            <p>A useful writing app from the start. Pro adds more ways to organize, personalize, and work across your own cloud services.</p>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="plan-label"><span>NeoWriter / Free</span><FileText size={18} aria-hidden="true" /></div>
              <h3>A good place to begin.</h3>
              <p>For your everyday notes, journals, and drafts.<br />The core of the writing experience.</p>
              <ul className="check-list">{freeFeatures.map((feature) => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul>
            </article>
            <article className="pricing-card pro">
              <div className="plan-label"><span>NeoWriter / Pro</span><Sparkles size={18} aria-hidden="true" /></div>
              <h3>Make room for more.</h3>
              <p>Everything in Free, with a little more range.<br />One purchase for iPhone, iPad, and Mac: monthly, yearly, or lifetime.</p>
              <ul className="check-list">{proFeatures.map((feature) => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul>
            </article>
          </div>
          <p className="pricing-note">Try Pro free for 14 days, once per Apple Account. No payment, no automatic renewal: Pro simply ends. Review current prices, feature availability, and purchase terms in the app. AI availability varies by device, region, and provider.</p>
        </section>

        <section className="faq-section section-space shell" aria-labelledby="faq-title">
          <div className="faq-grid">
            <div className="faq-heading"><p className="eyebrow">Before you turn the page</p><h2 id="faq-title">A few good<br />questions.</h2></div>
            <div className="faq-list">{questions.map(({ question, answer }) => (
              <details key={question}><summary>{question}<Plus size={17} aria-hidden="true" /></summary><p>{answer}</p></details>
            ))}</div>
          </div>
        </section>

        <section className="closing" id="availability" aria-labelledby="closing-title">
          <div className="shell">
            <Image src={sitePath("/images/app-icon.png")} alt="" width={64} height={64} />
            <h2 id="closing-title">The next page<br />is <em>yours.</em></h2>
            <p>{APP_STORE_URL ? "Make a little room for your writing. Start with NeoWriter's free essentials on iPhone, iPad, and Mac." : "A new chapter for NeoWriter. Coming soon to iPhone, iPad, and Mac. A calmer place for everything you want to write."}</p>
            {APP_STORE_URL ? <LaunchLink /> : <a className="button button-primary" href={`mailto:${SUPPORT_EMAIL}?subject=NeoWriter%20launch%20inquiry`}>Get in touch<ArrowUpRight size={16} aria-hidden="true" /></a>}
            <div className="closing-note">{APP_STORE_URL ? "IPHONE, IPAD & MAC / FREE ESSENTIALS, OPTIONAL PRO" : "IPHONE, IPAD & MAC / COMING SOON"}</div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
