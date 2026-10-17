import type { Metadata } from "next";
import InformationPage, { type InformationSection } from "@/components/InformationPage";
import { APP_STORE_URL, SITE_URL, SUPPORT_EMAIL, sitePath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support & Contact — NeoWriter",
  description: "Contact NeoWriter support for writing, sync, recovery, purchases, or privacy requests on iPhone, iPad, and Mac.",
  alternates: { canonical: `${SITE_URL}/support/` },
  openGraph: { title: "Support & Contact — NeoWriter", url: `${SITE_URL}/support/` },
};

const sections: InformationSection[] = [
  {
    id: "contact",
    title: "1. Contact support",
    content: <>
      <p>Email <a href={`mailto:${SUPPORT_EMAIL}?subject=NeoWriter%20support`}>{SUPPORT_EMAIL}</a> for questions, a problem report, or a privacy request. You do not need an app account or a Pro purchase to contact us.</p>
      <p>To help us understand an issue, include:</p>
      <ul>
        <li>Your device model, iOS, iPadOS, or macOS version, and NeoWriter version.</li>
        <li>What you were trying to do, what happened, and any visible error message.</li>
        <li>Whether it involves local writing, a particular sync destination, a purchase, or external AI.</li>
        <li>Steps to reproduce it, and a redacted screenshot if helpful.</li>
      </ul>
      <p>On Mac, <strong>Help → Report a Bug…</strong> prepares these details and a local diagnostics log for you to review before sending.</p>
      <p><strong>Do not send private manuscripts, recovery keys, API keys, passwords, or cloud sign-in credentials.</strong> Redact screenshots and logs before attaching them. Support cannot retrieve secrets for you.</p>
    </>,
  },
  {
    id: "writing",
    title: "2. Writing and earlier drafts",
    content: <>
      <p>NeoWriter&apos;s current workspace is for iPhone, iPad, and Mac. Writing lives locally in Markdown files; a cloud connection is not required for local editing.</p>
      <p>If an earlier passage is missing, check the document&apos;s History. If a document was removed, check the project&apos;s Trash. Deleted projects can appear in the Library&apos;s Trash. Restoring an earlier version saves it as a new version, so the current draft stays in history. If two devices changed the same lines, look for a conflict copy next to the document and compare both before deleting either. Before restoring or deleting anything, keep an export of the current writing if you can.</p>
      <p>If an error suggests a save did not complete, keep the app open and preserve the text by copying or exporting it where possible. Do not reinstall the app as a first troubleshooting step: deleting the app can remove its local workspace.</p>
    </>,
  },
  {
    id: "sync",
    title: "3. Sync and your recovery key",
    content: <>
      <p>On iPhone and iPad, check the destination, connection, and visible status in Settings → Sync; on Mac, use Settings → Library. iCloud sync is included in Free; Dropbox, OneDrive, and HTTPS WebDAV require Pro. Confirm available provider storage and that you are using the intended account.</p>
      <p>To stop future transfers from this device, use <strong>Pause Sync for This Account</strong> on iPhone or iPad, or turn off <strong>Allow Encrypted Sync</strong> on Mac, and check for a successful paused state. Repeat on any other participating device. Pausing does not erase cloud copies or revoke every provider credential.</p>
      <p>A recovery key helps another device access your encrypted library. Keep it somewhere independent of this device; on Mac, the Recovery Key sheet can save it to a file. Do not email it to support. A replacement key does not revoke older keys, and support cannot reconstruct a lost key.</p>
      <p>For a sync issue, include the provider name and the redacted status message. Do not delete local work or remote files to force a resync before you have preserved the writing.</p>
    </>,
  },
  {
    id: "ai",
    title: "4. Optional AI",
    content: <>
      <p>AI tools require Pro. On-device assistance depends on Apple Intelligence support and availability. External assistance requires a configured supported provider, usable model, your own API key, and network access. Provider charges are separate.</p>
      <p>Review the recipient and request scope before sending. External requests contain readable text and instructions; they are not protected by workspace sync encryption.</p>
      <p>Proposed AI edits are applied only when you accept them, one change at a time. On iPhone or iPad, use Settings → AI with Your Key → <strong>Delete Stored Key</strong> to remove a saved API key from this device. Revoke it in the provider&apos;s account to invalidate it there as well. For troubleshooting, send the provider, model name, and redacted error—not the key or request&apos;s private writing.</p>
    </>,
  },
  {
    id: "purchases",
    title: "5. Pro, billing, and refunds",
    content: <>
      <p>Review current Free and Pro capabilities and available plans inside the app. Purchase and renewal confirmations show the actual storefront price and terms.</p>
      <ul>
        <li><strong>Restore Pro:</strong> use Restore Purchases or Restore in the app with the Apple Account that made the purchase. Pro is one purchase across iPhone, iPad, and Mac.</li>
        <li><strong>Free trial:</strong> each Apple Account can try Pro free for 14 days. The trial never turns into a payment; when it ends, Pro simply ends.</li>
        <li><strong>Manage a subscription:</strong> on iPhone or iPad, open Settings → your name → Subscriptions → NeoWriter; on Mac, open the App Store, click your name, then Account Settings → Subscriptions.</li>
        <li><strong>Request a refund:</strong> use <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">Apple&apos;s Report a Problem</a>. Apple decides eligibility.</li>
      </ul>
      <p>Uninstalling the app does not cancel an auto-renewing subscription. For a support request, describe the purchased plan and the problem; do not send full payment details, account passwords, or an unredacted receipt containing personal information.</p>
    </>,
  },
  {
    id: "privacy-requests",
    title: "6. Privacy and deletion requests",
    content: <>
      <p>For a privacy question or a request concerning support information we hold, email <a href={`mailto:${SUPPORT_EMAIL}?subject=NeoWriter%20privacy%20request`}>{SUPPORT_EMAIL}</a> with the subject “NeoWriter privacy request.” Tell us whether you seek access, correction, or deletion, and which previous support conversation is involved.</p>
      <p>Do not include secrets or the full contents of your writing. We may need limited verification to protect your information, and will explain relevant legal or technical limits.</p>
      <p>Use <a href={sitePath("/privacy/#retention-deletion")}>the Privacy Policy&apos;s retention and deletion instructions</a> to distinguish local documents, Trash, history, device backups, cloud objects, keys, exports, and past AI requests. There is no single app action that guarantees erasure of every historical or remote copy. We cannot directly delete data held solely by your selected provider or server.</p>
      <p>For copies held by Apple, a cloud service, a server operator, or an AI provider, use that recipient&apos;s account and privacy controls as well. If unsure which recipient applies, contact us without including private content.</p>
    </>,
  },
  {
    id: "review-information",
    title: "7. Product and legal information",
    content: <>
      <p>This site describes the current iPhone, iPad, and Mac workspace. {APP_STORE_URL ? <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">View NeoWriter on the App Store.</a> : "The app is being prepared for release; the site will link to its verified App Store listing when available."} Future features are not advertised as available in this release.</p>
      <p>The <a href={sitePath("/privacy/")}>Privacy Policy</a> covers current workspace storage, optional encrypted sync, external AI, permissions, purchases, website visits, and support. The <a href={sitePath("/terms/")}>Terms of Use</a> link to Apple&apos;s Standard EULA and describe Free and Pro, purchase handling, and your content rights.</p>
      <p>For product or review questions, use the support email above. This website does not provide a demo account, handle StoreKit purchases, or replace the app&apos;s consent prompts.</p>
    </>,
  },
];

export default function SupportPage() {
  return (
    <InformationPage
      eyebrow="NeoWriter / Support"
      title="A little help, when you need it."
      introduction="Writing, sync, purchases, or privacy. Here is where to start—and how to contact us without exposing your words."
      sections={sections}
      summary={<><h2>A direct line</h2><p><a href={`mailto:${SUPPORT_EMAIL}?subject=NeoWriter%20support`}>{SUPPORT_EMAIL}</a></p><p>Include your app and system versions, the action you tried, and a redacted error message. Never send recovery keys, API keys, passwords, or private writing.</p></>}
    />
  );
}
