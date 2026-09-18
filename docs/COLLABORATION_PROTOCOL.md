# Academic Homepage Collaboration Protocol

This document adapts core HARC collaboration principles to the personal academic homepage. The goal is not to turn the website into a full research repository, but to let different AI agents or editing tools safely resume maintenance without relying on old chat history.

## Architecture

```text
private research repositories
        +
academic-vault (private coordination / publication decisions)
        |
        | explicit publication intent
        v
ChongLiuPhil.github.io (public presentation layer)
        |
        v
GitHub Pages
```

## Three change routes

**CONTENT** changes public academic information such as research areas, projects, publications, educational resources, or profile text. The main source of truth is `app/content.ts`.

**FORM** changes page structure, visual design, navigation, or display behavior. Main files are `app/page.tsx` and `app/globals.css`.

**PROTOCOL** changes collaboration rules, publication boundaries, verification, or agent behavior. Main files are `HARC_SITE_MANIFEST.yaml`, `AGENTS.zh-CN.md`, and this protocol.

A task may belong to more than one route.

## Human authorization

AI may organize, translate, extract, and implement, but must not infer authorization to:

- make a private research project public;
- expose unpublished arguments;
- designate ordinary work as “selected” or representative;
- materially redefine the author's research identity;
- publish private CV or contact information.

These require explicit human intent.

## Persistent state

This public repository does not contain the full HARC Working Memory stack.

Private website backlog, undecided publication candidates, private project status, disclosure discussions, and non-public profile data belong in `academic-vault` or the relevant private project repository.

Only public collaboration information necessary to understand, maintain, and verify the website belongs here.

## Completion criteria

A substantive change is complete only when:

1. the public/private boundary has been checked;
2. Chinese and English are synchronized;
3. stable IDs were not changed accidentally;
4. affected behavior and links were checked;
5. `npm run check` passes;
6. high-impact changes receive branch/PR review;
7. private-source tasks publish only explicitly approved material.

## Upstream HARC version

This repository references:
`ChongLiuPhil/Human-AI-Research-Collaboration-Protocol`

Future upstream HARC rules are not inherited automatically. Review their implications before updating this website's collaboration layer.
