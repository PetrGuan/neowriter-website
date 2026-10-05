# Implementation

## Summary

- Rebuilt the English landing page using approved Quiet Paper styling, licensed
  local fonts, the new app icon, optimized real screenshots, responsive editorial
  layouts, screenshot tabs, and reduced-motion support.
- Replaced retired multilingual copy and removed unused motion/i18n dependencies.
  `/en/` and `/zh/` redirect to the English root page.
- Added `/privacy/`, `/terms/`, `/support/`, shared information-page navigation,
  local footer links, page-specific metadata, and the static sitemap.
- Product claims follow current workspace sources, paywall surfaces, App Store
  drafts, and the privacy data-flow inventory, not the historical README.
- No fake download link or unverified price. Availability stays Coming soon until
  `APP_STORE_URL` is set to a verified listing.

## Legal and support scope

Privacy distinguishes local files, encrypted sync, provider-visible metadata,
recovery keys, readable external AI input, permissions, exports, StoreKit, support
correspondence, and website requests.

Source-confirmed controls include Pause Sync for This Account, Delete Stored Key,
Trash, export, and iOS Delete App versus Offload App. History, Keychain, remote
objects/envelopes, other devices, and provider records are not promised to disappear
with local deletion. Complete remote erasure is not advertised as an app action.

Terms retain Apple's Standard EULA as the app license; they do not invent a custom
jurisdiction or replace mandatory consumer protections. Support provides private
email contact and purchase/privacy troubleshooting.

## Validation

Final production static build and TypeScript compilation succeeded. Inspected
desktop/mobile rendering, legal-route HTTP responses, image loading, mobile
navigation, screenshot-tab keyboard behavior, English alias redirect, and sitemap.
No automated test suites were executed.

## Owner publication checks

The user was unavailable to confirm:

- Ownership and monitoring of the existing `neowriter@outlook.com` mailbox.
- Final domain/host and public operator identity matching App Store.
- Support correspondence retention and locally required legal disclosures.
- Signed-build behavior, provider deletion controls, and App Privacy labels.

Completed source pages are not deployment or legal compliance certification.
The app still links the old external policy URL; after deployment its owner must
update it or arrange an appropriate redirect. The app repository was read only.
No app source, purchases, external accounts, App Store Connect settings, commits,
pushes, or deployments were changed.

## Follow-up: GitHub Pages publication

The owner subsequently requested commit/push and then explicitly authorized the
automatic Pages deployment proposed for this public repository.

- Enabled GitHub Pages with workflow publishing and HTTPS.
- Added a build-only Ubuntu Actions workflow for pushes to main and manual dispatch.
- Added build-time public URL/base-path configuration for images, navigation,
  metadata, sitemap, robots, and static language redirects.
- README now lists the actual github.io review URLs and deployment instructions.
- The prior no-commit/no-deployment statement describes only the initial local
  implementation, not these owner-authorized follow-ups.

The public app/legal operator and mailbox checks remain owner responsibilities.
No application source or App Store Connect metadata is changed by deployment.
