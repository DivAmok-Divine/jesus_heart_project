#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Start the Jesus Heart Project frontend dev server (in background).
# Works from anywhere — it locates the project on its own.
# Stop it again with ./stop.sh
# ─────────────────────────────────────────────────────────────
set -euo pipefail

# Resolve where this script lives, so it runs from any directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Find the app folder (where package.json with the dev script lives).
if [ -f "$SCRIPT_DIR/jesus-heart-project-frontend/package.json" ]; then
  APP_DIR="$SCRIPT_DIR/jesus-heart-project-frontend"
elif [ -f "$SCRIPT_DIR/package.json" ]; then
  APP_DIR="$SCRIPT_DIR"
else
  echo "❌ Could not find the app folder next to this script."
  exit 1
fi

PORT="${PORT:-5173}"
PID_FILE="$APP_DIR/.dev-server.pid"
PORT_FILE="$APP_DIR/.dev-server.port"
LOG_FILE="$APP_DIR/.dev-server.log"

cd "$APP_DIR"

# Already running? Don't start a second one.
if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  RUNNING_PORT="$(cat "$PORT_FILE" 2>/dev/null || echo "$PORT")"
  echo "✅ Dev server is already running (PID $(cat "$PID_FILE"))."
  echo "   → http://localhost:${RUNNING_PORT}"
  echo "   Stop it with: ./stop.sh"
  exit 0
fi

# Install dependencies on first run.
if [ ! -d node_modules ]; then
  echo "📦 Installing dependencies (first run)…"
  npm install
fi

echo "🚀 Starting The Jesus Heart Project on port ${PORT}…"
# Run Vite in the background; keep it alive after this shell exits.
nohup npm run dev -- --port "$PORT" --strictPort >"$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"
echo "$PORT" > "$PORT_FILE"

# Wait for the server to come up (up to ~20s).
printf "   Booting"
for _ in $(seq 1 40); do
  if curl -s -o /dev/null "http://localhost:${PORT}/"; then
    echo ""
    echo "✅ Website is live!"
    echo "   → http://localhost:${PORT}"
    echo ""
    echo "   Logs:  tail -f \"$LOG_FILE\""
    echo "   Stop:  ./stop.sh"
    exit 0
  fi
  printf "."
  sleep 0.5
done

echo ""
echo "⚠️  Server did not respond in time. Check the log:"
echo "   tail -n 40 \"$LOG_FILE\""
exit 1
