# 安装指南

[English](INSTALL.md) | [简体中文](INSTALL.zh-CN.md)

这个仓库支持三种安装方式：

1. 一行 shell 安装
2. 在 OpenClaw 对话里一句话让 Agent 帮你安装
3. 手动安装并合并配置

## 1. 一行 shell 安装

安装到默认的 OpenClaw home：

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/kichy-ge/openclaw-chip-agent-team/main/scripts/install-from-github.sh)"
```

安装到自定义 OpenClaw home：

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/kichy-ge/openclaw-chip-agent-team/main/scripts/install-from-github.sh)" -- /path/to/openclaw-home
```

## 2. 在 OpenClaw 里一句话安装

直接把这句话发给 OpenClaw：

```text
请把 GitHub 仓库 `kichy-ge/openclaw-chip-agent-team` 安装到我本地的 OpenClaw 环境里，执行安装脚本，并在 `~/.openclaw/` 下生成配置模板。
```

英文版：

```text
Please install the GitHub repo `kichy-ge/openclaw-chip-agent-team` into my local OpenClaw environment, run its installer, and generate the config template under `~/.openclaw/`.
```

## 3. 手动安装

```bash
git clone https://github.com/kichy-ge/openclaw-chip-agent-team.git
cd openclaw-chip-agent-team
node scripts/install-chip-team.mjs
```

如果需要安装到自定义 OpenClaw home：

```bash
node scripts/install-chip-team.mjs /path/to/openclaw-home
```

## 安装后会生成

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

## 最后一步

安装完成后：

1. 把 `openclaw.chip-team.template.json` 合并到你自己的 `openclaw.json`
2. 把占位 provider key 换成真实配置
3. 重启 OpenClaw gateway
