#!/bin/bash

set -e

TIME=`date +%s`
WORKDIR="/tmp/grouparoo-$TIME"
export INIT_CWD=$WORKDIR

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

## try the init command
echo ""
echo "--- test: init ---"
npx grouparoo init $WORKDIR

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

## try the update command
echo ""
echo "--- test: update ---"
cd $WORKDIR && npx grouparoo update

## try the install command
echo ""
echo "--- test: install ---"
cd $WORKDIR && npx grouparoo install @grouparoo/logger@next
echo ""
echo ""
cd $WORKDIR && cat package.json
echo ""
echo ""

## reset the NPM/NPX link
npm unlink
echo "--- npm unlinked ---"

echo ""
echo "🎉🎉🎉 TESTS PASSED 🎉🎉🎉"
