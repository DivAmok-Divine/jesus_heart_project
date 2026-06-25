#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Stop the Jesus Heart Project frontend dev server.
# Works from anywhere — it locates the project on its own.
# ─────────────────────────────────────────────────────────────
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -f "$SCRIPT_DIR/jesus-heart-project-frontend/package.json" ]; then
  APP_DIR="$SCRIPT_DIR/jesus-heart-project-frontend"
elif [ -f "$SCRIPT_DIR/package.json" ]; then
  APP_DIR="$SCRIPT_DIR"
else
  echo "❌ Could not find the app folder next to this script."
  exit 1
fi

PID_FILE="$APP_DIR/.dev-server.pid"
PORT_FILE="$APP_DIR/.dev-server.port"
LOG_FILE="$APP_DIR/.dev-server.log"
PORT="$(cat "$PORT_FILE" 2>/dev/null || echo "5173")"

# Recursively kill a process and all of its children.
kill_tree() {
  local pid="$1"
  for child in $(pgrep -P "$pid" 2>/dev/null); do
    kill_tree "$child"
  done
  kill "$pid" 2>/dev/null || true
}

stopped=false

# 1) Kill the tracked process tree (npm → vite → esbuild).
if [ -f "$PID_FILE" ]; then
  PID="$(cat "$PID_FILE")"
  if kill -0 "$PID" 2>/dev/null; then
    echo "🛑 Stopping dev server (PID $PID)…"
    kill_tree "$PID"
    stopped=true
  fi
  rm -f "$PID_FILE"
fi

# 2) Safety net: kill anything still listening on the port.
if command -v lsof >/dev/null 2>&1; then
  LEFTOVERS="$(lsof -ti "tcp:${PORT}" 2>/dev/null || true)"
  if [ -n "$LEFTOVERS" ]; then
    echo "🧹 Clearing leftover process on port ${PORT}…"
    # shellcheck disable=SC2086
    kill $LEFTOVERS 2>/dev/null || true
    stopped=true
  fi
fi

rm -f "$PORT_FILE" "$LOG_FILE"

if [ "$stopped" = true ]; then
  echo "✅ Dev server stopped."
else
  echo "ℹ️  No running dev server was found."
fi
