#!/bin/bash

# Exit on any error
set -e

# Prompt user for commit description
echo ""
echo "🚀 Preparing to push changes to GitHub"
echo "--------------------------------------"
read -p "Enter description for this push: " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    echo "❌ Error: Commit description cannot be empty."
    exit 1
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
