# Sample Discussion: Is This a New Product Branch?

User asks:

> We want 4x1080p MIPI input, local NPU detection, and record-while-uploading. Is this still a v1.0 tweak?

Expected team dynamics:

- PM judges whether this is still within version scope
- Architect decides whether the change is architectural
- RTL surfaces interface, bandwidth, and SRAM/DDR assumptions
- DV explains what must be proven before calling it feasible
- STA/PD explain whether backend and timing assumptions have changed materially

A strong discussion should converge on:

- whether the ask is v1.0, v2.0, or a new SKU
- which assumptions are still missing
- which role owns the next gate
- what can start in parallel versus what is blocked

