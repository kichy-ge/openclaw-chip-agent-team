# OpenClaw Chip Agent Team

[English](README.md) | [简体中文](README.zh-CN.md)

这是一个面向 OpenClaw 的开源芯片 / SoC 多智能体团队模板仓库。

它适合这样的团队：

- 不想只要一个“混合型 AI 助手”，而是希望不同角色分工明确
- 希望把需求、架构、RTL、DV、STA、PD、DFT、模拟、定制版图放到同一条协作链里
- 希望得到可复用的 OpenClaw agent 模板，而不是一次性的演示项目
- 希望用中文优先的技术协作方式，把假设、边界和 owner 说清楚

这个仓库提供了一套可复用的角色化协作结构，包括：

- 芯片架构师
- 芯片产品经理
- RTL 前端设计工程师
- 验证工程师
- DFT 工程师
- 物理设计工程师
- STA 签核工程师
- 模拟设计工程师
- 定制版图工程师

目标不是做一个“好看的多 agent demo”，而是给你一套真正能把需求讨论推进成架构判断、实现判断、验证闭环、时序风险和后端影响分析的角色模板。

## 仓库为什么存在

很多所谓“多智能体”项目停留在编排层，看起来热闹，但缺少真实工程角色边界。芯片协作不是这样：

- 需求和版本边界必须明确
- 架构和实现 owner 必须分开
- 验证与签核不能靠模糊话术带过
- 后端和时序影响要尽早暴露

这个模板仓库就是为了把这些边界做实。

## 角色矩阵

| 角色 | 关注点 | 常见输出 |
|---|---|---|
| Architect | 分区、接口、gate 决策 | 架构结论、风险拆分、下一步 owner |
| Chip PM | 需求基线、版本边界 | 范围判断、must/should/later、验收口径 |
| RTL | 微架构、协议、数据通路 | 实现判断、接口假设 |
| DV | 证明目标、覆盖率、closure | 验证 gate、缺失证据 |
| DFT | 可测性与量产可制造性 | scan/ATPG/MBIST 影响 |
| PD | 后端可实现性与 QoR 收敛 | floorplan/CTS/route 建议 |
| STA | 时序完整性与修复 owner | 时序判断、signoff 风险 |
| Analog | 模拟意图与表征 | PVT/噪声/精度风险 |
| Custom Layout | 匹配、寄生、抽取准备 | DRC/LVS/PEX 导向建议 |

## 仓库里包含什么

- 角色运行契约：`templates/agents/*/SOUL.md`
- 角色说明手册：`templates/agents/*/PLAYBOOK.md`
- 通用 workspace 启动模板：`templates/common/`
- 脱敏后的 OpenClaw 配置模板：`openclaw.template.json`
- 安装脚本：`scripts/install-chip-team.mjs`
- 一份样例讨论：`examples/discussions/product-branch-evaluation.md`

## 设计原则

- 中文优先的角色协作
- 先给判断，再做展开
- 明确写出假设，而不是用漂亮措辞掩盖不确定性
- PM、Architect、RTL、DV、STA、PD、DFT、Analog、Layout 之间职责清楚
- 强调版本边界与 scope 意识
- 仓库中不包含 API key、日志、私人记忆、运行态会话记录

## 目录结构

```text
templates/
  common/
  agents/
scripts/
examples/
openclaw.template.json
README.md
README.zh-CN.md
```

## 快速开始

1. 本地安装 OpenClaw
2. clone 本仓库
3. 执行：

```bash
node scripts/install-chip-team.mjs
```

4. 检查生成的 `~/.openclaw/` 工作区
5. 把生成出来的 `openclaw.chip-team.template.json` 合并到你自己的 `~/.openclaw/openclaw.json`
6. 把 provider key 占位符换成真实密钥
7. 重启 OpenClaw gateway

如果你想安装到别的 OpenClaw home：

```bash
node scripts/install-chip-team.mjs /path/to/openclaw-home
```

## 安装后会得到什么

安装脚本会生成：

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

## 你需要自行定制的部分

- 模型 provider 和 API key
- 每个角色的 `USER.md` 项目上下文
- 如果你 OpenClaw home 不一样，需要改路径
- Architect 允许调度哪些 specialist agent
- 你的产品方向是 DDR-less、always-on、多路视频、NPU-heavy 还是别的

## 推荐填写的项目上下文字段

每个角色里最值得改的是 `USER.md`。建议至少补这些：

- 当前产品线
- 当前版本 / milestone
- 已锁定约束
- 当前主要风险
- 明确哪些内容超出 scope
- 输出语言和表达风格偏好

## 推荐使用场景

- 需求边界评审
- 架构 gate 讨论
- 判断一个需求属于 v1.0 / v2.0 / 新 SKU
- RTL 可实现性和接口评审
- 验证范围定义
- 时序 / signoff 风险暴露
- 实现前的后端影响讨论

## 这套团队应该擅长回答的问题

- 这个需求还是 v1.0 小改，还是已经是新产品分支？
- 哪些假设阻塞了 RTL 正式开工？
- DV 到底需要证明什么，才能说这个范围可验证？
- 这是局部 timing fix，还是 MMMC/signoff model 级变化？
- PM 现在能锁产品边界了吗，还是还需要 Architect gate？

## 非目标

这个仓库不包含：

- 你的真实 OpenClaw 运行日志
- 你的私有 memory 文件
- 真实 provider key
- 完整的 GitHub Actions / 自动部署体系
- 一个真正的 EDA 平台

它是一个团队模板仓库，不是完整的芯片设计平台。

## 贡献

参见 `CONTRIBUTING.md` 或 `CONTRIBUTING.zh-CN.md`。

## 许可证

MIT
