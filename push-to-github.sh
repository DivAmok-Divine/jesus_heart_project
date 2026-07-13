#!/bin/bash

# Exit on any error
set -e

# Default commit description used when the user presses Enter without typing anything
DEFAULT_COMMIT_MSG="Update project files"

# Prompt user for commit description
# Branch that all pushes from this script target.
# Pushing here does NOT trigger a Vercel deployment (see jesus-heart-project-frontend/vercel.json).
TARGET_BRANCH="dev-branch"

echo ""
echo "🚀 Preparing to push changes to GitHub → $TARGET_BRANCH"
echo "--------------------------------------"
read -p "Enter description for this push [$DEFAULT_COMMIT_MSG]: " COMMIT_MSG

# Fall back to the default if nothing was entered
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="$DEFAULT_COMMIT_MSG"
    echo "ℹ️  No description entered — using default: \"$COMMIT_MSG\""
fi

echo ""
echo "Adding all changes..."
git add .

# Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo "⚠️ No changes to commit."
else
    echo "Committing changes..."
    git commit -m "$COMMIT_MSG"
fi

echo "Pushing to GitHub ($TARGET_BRANCH)..."
git push -u github "HEAD:$TARGET_BRANCH"

echo "✅ Successfully pushed to GitHub → $TARGET_BRANCH"
echo "ℹ️  Vercel will NOT deploy from this branch. Run ./merge-to-main.sh to release to production."
echo ""
