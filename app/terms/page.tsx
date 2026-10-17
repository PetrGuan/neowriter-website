import type { Metadata } from "next";
import InformationPage, { type InformationSection } from "@/components/InformationPage";
import { APPLE_EULA_URL, SITE_URL, SUPPORT_EMAIL, sitePath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use — NeoWriter",
  description: "NeoWriter's terms for writing ownership, optional cloud and AI services, Free and Pro, Apple purchases, and support.",
  alternates: { canonical: `${SITE_URL}/terms/` },
  openGraph: { title: "Terms of Use — NeoWriter", url: `${SITE_URL}/terms/` },
};

const sections: InformationSection[] = [
  {
    id: "agreement",
    title: "1. The app license and these terms",
    content: <>
      <p>NeoWriter is provided by the developer identified on its App Store listing. These terms explain use of the current iPhone, iPad, and Mac app, optional services, this website, and support. They do not promise availability of any future feature.</p>
      <p>The license for the App Store application is governed by <a href={APPLE_EULA_URL} target="_blank" rel="noopener noreferrer">Apple&apos;s Standard Licensed Application End User License Agreement (EULA)</a>, unless a different applicable license is expressly provided in the App Store. These product terms supplement that license; they do not replace it or limit mandatory consumer rights.</p>
      <p>If a provision here conflicts with the applicable app license, Apple&apos;s purchase terms, or mandatory law, those controlling terms or laws apply to that issue.</p>
    </>,
  },
  {
    id: "your-writing",
    title: "2. Your writing belongs to you",
    content: <>
      <p>You retain your rights in the writing, images, and other material you create or import. Using NeoWriter does not transfer ownership of that material to us.</p>
      <p>You are responsible for having the rights needed to import, copy, export, or send material to an external recipient. When you choose sync, sharing, or AI, you authorize the processing necessary for that action, subject to the <a href={sitePath("/privacy/")}>Privacy Policy</a> and the recipient&apos;s applicable terms. This is not a license for NeoWriter to publish your private writing.</p>
      <p>The NeoWriter app, brand, and site remain subject to their respective intellectual-property rights. Bundled open-source components and fonts have their own licenses.</p>
    </>,
  },
  {
    id: "responsible-use",
    title: "3. Responsible use",
    content: <>
      <p>Use the app and connected services lawfully. Do not use them to infringe another person&apos;s rights, access an account or server without authorization, distribute malicious software, or interfere with a service. The restrictions and permissions in the applicable app and open-source licenses continue to apply.</p>
      <p>You are responsible for keeping your device, provider credentials, API keys, and recovery keys secure. Do not share them with support. Obtain any parent or guardian permission required for a purchase or service and comply with the age requirements of your chosen external providers.</p>
    </>,
  },
  {
    id: "purchases",
    title: "4. Free features and Pro purchases",
    content: <>
      <p>NeoWriter includes free local writing features. Pro unlocks the paid capabilities displayed in the app. Some features depend on device, operating-system, region, provider, or language availability; purchasing Pro does not make an unavailable Apple service or third-party model available.</p>
      <p>Available purchase options can include monthly and yearly auto-renewing subscriptions and a lifetime non-consumable purchase. Review the price, billing period, currency, taxes, renewal terms, and included features shown in Apple&apos;s purchase confirmation before authorizing payment. Storefront availability and prices can vary. Pro is one entitlement across iPhone, iPad, and Mac.</p>
      <ul>
        <li><strong>Subscriptions:</strong> Apple charges the Apple Account used for purchase. Auto-renewing subscriptions renew unless canceled under the terms displayed by Apple. Manage or cancel them in Settings → your name → Subscriptions on iPhone or iPad, or in the App Store&apos;s account settings on Mac. Deleting NeoWriter, pausing sync, or deleting an API key does not cancel a subscription.</li>
        <li><strong>Lifetime purchase:</strong> where offered, it is a one-time purchase granting the Pro entitlement rather than a recurring subscription. It does not promise perpetual operation of every external service or support for every future device.</li>
        <li><strong>Free trial:</strong> each Apple Account can try Pro free for 14 days, once. The trial is not a subscription and never turns into a payment; when it ends, Pro simply ends. What you made with Pro stays readable and usable; making new Pro items or using Pro features then needs a plan. Rely on the actual offer presented in the app and Apple&apos;s confirmation.</li>
        <li><strong>Restore purchases:</strong> use the app&apos;s Restore Purchases or Restore action with the Apple Account that made the purchase. Entitlements depend on the verified purchase and applicable platform rules.</li>
        <li><strong>Refunds and billing:</strong> Apple handles billing and refund eligibility. Request a refund through <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> where applicable; NeoWriter cannot guarantee Apple&apos;s decision.</li>
      </ul>
      <p>Provider subscriptions, API charges, cloud storage, and network charges are separate from NeoWriter Pro. A Pro purchase does not include credits from an external AI provider or storage from your cloud provider.</p>
    </>,
  },
  {
    id: "sync",
    title: "5. Local storage and optional sync",
    content: <>
      <p>You can write locally without enabling sync. If you enable it, you choose and authorize a destination. You are responsible for that account&apos;s access, storage capacity, and provider terms. An internet connection and an operational compatible destination are needed for transfers.</p>
      <p>NeoWriter encrypts writing-history and asset content before sync transport. This is not encryption of the local workspace files, exported files, or separate AI requests, and it does not hide all provider-visible metadata. See the <a href={sitePath("/privacy/#cloud-sync")}>Privacy Policy</a> for the boundaries.</p>
      <p>Store your recovery key safely outside the device. Replacing a recovery key does not invalidate earlier keys. A lost key, deleted cloud data, provider outage, storage failure, or another device&apos;s changes can affect access and recovery. Support cannot guarantee reconstruction of content or decryption without the required keys.</p>
    </>,
  },
  {
    id: "ai",
    title: "6. Optional AI and other external services",
    content: <>
      <p>AI assistance is optional. You choose whether to use it and, for external AI, the provider, model, endpoint, and API key. Read the disclosed request scope before sending text. The recipient&apos;s terms, eligibility rules, usage limits, charges, retention, and privacy practices apply to its service.</p>
      <p>AI output can be inaccurate, incomplete, biased, or similar to material generated for another user. Proposed edits are shown for review and are not applied until you accept them. Review output before accepting, publishing, or relying on it, and check any applicable rights. It is not professional legal, medical, financial, or other regulated advice.</p>
      <p>Third-party cloud services, custom WebDAV servers, Apple services, and external AI can change or become unavailable. We do not control their operations or promise that every provider will remain compatible indefinitely.</p>
    </>,
  },
  {
    id: "recovery-deletion",
    title: "7. History, export, and deletion",
    content: <>
      <p>Autosave, history, and recovery tools help preserve writing; they are not an absolute guarantee against data loss. History maintenance can reduce intermediate versions and remove unused assets. An older version may not include every historical image.</p>
      <p>Keep independent exports of important work. Review exported contents and recipients before sharing. Deletion, Trash, historical copies, other devices, cloud destinations, Keychain, and device backups have different retention rules. Removing a document or deleting the app does not prove every copy has been erased.</p>
      <p>Read <a href={sitePath("/privacy/#retention-deletion")}>retention and deletion controls</a> and <a href={sitePath("/support/#privacy-requests")}>privacy request instructions</a> before a destructive action. Stopping a service does not retract information already sent to another party.</p>
    </>,
  },
  {
    id: "availability",
    title: "8. Availability, warranties, and your rights",
    content: <>
      <p>We aim to provide a useful and reliable writing app, but cannot promise uninterrupted operation, complete error-free behavior, guaranteed recovery, or indefinite compatibility with every device or external service.</p>
      <p>Warranty and liability provisions for the app are those of the applicable app license, subject to applicable law. Nothing on this page excludes liability that cannot lawfully be excluded, removes mandatory remedies, or limits statutory consumer or privacy rights.</p>
      <p>No additional exclusive court, arbitration requirement, or choice of national law is imposed by this page. Applicable law and the controlling app license govern those questions.</p>
    </>,
  },
  {
    id: "changes",
    title: "9. Changes and ending use",
    content: <>
      <p>Updates can change features or compatibility. We will publish revisions to these terms here with an updated date; additional notice or agreement will be provided where required by law. These terms do not create a promise that a planned feature will ship.</p>
      <p>You can stop using NeoWriter. Export anything you wish to keep, cancel any subscription separately through Apple, and use the appropriate device and provider controls to remove copies or revoke permissions. The app license governs license termination.</p>
    </>,
  },
  {
    id: "contact",
    title: "10. Contact",
    content: <>
      <p>Questions about these terms, purchases, or the app: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. See <a href={sitePath("/support/")}>Support</a> for useful troubleshooting information and <a href={sitePath("/privacy/")}>Privacy</a> for data-handling and request details.</p>
    </>,
  },
];

export default function TermsPage() {
  return (
    <InformationPage
      eyebrow="NeoWriter / Terms"
      title="A few things, in writing."
      introduction="Terms of Use for the current NeoWriter app, optional services, and this website."
      updated="17 October 2026"
      sections={sections}
      summary={<><h2>In plain language</h2><p>Your writing belongs to you. Apple&apos;s Standard EULA governs the app license. Pro purchases are processed by Apple, and your chosen cloud and AI providers have separate terms. Keep your keys private, review external transfers, and keep independent copies of important writing.</p><p><a href={APPLE_EULA_URL} target="_blank" rel="noopener noreferrer">Read Apple&apos;s Standard EULA →</a></p></>}
    />
  );
}
