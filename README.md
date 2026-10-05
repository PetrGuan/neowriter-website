# NeoWriter Website

The English marketing site for NeoWriter's new iPhone and iPad writing workspace.
Warm paper, deep petrol ink, literary typography, and real application screenshots
follow the app's Quiet Paper design language.

## Development

```sh
npm install
npm run dev
```

Open <http://localhost:3000>. Legacy `/en` and `/zh` URLs redirect to the English
homepage; the retired Chinese product copy is no longer served.

```sh
npm run build
```

Next.js 16 exports the site to `out/` for a static host. Trailing-slash routes export
as directories containing `index.html`, so `/privacy/`, `/terms/`, `/support/`,
`/en/`, and `/zh/` work on ordinary static hosts without extensionless rewrites.
No runtime Next.js server or locale middleware is needed.

## Structure

- `app/page.tsx`: English product story, Free/Pro comparison, FAQ, launch section.
- `app/globals.css`: Quiet Paper tokens, responsive layouts, reduced-motion support.
- `components/SiteHeader.tsx`: responsive navigation.
- `components/ProductTour.tsx`: keyboard-accessible screenshot tabs.
- `components/LaunchLink.tsx`: verified store link or honest coming-soon anchor.
- `components/InformationPage.tsx`: legal/support page layout and section navigation.
- `app/privacy/page.tsx`: app and website Privacy Policy.
- `app/terms/page.tsx`: product terms and Apple Standard EULA link.
- `app/support/page.tsx`: contact, troubleshooting, purchases, and privacy requests.
- `lib/constants.ts`: public URLs and release availability.
- `public/images/`: optimized real app captures and social preview.
- `public/fonts/`: self-hosted app fonts and their redistribution licenses.

Stack: Next.js App Router, React 19, TypeScript, Tailwind CSS 4, lucide-react.

## Product evidence

Copy is grounded in the local `NeoWriter` repository's current
`Docs/AppStore/en-US.md`, `Docs/WorkspacePrivacyDataFlows.md`,
`Sources/NeoWriter/Workspace/`, and iOS paywall feature list. The historical app
README and older parity documents describe superseded architectures.

The site does not advertise unshipped Mac/HarmonyOS support, workspace backups,
fixed Trash retention, WordPress, or article encryption locks. It distinguishes
encrypted sync from local files and readable external AI requests. Prices are not
hard-coded from the development StoreKit configuration.

Screenshots originate from `NeoWriter/Docs/AppStore/Screenshots/source/`; sample
writing is fictional. Refresh the WebP assets when the application UI changes.
Fonts originate from `NeoWriter/Resources/Fonts/` and retain their OFL licenses.

## Launch

`APP_STORE_URL` in `lib/constants.ts` intentionally remains `null` until a verified
listing is available. Navigation then displays **Coming soon**, not a placeholder
download link. Set the real URL to activate the download CTAs across the page.
Before publishing, verify `SITE_URL`, support-mailbox ownership, the public operator
identity, actual hosting practices, support correspondence retention, and the
policy against the signed release build. The user was unavailable to confirm
these operational details; no company name, jurisdiction, or fixed retention
deadline has been invented. The policy identifies the operator via the app's
App Store developer listing and uses the existing support address.

## App Store review URLs

With the configured domain, deploy `out/` before entering these in App Store Connect:

| Field | URL |
| --- | --- |
| Marketing URL | `https://neowriter.app/` |
| Support URL | `https://neowriter.app/support/` |
| Privacy Policy URL | `https://neowriter.app/privacy/` |
| Product Terms | `https://neowriter.app/terms/` |

The application license remains Apple's Standard EULA, linked from `/terms/`.
Do not select a custom App Store EULA merely because this product terms page exists.

The local app currently links to `https://petrguan.github.io/neowriter-legal/`.
Its owner must update the in-app policy URL or make the older URL lead to the
current policy after deployment. This task does not modify the app repository,
publish a policy, submit App Privacy labels, or certify App Store acceptance.
Reconcile website disclosures, the signed build, consent prompts, and App Privacy
answers before submission. Remote erasure is not verified as a one-click app flow;
the policy explicitly explains this limitation instead of promising it.

## License

[MIT](./LICENSE). Bundled fonts retain their own licenses under `public/fonts/`.
