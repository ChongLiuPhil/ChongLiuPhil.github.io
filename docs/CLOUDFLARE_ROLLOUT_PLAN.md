# Cloudflare migration plan — management-only

Status: **planning only**. This records a future hosting/access migration and does not change the current GitHub Pages homepage, source visibility, formal URL, content, or provider state.

## Current-state preservation
- Keep the existing public source repository and current GitHub Pages site active.
- Do not change `https://chongliuphil.github.io/`, disable Pages, redirect traffic, change repository visibility, or alter canonical links in this phase.
- Do not select a custom domain or DNS change.

## Target management state
- Target provider: Cloudflare Workers / Static Assets.
- Planned Worker: `academic-homepage`.
- Target Web visibility: restricted while the source repository remains public.
- Reader policy reference: `shared-reader-access`.
- Preview visibility: private; preview builds disabled until real Access acceptance.
- Production branch: `main`; repository commits only; no scheduled polling.
- Public bypass: disabled.
- Paid services: not authorized.

## Content/build boundary
This phase does not modify Next.js/site content, portfolio metadata, project listings, current Pages workflow, or build configuration. A later deployment phase must separately verify the actual static build command and output directory before any Workers connection.

## Manual/provider gates
Cloudflare login/MFA, account-wide Access verification, approved readers, GitHub App authorization, Worker/Builds connection, actual build/output verification, anonymous denial, approved-reader access, direct asset protection, and explicit final URL/cutover approval remain separate gates.

## Rollback
The existing Pages site stays untouched and remains the pre-cutover recovery point. After a future verified Worker deployment, retain the previous verified Worker version. No paid upgrade, DNS change, or old-site retirement is authorized here.
