from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]

required = [
    "AHICP_MANIFEST.yaml",
    "AHICP_CONTEXT_INTERFACE.yaml",
    "AHICP_ADOPTION.zh-CN.md",
    "AHICP_ADOPTION.md",
    "SESSION_CONTEXT_BOOTSTRAP.zh-CN.md",
    "START_HERE.zh-CN.md",
    "START_HERE.md",
    "HARC_SITE_MANIFEST.yaml",
    "AGENTS.zh-CN.md",
    "AGENTS.md",
    "project-stack.yaml",
    "project-stack.lock.yaml",
    "publishing.yaml",
    "project.yaml",
    "website.yaml",
    "app/content.ts",
    ".github/workflows/deploy-pages.yml",
]
errors=[]
for rel in required:
    if not (ROOT/rel).exists():
        errors.append(f"missing required file: {rel}")

def read(rel):
    p=ROOT/rel
    return p.read_text(encoding="utf-8") if p.exists() else ""

manifest=read("AHICP_MANIFEST.yaml")
stack=read("project-stack.yaml")
lock=read("project-stack.lock.yaml")
publishing=read("publishing.yaml")
website=read("website.yaml")
harc=read("HARC_SITE_MANIFEST.yaml")
pages=read(".github/workflows/deploy-pages.yml")

template_pins = {
    "AHICP": "02d0b3c02ca23073c760b6e0f761a468e0235a1c",
    "PPF": "9a6005de85f032095e36eea03fda317e73126538",
    "Vault": "592c6e2e938f995b7b3e7df07a72f7f1e2c50c5a",
    "Starter": "05857086e240cbd269eae91af8419ea0921c01fa",
}
adopted_pins = {
    "AHICP": "ed5a60b1016497472072db108072ace59bcdb65d",
    "PPF": "e660b48fb216c28c8faa1f0fe2d0816401e1de2c",
    "Vault": "79d64b12275a5cc7c09236b144bf4213fa7afc5e",
}
for label,sha in template_pins.items():
    if sha not in stack or sha not in lock:
        errors.append(f"{label} template/lock pin mismatch")
for label,sha in adopted_pins.items():
    if sha not in stack:
        errors.append(f"{label} adopted pin missing")
if template_pins["AHICP"] not in manifest or adopted_pins["AHICP"] not in manifest:
    errors.append("AHICP manifest revision mismatch")

for marker in (
    'profile: public-presentation-layer',
    'profile: public-github-pages-homepage',
    'adoption_mode: map-existing-authorized-public-homepage',
):
    if marker not in stack:
        errors.append(f"Stack homepage mapping drift: {marker}")

for marker in (
    "enabled: true",
    "authorization_state: authorized",
    "provider: github-pages",
    'production_url: "https://chongliuphil.github.io/"',
    "integration_state: PRODUCTION_ACTIVE",
    "auto_deploy_on_main: true",
    "pull_request_deploy: false",
    "provider: cloudflare-workers",
    "status: planned",
    "cutover_status: pending",
    "continuous_web_is_release: true",
):
    if marker not in publishing:
        errors.append(f"PPF homepage lifecycle drift: {marker}")

if "publish: true" not in website:
    errors.append("website.yaml must remain publish=true for the existing homepage")
if "public-academic-homepage" not in harc:
    errors.append("legacy HARC site role drift")
if "app/content.ts" not in harc:
    errors.append("public content authority drift")

for marker in (
    "push:",
    "pull_request:",
    "actions/deploy-pages@v5",
    "github.event_name != 'pull_request'",
):
    if marker not in pages:
        errors.append(f"Pages workflow boundary drift: {marker}")

if (ROOT/"wrangler.jsonc").exists():
    errors.append("unexpected active Cloudflare project config; target must remain planned")

if errors:
    print("Academic homepage Stack validation FAILED")
    for err in errors:
        print(f"- {err}")
    sys.exit(1)

print("Academic homepage Stack validation PASSED")
print("Public-content authority preserved; GitHub Pages remains active production; Cloudflare remains planned only.")
