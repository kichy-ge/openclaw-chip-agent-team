import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const templateRoot = path.join(repoRoot, "templates");
const openclawHome = process.argv[2] ? path.resolve(process.argv[2]) : path.join(os.homedir(), ".openclaw");

const commonFiles = [
  "AGENTS.md",
  "BOOTSTRAP.md",
  "HEARTBEAT.md",
  "IDENTITY.md",
  "MEMORY.md",
  "TOOLS.md",
];

const roles = [
  "architect",
  "chip-pm",
  "rtl",
  "dv",
  "dft",
  "pd",
  "sta",
  "analog",
  "custom-layout",
];

const workspaceNameMap = {
  architect: "workspace-architect",
  "chip-pm": "workspace-chip-pm",
  rtl: "workspace-rtl",
  dv: "workspace-dv",
  dft: "workspace-dft",
  pd: "workspace-pd",
  sta: "workspace-sta",
  analog: "workspace-analog",
  "custom-layout": "workspace-custom-layout",
};

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyFile(src, dest, overwrite = false) {
  try {
    if (!overwrite) {
      await fs.access(dest);
      return;
    }
  } catch {
    // missing file is expected
  }
  await fs.copyFile(src, dest);
}

async function main() {
  await ensureDir(openclawHome);

  for (const role of roles) {
    const workspaceDir = path.join(openclawHome, workspaceNameMap[role]);
    await ensureDir(workspaceDir);

    for (const filename of commonFiles) {
      await copyFile(
        path.join(templateRoot, "common", filename),
        path.join(workspaceDir, filename),
      );
    }

    await copyFile(
      path.join(templateRoot, "common", "USER.template.md"),
      path.join(workspaceDir, "USER.md"),
    );

    for (const filename of ["SOUL.md", "PLAYBOOK.md"]) {
      await copyFile(
        path.join(templateRoot, "agents", role, filename),
        path.join(workspaceDir, filename),
      );
    }
  }

  const configTemplateSrc = path.join(repoRoot, "openclaw.template.json");
  const configTemplateDest = path.join(openclawHome, "openclaw.chip-team.template.json");
  const raw = await fs.readFile(configTemplateSrc, "utf8");
  const hydrated = raw.replaceAll("__OPENCLAW_HOME__", openclawHome);
  await fs.writeFile(configTemplateDest, hydrated, "utf8");

  console.log(`Installed chip team templates into: ${openclawHome}`);
  console.log(`Generated config template: ${configTemplateDest}`);
  console.log("Next step: merge the generated config template into your openclaw.json and add real provider keys.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

