# Install Guide

[English](INSTALL.md) | [简体中文](INSTALL.zh-CN.md)

This project supports three installation paths:

1. one-line shell install
2. ask OpenClaw to install it for you
3. manual install and config merge

## 1. One-Line Shell Install

Install into the default OpenClaw home:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/kichy-ge/openclaw-chip-agent-team/main/scripts/install-from-github.sh)"
```

Install into a custom OpenClaw home:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/kichy-ge/openclaw-chip-agent-team/main/scripts/install-from-github.sh)" -- /path/to/openclaw-home
```

## 2. Install From Inside OpenClaw

Paste this into an OpenClaw chat:

```text
Please install the GitHub repo `kichy-ge/openclaw-chip-agent-team` into my local OpenClaw environment, run its installer, and generate the config template under `~/.openclaw/`.
```

Chinese version:

```text
请把 GitHub 仓库 `kichy-ge/openclaw-chip-agent-team` 安装到我本地的 OpenClaw 环境里，执行安装脚本，并在 `~/.openclaw/` 下生成配置模板。
```

## 3. Manual Install

```bash
git clone https://github.com/kichy-ge/openclaw-chip-agent-team.git
cd openclaw-chip-agent-team
node scripts/install-chip-team.mjs
```

Install into a custom OpenClaw home:

```bash
node scripts/install-chip-team.mjs /path/to/openclaw-home
```

## What The Installer Generates

- `workspace-architect`
- `workspace-chip-pm`
- `workspace-rtl`
- `workspace-dv`
- `workspace-dft`
- `workspace-pd`
- `workspace-sta`
- `workspace-analog`
- `workspace-custom-layout`
- `openclaw.chip-team.template.json`

## Final Setup

After installation:

1. merge `openclaw.chip-team.template.json` into your own `openclaw.json`
2. replace placeholder provider keys with real credentials
3. restart the OpenClaw gateway
