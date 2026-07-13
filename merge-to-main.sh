#!/bin/bash

# Exit on any error
set -e

# Promote dev-branch -> main. Pushing to main triggers a Vercel PRODUCTION deploy
# (see jesus-heart-project-frontend/vercel.json).

SOURCE_BRANCH="dev-branch"
TARGET_BRANCH="main"
REMOTE="github"

echo ""
echo "🚀 Releasing to production: merging '$SOURCE_BRANCH' → '$TARGET_BRANCH'"
echo "----------------------------------------------------------------"

# Refuse to run with uncommitted changes so the merge is clean.
if ! git diff-index --quiet HEAD -- || [ -n "$(git status --porcelain)" ]; then
    echo "❌ You have uncommitted changes. Commit or stash them first (e.g. ./push-to-github.sh)."
    exit 1
fi

# Remember where we started so we can return here at the end.
START_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "Fetching latest from $REMOTE..."
git fetch "$REMOTE"

echo "Making sure '$SOURCE_BRANCH' is up to date..."
git checkout "$SOURCE_BRANCH"
git pull "$REMOTE" "$SOURCE_BRANCH"

echo "Switching to '$TARGET_BRANCH'..."
git checkout "$TARGET_BRANCH"
git pull "$REMOTE" "$TARGET_BRANCH"

echo "Merging '$SOURCE_BRANCH' into '$TARGET_BRANCH'..."
git merge --no-ff "$SOURCE_BRANCH" -m "Release: merge $SOURCE_BRANCH into $TARGET_BRANCH"

echo "Pushing '$TARGET_BRANCH' to $REMOTE (this triggers the Vercel production deploy)..."
git push "$REMOTE" "$TARGET_BRANCH"

echo "Returning to '$START_BRANCH'..."
git checkout "$START_BRANCH"

echo "✅ Merged and pushed to '$TARGET_BRANCH'. Vercel is now building your production deployment."
echo ""
