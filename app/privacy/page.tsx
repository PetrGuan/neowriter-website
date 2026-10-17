import type { Metadata } from "next";
import InformationPage, { type InformationSection } from "@/components/InformationPage";
import { SITE_URL, SUPPORT_EMAIL, sitePath } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — NeoWriter",
  description: "How NeoWriter handles local writing, encrypted cloud sync, optional AI, purchases, website visits, and privacy requests.",
  alternates: { canonical: `${SITE_URL}/privacy/` },
  openGraph: { title: "Privacy Policy — NeoWriter", url: `${SITE_URL}/privacy/` },
};

const sections: InformationSection[] = [
  {
    id: "scope",
    title: "1. Who this policy covers",
    content: <>
      <p>This policy covers the current NeoWriter writing workspace for iPhone, iPad, and Mac, this product website, and communications with NeoWriter support. It does not describe an older NeoWriter storage system or promise features that are not included in the current app.</p>
      <p>“NeoWriter,” “we,” and “us” refer to the application developer identified on NeoWriter&apos;s App Store listing. For privacy questions and requests, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. The services you choose to connect, and Apple&apos;s App Store and operating-system services, have their own privacy policies.</p>
    </>,
  },
  {
    id: "local-writing",
    title: "2. Your writing on your device",
    content: <>
      <p>NeoWriter stores documents as Markdown files in private app workspaces. Those workspaces also contain images, project organization, writing history, and shared metadata. Device-local journals, indexes, and preferences support saving, search, editing, and recovery.</p>
      <p>Local writing does not require enabling cloud synchronization. NeoWriter&apos;s sync encryption does <strong>not</strong> encrypt the local workspace files. Device passcodes, operating-system data protection, device backups, and the security of your device are separate protections. Appearance settings, such as themes, typography, and imported fonts, stay on each device and are not synced.</p>
      <p>Turning off sync does not prevent a transfer you separately choose through export, sharing, or external AI.</p>
    </>,
  },
  {
    id: "cloud-sync",
    title: "3. Optional cloud synchronization",
    content: <>
      <p>If you enable sync, you select iCloud, Dropbox, OneDrive, or a compatible HTTPS WebDAV server. Writing-history packs, sync announcements, and image contents are encrypted on the device before transport. Account recovery envelopes and workspace-key envelopes are sent to the selected destination to support access from another device.</p>
      <p>The destination receives the encrypted objects and can still observe account and authentication information, object identifiers, sizes, network information such as your IP address, and request timing. Content encryption does not conceal all metadata. The cloud provider or server operator handles that information under its own policies.</p>
      <p>Enabling sync can authorize subsequent automatic transfers; it is not an approval prompt for every upload. Cloud sign-in uses the provider&apos;s authentication service. OAuth credentials and configured WebDAV credentials are kept in Keychain. Do not connect an account or server you do not trust.</p>
      <p>To stop future sync from a device: on iPhone or iPad, open <strong>Settings → Sync → Pause Sync for This Account</strong> and confirm that sync is paused without an error; on Mac, open <strong>Settings → Library</strong> and turn off <strong>Allow Encrypted Sync</strong>. Repeat on other devices where sync is enabled. Pausing sync does not delete existing remote copies or necessarily revoke a provider&apos;s authorization. You can also revoke NeoWriter&apos;s connection using your provider&apos;s account security controls.</p>
    </>,
  },
  {
    id: "recovery",
    title: "4. Keys and account recovery",
    content: <>
      <p>An account recovery key covers the workspaces in that account. Keep a copy somewhere you can access without the device you write on. Account records are stored in device-only Keychain; recovery and workspace-key envelopes support access through your selected sync destination.</p>
      <p>Creating a replacement recovery key does <strong>not</strong> revoke an earlier recovery key. Keep all keys private. A recovery key is not a guarantee that every deleted or lost document can be recovered, and support cannot reconstruct a missing key or decrypt your content for you.</p>
      <p>Biometric authentication, when available, is handled by Apple&apos;s device authentication system to protect actions such as displaying a recovery key. NeoWriter does not receive your Face ID or Touch ID biometric data. On Mac, the Recovery Key sheet can save the key to a file you choose; protect that file as you would the key itself.</p>
    </>,
  },
  {
    id: "ai",
    title: "5. Optional AI assistance",
    content: <>
      <p>AI is optional. On-device writing assistance, where supported, uses Apple&apos;s on-device language model and is separate from AI configured with your own API key. Availability depends on the device, operating system, language, region, and model availability.</p>
      <p>External AI requests go directly to the recipient you configure, not through a NeoWriter AI proxy. Configurable recipients include Anthropic, OpenAI, DeepSeek, OpenRouter, Grok, Google AI Studio, and a custom OpenAI-compatible endpoint. A custom endpoint&apos;s operator is a recipient too.</p>
      <p>The recipient receives the <strong>readable text and prompt disclosed for the request</strong>, the model selection, and the API credential needed to process it. Depending on the action, input can be a selection, a paragraph, an article, or text before the cursor; margin notes and proposed edits for a document use that document&apos;s text. Do not assume only highlighted text is sent. Review the request&apos;s destination and scope before sending sensitive writing.</p>
      <p>The recipient may associate the request with your account or API key and see network and request metadata. Its retention, training, and other uses are governed by its own policies and your account settings. Encrypted cloud sync does not protect a separate AI request.</p>
      <p>API keys are stored in device-only Keychain and are not synchronized by NeoWriter. To remove a stored key on iPhone or iPad, open <strong>Settings → AI with Your Key → Delete Stored Key</strong>. To invalidate the credential itself on any device, including Mac, revoke it in the provider&apos;s account. Do not make further external AI requests if you withdraw permission. Removing a key, pausing sync, or turning off an AI preference does not erase requests already received by a provider.</p>
    </>,
  },
  {
    id: "device-services",
    title: "6. Images, permissions, and Apple services",
    content: <>
      <p>You can select images and import files or text into a workspace. Selected content becomes part of your local writing and can later be included in sync or exports. Apple&apos;s photo picker lets you choose items; using it is not permission for NeoWriter to upload your entire photo library.</p>
      <p>Where available, text recognition uses Apple&apos;s Vision framework, read-aloud uses Apple&apos;s speech synthesizer, and translation uses Apple&apos;s Translation service and language resources. Apple&apos;s service availability, downloads, and privacy practices are separate from NeoWriter&apos;s external AI flow.</p>
      <p>System permission prompts may appear for supported functions, such as local-network access to a WebDAV server or notifications for writing reminders. You can manage permissions in iOS or iPadOS Settings, or in macOS System Settings. Denying a permission can limit its related feature; it does not enable another transfer without your choice.</p>
    </>,
  },
  {
    id: "sharing",
    title: "7. Exporting and sharing",
    content: <>
      <p>Export creates a file from the content you select. An export may contain text, images, or a complete project rather than just the visible paragraph. A Markdown export with images can be packaged as a ZIP.</p>
      <p>On Mac, you can also export a document to PDF or print it. Quick Capture in the menu bar and New NeoWriter Note in the Services menu create local workspace content from what you type or select; those actions do not themselves send it anywhere.</p>
      <p>The system share sheet lets you choose an app, account, person, or destination. Exported copies are <strong>not protected by NeoWriter&apos;s sync encryption</strong> simply because the original workspace uses sync. The recipient handles the exported copy under its own practices. Review the file and destination before sharing.</p>
    </>,
  },
  {
    id: "purchases",
    title: "8. Purchases",
    content: <>
      <p>Apple processes in-app purchases through StoreKit. NeoWriter uses transaction and entitlement information to enable and restore purchased features, and can keep entitlement state locally for offline use. NeoWriter does not receive payment-card details through StoreKit.</p>
      <p>Billing, refund requests, subscription management, and Apple&apos;s handling of purchase information are governed by Apple&apos;s terms and privacy practices. See our <a href={sitePath("/terms/#purchases")}>purchase terms</a> and <a href={sitePath("/support/#purchases")}>purchase support</a>.</p>
    </>,
  },
  {
    id: "diagnostics-support",
    title: "9. Diagnostics and support messages",
    content: <>
      <p>The app contains local diagnostic logging to help investigate failures and operations. Apple may handle operating-system diagnostics according to your device settings. The presence of local logging is not a guarantee that all diagnostic information stays off Apple&apos;s systems.</p>
      <p>On Mac, <strong>Help → Report a Bug…</strong> prepares a message with device and app details, a local diagnostics log, and available MetricKit reports for you to preview. Nothing is sent until you choose to email or share it, and you can remove anything you do not want to include.</p>
      <p>When you email support, we receive your email address, message, and any attachments you choose to send. Our email service processes those messages to deliver and store them. We use them to answer the request, investigate a reported problem, and maintain necessary support or legal records—not as permission to publish your writing.</p>
      <p>Only send the information needed for the issue. Remove private writing and never include passwords, API keys, recovery keys, or cloud credentials. Public issue trackers are public, not a private support channel.</p>
      <p>Support information may be retained while it is needed to resolve and follow up on your request, maintain necessary records, or satisfy legal obligations. You may request deletion of information you sent us at <a href={`mailto:${SUPPORT_EMAIL}?subject=NeoWriter%20privacy%20request`}>{SUPPORT_EMAIL}</a>. We will explain any information that must be retained or is outside our control. No fixed automatic deletion period is specified for support correspondence.</p>
    </>,
  },
  {
    id: "website",
    title: "10. This website",
    content: <>
      <p>This website provides product information, legal pages, and support contact details. It does not require a user account. The site itself does not set advertising or analytics cookies, embed third-party tracking analytics, or load fonts from a third-party font service.</p>
      <p>When you visit, the hosting provider necessarily processes requests to deliver the pages and may record technical information, such as IP address, requested URL, browser information, and timestamps, for delivery, security, or operational purposes. A static website is not the same as a website that receives no visitor information.</p>
      <p>Following an external link takes you to a separate site with its own policy. Clicking an email link opens your email application; information is sent to support when you send the message, not merely when you visit this page.</p>
    </>,
  },
  {
    id: "retention-deletion",
    title: "11. Retention, deletion, and your controls",
    content: <>
      <p>Current documents remain in your workspace until you remove them or delete the app&apos;s local data. Trash and history can retain earlier or deleted writing for recovery. Maintenance can reduce older intermediate history and collect unused assets; not every save or historical image is retained indefinitely.</p>
      <ul>
        <li><strong>Export first:</strong> use Export or Share to keep an independent copy of writing you want to preserve.</li>
        <li><strong>Remove current content:</strong> use Move to Trash in the project or document menu. Use Trash&apos;s Delete or Empty Trash action to remove its retained current copy. Earlier text can remain in writing history; emptying Trash is not a secure erasure of every historical copy.</li>
        <li><strong>Stop transfers:</strong> pause sync on every participating device, remove stored external AI keys, and revoke provider authorizations or API keys through the provider&apos;s controls as appropriate.</li>
        <li><strong>Remove local app files:</strong> use iOS or iPadOS Settings → General → iPhone Storage or iPad Storage → NeoWriter → Delete App. Offload App is different and preserves app documents. On Mac, deleting the app from the Applications folder can leave its container data in your user Library. Deleting the app is not a promise that Keychain entries, device backups, or other devices&apos; copies are deleted.</li>
        <li><strong>Address remote copies separately:</strong> cloud objects, history, assets, and recovery envelopes can remain after local deletion or pausing sync. Use your provider&apos;s data-management controls or contact its support for deletion of data in your account. A WebDAV server operator controls its storage and backups. Deleting an iCloud Drive folder is not a verified way to delete NeoWriter&apos;s private CloudKit records.</li>
        <li><strong>Contact us:</strong> request access, correction, or deletion of support information we hold, or ask for help identifying the relevant recipient for a privacy request. We cannot access, erase, or guarantee erasure of data held solely in your cloud account, server, device backup, exported copy, or an AI provider&apos;s records.</li>
      </ul>
      <p>NeoWriter does not provide a single action that proves every historical and remote copy has been erased. Pausing, deleting, and withdrawing consent affect future use; they do not retract information already shared. Provider retention, backups, device synchronization, and legal obligations can affect when a copy is removed.</p>
    </>,
  },
  {
    id: "rights",
    title: "12. Privacy requests and applicable rights",
    content: <>
      <p>Depending on applicable law, you may have rights to access, correct, delete, restrict, or receive a copy of personal information, object to processing, withdraw consent, or complain to a competent privacy authority. Not all rights apply to every situation or recipient.</p>
      <p>Send requests concerning information held by NeoWriter support to <a href={`mailto:${SUPPORT_EMAIL}?subject=NeoWriter%20privacy%20request`}>{SUPPORT_EMAIL}</a>. Describe the request without sending secrets or private document contents. We may ask for proportionate verification to avoid disclosing information to the wrong person. Requests concerning Apple, your cloud provider, your server, or an AI provider should also be directed to that recipient.</p>
      <p>Nothing in this policy waives any privacy rights you have under applicable law.</p>
    </>,
  },
  {
    id: "children",
    title: "13. Younger users",
    content: <>
      <p>NeoWriter is a general-purpose writing app, not a child-directed social service. A younger user should obtain any parent or guardian permission required by local law and by Apple or an external provider before purchases or external transfers. A provider may impose its own minimum age.</p>
      <p>If you believe a child has sent personal information to NeoWriter support without the permission required by law, contact us so the request and appropriate deletion can be addressed. We do not infer that children&apos;s information cannot be received merely because the app stores writing locally.</p>
    </>,
  },
  {
    id: "changes-contact",
    title: "14. Changes and contact",
    content: <>
      <p>Policy revisions will be published at this address with an updated date. Please review it when deciding whether to use optional transfers. Where applicable law requires additional notice or permission for a change, those requirements continue to apply.</p>
      <p>Privacy and support contact: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. The <a href={sitePath("/support/")}>Support page</a> explains what to include in a request and how to avoid exposing sensitive information.</p>
    </>,
  },
];

export default function PrivacyPage() {
  return (
    <InformationPage
      eyebrow="NeoWriter / Privacy"
      title="Your words. Clear boundaries."
      introduction="Privacy Policy for NeoWriter on iPhone, iPad, and Mac, this website, and our support communications."
      updated="17 October 2026"
      sections={sections}
      summary={<><h2>The short version</h2><p>Your writing starts on your device. Sync is optional and encrypts content sent to your chosen destination. External AI is a separate choice and receives the readable input disclosed for that request. Exported copies, provider metadata, and messages you send support have their own boundaries.</p><p><strong>Local-first does not mean that no information is ever processed off your device.</strong> This policy explains the differences and your controls.</p></>}
    />
  );
}
