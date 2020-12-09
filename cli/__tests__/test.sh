#!/bin/bash

set -e

TIME=`date +%s`
WORKDIR="/tmp/grouparoo-$TIME"

echo " >>> testing with WORKDIR=$WORKDIR <<< "

## to get around premission issues on CI
## https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
mkdir -p ~/.npm-global
export NPM_CONFIG_PREFIX=~/.npm-global
export PATH="$HOME/.npm-global/bin:$PATH"

## use /this/ version of the "grouparoo" package with NPX
npm link

echo ""
echo "--- npm linked ---"

## try the version command
echo ""
echo "--- test: version ---"
npx grouparoo --version

## the help command should be the default
# echo "--- test: (empty) ---"
# npx grouparoo (we can't test this because the output is actually stderr)

## the help command should work too
echo ""
echo "--- test: help ---"
npx grouparoo --help

## try the generate command
echo ""
echo "--- test: generate ---"
npx grouparoo generate $WORKDIR

if [ -f "$WORKDIR/package.json" ]; then
    echo "✅ package.json exists."
else
    echo "🚫 package.json does not exist."
    exit 1
fi

if [ -f "$WORKDIR/.env" ]; then
    echo "✅ .env exists."
else
    echo "🚫 .env does not exist."
    exit 1
fi

if [ -d "$WORKDIR/node_modules" ]; then
    echo "✅ node_modules exists."
else
    echo "🚫 node_modules does not exist."
    exit 1
fi

## try the upgrade command
echo ""
echo "--- test: upgrade ---"
npx grouparoo upgrade $WORKDIR

## reset the NPM/NPX link
npm unlink
echo "--- npm unlinked ---"

echo ""
echo "🎉🎉🎉 TESTS PASSED 🎉🎉🎉"
