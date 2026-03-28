# Launch Copy

## Chinese GitHub Launch Post

### Long Version

我把最近一直在打磨的一套芯片设计多智能体团队，整理成了一个可以直接复用的 OpenClaw 开源模板：

**OpenClaw Chip Agent Team**

它不是一个“多 agent 演示项目”，而是一套更接近真实芯片协作分工的角色化团队，里面包括：

- Chip PM
- Architect
- RTL
- DV
- STA
- PD
- DFT
- Analog
- Custom Layout

我希望解决的问题很明确：

很多 AI 协作系统把所有问题都压成一个“万能助手”的回答，但真实芯片开发里，需求判断、架构 gate、RTL 可实现性、验证 closure、时序签核、后端 QoR，本来就是不同角色在互相制约。  
所以这次我把这些角色拆开，做成了一套可安装、可修改、可扩展的 OpenClaw agent team 模板。

仓库里包含：

- 角色契约 `SOUL.md`
- 角色 playbook
- OpenClaw 配置模板
- 本地安装脚本
- 样例讨论文档

如果你也在探索：

- AI 如何参与芯片 / SoC 需求与架构讨论
- 如何把多 agent 从“热闹”做成“有工程边界”
- 如何让 PM、Architect、RTL、DV、STA 的角色输出真正分开

欢迎看看，也欢迎一起继续往下打磨。

仓库地址：

`https://github.com/kichy-ge/openclaw-chip-agent-team`

### Short Version

开源了一套给 OpenClaw 用的芯片设计多智能体团队模板：

- PM / Architect / RTL / DV / STA / PD / DFT / Analog / Layout
- 不是 demo，而是面向真实芯片协作边界的角色模板
- 带安装脚本、配置模板、样例讨论

仓库：

`https://github.com/kichy-ge/openclaw-chip-agent-team`

## English GitHub Launch Post

### Long Version

I just open-sourced a reusable OpenClaw multi-agent team template for chip and SoC collaboration:

**OpenClaw Chip Agent Team**

This is not meant to be another “multi-agent demo repo”.

It is a role-structured agent team designed around how real chip work actually happens, with:

- Chip PM
- Architect
- RTL
- DV
- STA
- PD
- DFT
- Analog
- Custom Layout

The core idea is simple:

Most AI collaboration systems collapse every problem into one blended assistant answer.  
Real chip development does not work that way. Requirement framing, architecture gates, RTL feasibility, verification closure, timing signoff, and backend QoR are different roles pushing against each other.

So I turned that structure into a reusable OpenClaw template, including:

- role contracts
- role playbooks
- sanitized OpenClaw config template
- local installer
- sample discussion flow

If you are exploring:

- AI-assisted chip / SoC collaboration
- role-separated multi-agent workflows
- how to make PM / Architect / RTL / DV / STA outputs meaningfully different

take a look:

`https://github.com/kichy-ge/openclaw-chip-agent-team`

### Short Version

Open-sourced a reusable OpenClaw chip-agent team template:

- PM / Architect / RTL / DV / STA / PD / DFT / Analog / Layout
- designed for real chip collaboration, not just orchestration demos
- includes installer, config template, and sample discussions

Repo:

`https://github.com/kichy-ge/openclaw-chip-agent-team`

## Suggested Social Snippets

### X / Twitter

Open-sourced a reusable OpenClaw chip-agent team template for PM / Architect / RTL / DV / STA / PD / DFT / Analog / Layout collaboration.  
Trying to make multi-agent workflows feel more like real chip engineering, not just demo orchestration.

`https://github.com/kichy-ge/openclaw-chip-agent-team`

### 中文社媒短帖

开源了一套 OpenClaw 芯片设计多智能体团队模板。  
不是做热闹演示，而是按 PM / Architect / RTL / DV / STA / PD / DFT / Analog / Layout 的真实角色边界来组织协作。

仓库：

`https://github.com/kichy-ge/openclaw-chip-agent-team`
