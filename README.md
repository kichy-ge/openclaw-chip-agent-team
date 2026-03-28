# OpenClaw Chip Agent Team

Open-source multi-agent team templates for chip and SoC collaboration in OpenClaw.

This repository packages a reusable agent structure for:

- Chip Architect
- Chip Product Manager
- RTL Frontend Designer
- Verification Engineer
- DFT Engineer
- Physical Design Engineer
- STA Signoff Engineer
- Analog Designer
- Custom Layout Engineer

The goal is not to ship a fake demo. The goal is to give you a practical team that can discuss scope, architecture, RTL feasibility, verification closure, timing risk, and backend impact in one shared workflow.

## What Is Included

- Role contracts in `templates/agents/*/SOUL.md`
- Human-readable role playbooks in `templates/agents/*/PLAYBOOK.md`
- Reusable workspace bootstrap files in `templates/common/`
- A sanitized OpenClaw config template in [openclaw.template.json](/Users/kichy/openclaw-chip-agent-team/openclaw.template.json)
- An install script in [scripts/install-chip-team.mjs](/Users/kichy/openclaw-chip-agent-team/scripts/install-chip-team.mjs)
- A sample multi-agent discussion in [examples/discussions/product-branch-evaluation.md](/Users/kichy/openclaw-chip-agent-team/examples/discussions/product-branch-evaluation.md)

## Design Principles

- Chinese-first output for role collaboration
- Explicit assumptions instead of polished ambiguity
- Clear ownership between PM, Architect, RTL, DV, STA, PD, DFT, Analog, and Layout
- Version and scope awareness
- No API keys, logs, memories, or private runtime sessions in the repo

## Recommended Repo Layout

```text
templates/
  common/
  agents/
scripts/
examples/
openclaw.template.json
```

## Quick Start

1. Install OpenClaw locally.
2. Clone this repo.
3. Run:

```bash
node scripts/install-chip-team.mjs
```

4. Review the generated workspaces under `~/.openclaw/`.
5. Merge or adapt [openclaw.template.json](/Users/kichy/openclaw-chip-agent-team/openclaw.template.json) into your own `~/.openclaw/openclaw.json`.
6. Replace placeholder provider keys with your real model credentials.
7. Restart the OpenClaw gateway.

## What You Should Customize

- Model provider and API keys
- User/project context in each `USER.md`
- Workspace paths if you use a different OpenClaw home
- Which specialist agents the architect is allowed to dispatch
- Whether your product direction is DDR-less, always-on, multi-camera, AI-heavy, or something else

## What Not To Publish

Do not publish these from your live OpenClaw environment:

- `~/.openclaw/openclaw.json` with real keys
- `~/.openclaw/agents/*/sessions/`
- `~/.openclaw/logs/`
- `MEMORY.md`
- `memory/YYYY-MM-DD.md`
- private voice files, screenshots, personal notes, or customer data

## Suggested GitHub Positioning

Recommended repo subtitle:

> A reusable OpenClaw agent squad for chip architecture, RTL, DV, STA, PD, DFT, analog, and layout collaboration.

Recommended README tagline:

> Turn chip requirement debates into role-based architecture and implementation decisions.

## License

MIT
