import { PRIVACY_URL, SUPPORT_EMAIL, TERMS_URL } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-main">
        <a className="wordmark" href="/" aria-label="NeoWriter home">
          <span>NeoWriter<span className="wordmark-period">.</span></span>
        </a>
        <nav className="footer-links" aria-label="Footer">
          <a href="/support/">Support</a>
          <a href={PRIVACY_URL}>Privacy policy</a>
          <a href={TERMS_URL}>Terms of use</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NeoWriter. All rights reserved.</span>
        <span>MADE FOR WORDS WORTH KEEPING.</span>
      </div>
    </footer>
  );
}
