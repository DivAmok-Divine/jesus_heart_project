#!/bin/bash

# Exit on any error
set -e

# Default commit description used when the user presses Enter without typing anything
DEFAULT_COMMIT_MSG="Update project files"

# Prompt user for commit description
echo ""
echo "🚀 Preparing to push changes to GitHub"
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

echo "Pushing to GitHub..."
git push -u github HEAD:main

echo "✅ Successfully pushed to GitHub!"
echo ""
