#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/kichy-ge/openclaw-chip-agent-team.git}"
TARGET_OPENCLAW_HOME="${1:-${HOME}/.openclaw}"
TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/openclaw-chip-agent-team.XXXXXX")"

cleanup() {
  rm -rf "${TMP_DIR}"
}
trap cleanup EXIT

if ! command -v git >/dev/null 2>&1; then
  echo "git is required but not found." >&2
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "node is required but not found." >&2
  exit 1
fi

git clone --depth=1 "${REPO_URL}" "${TMP_DIR}/repo" >/dev/null 2>&1
node "${TMP_DIR}/repo/scripts/install-chip-team.mjs" "${TARGET_OPENCLAW_HOME}"

echo "OpenClaw Chip Agent Team installed into: ${TARGET_OPENCLAW_HOME}"
echo "Next: merge ${TARGET_OPENCLAW_HOME}/openclaw.chip-team.template.json into your openclaw.json and restart the gateway."
