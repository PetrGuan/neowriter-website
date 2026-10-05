# Plan

## Problem

The existing marketing site describes the retired product. Rebuild it in English
using the current iOS/iPadOS writer workspace, rather than the historical README.

## Proposed approach

User approved Quiet Paper: warm paper, petrol ink, literary typography, restrained
motion, and actual application captures. Lead with writing, projects, history,
ownership of Markdown files, optional encrypted sync, and optional AI.

## Evidence

- NeoWriter/Docs/AppStore/en-US.md: current release scope and copy restrictions.
- NeoWriter/Docs/WorkspacePrivacyDataFlows.md: encryption and external AI boundaries.
- NeoWriter/Sources/NeoWriter/Workspace/: current product surfaces.
- NeoWriter/Sources/NeoWriter/Monetization/PaywallViewController.swift: Free/Pro.
- NeoWriter/Docs/AppStore/Screenshots/source/: real captures with fictional writing.
- NeoWriter/stitch_neowriter_quiet_paper_design_system/quiet_paper/DESIGN.md: visuals.

## Implementation

Replace obsolete components and translations with an English landing page. Serve
it at `/`, preserving `/en` and `/zh` as redirects. Self-host licensed application
fonts and optimized screenshots. Add accessible navigation, screenshot tabs, FAQ,
metadata and a sitemap. Keep the static-export deployment model.

## Validation

Build only; no automated test execution. Inspect rendered desktop/mobile layouts.
No commits, pushes, application source edits, or deployment.

## Boundaries

Do not advertise Mac/HarmonyOS availability, workspace backups, WordPress,
article encryption locks, fixed Trash retention or unconditional privacy promises.
Do not treat local StoreKit prices as confirmed live prices. No confirmed store
URL was found, so explicitly show Coming soon rather than a fake download link.

## App Store review website requirement

User clarified that privacy, terms, and support are the priority for review URLs.
Implement independently addressable `/privacy/`, `/terms/`, and `/support/` pages,
with local footer links and readable, source-backed content. Describe sync pause,
API key removal, Trash/history distinctions, external recipients, subscriptions,
and support-data requests. Link Apple Standard EULA rather than inventing a custom
jurisdiction or license.

The user is unavailable to confirm operator identity, hosting, support mailbox
ownership, or a fixed support-retention period. Do not invent those facts. Refer to
the App Store-identified developer, use the existing support mailbox and domain,
state retention by purpose rather than an invented deadline, and record these as
owner publication checks. App source still links the older legal domain and must
be updated by its owner after the new site is actually deployed.
