#!/bin/bash

set -e

TIME=`date +%s`
cd "$(dirname "$0")/../../"
CORE_VERSION=`cat lerna.json | jq '.version'`
cd "./cli/__tests__"
WORKDIR="/tmp/grouparoo-$TIME"
export INIT_CWD=$WORKDIR

echo " >>> testing with WORKDIR=$WORKDIR against CORE_VERSION=$CORE_VERSION <<< "

## to get around premission issues on CI
## https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
mkdir -p ~/.npm-global
export NPM_CONFIG_PREFIX=~/.npm-global
export PATH="$HOME/.npm-global/bin:$PATH"

## use /this/ version of the "grouparoo" package with
npm link ../

echo ""
echo "--- npm linked ---"

## try the version command
echo ""
echo "--- test: version ---"
grouparoo --version

## the help command should be the default
# echo "--- test: (empty) ---"
# grouparoo (we can't test this because the output is actually stderr)

## the help command should work too
echo ""
echo "--- test: help ---"
grouparoo --help

## try the init command
echo ""
echo "--- test: init ---"
grouparoo init $WORKDIR
echo ""
echo ""
cd $WORKDIR && cat package.json
echo ""
echo ""

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

if [ -f "$WORKDIR/.gitignore" ]; then
    echo "✅ .gitignore exists."
else
    echo "🚫 .gitignore does not exist."
    exit 1
fi

if [ -d "$WORKDIR/node_modules" ]; then
    echo "✅ node_modules exists."
else
    echo "🚫 node_modules does not exist."
    exit 1
fi

if [ -f "$WORKDIR/config/README.md" ]; then
    echo "✅ config/README exists."
else
    echo "🚫 config/README does not exist."
    exit 1
fi

## try the update command
echo ""
echo "--- test: update ---"
cd $WORKDIR && grouparoo update

## try the install command, by itself
echo ""
echo "--- test: install ---"
cd $WORKDIR && grouparoo install
echo ""
echo ""
cd $WORKDIR && cat package.json
echo ""
echo ""

## try the install command with a plugin
echo ""
echo "--- test: install ---"
cd $WORKDIR && grouparoo install @grouparoo/logger
echo ""
echo ""
cd $WORKDIR && cat package.json
echo ""
echo ""

## try the uninstall command
echo ""
echo "--- test: uninstall ---"
cd $WORKDIR && grouparoo uninstall @grouparoo/logger
echo ""
echo ""
cd $WORKDIR && cat package.json
echo ""
echo ""

## reset the NPM link
npm unlink ../
echo "--- npm unlinked ---"

echo ""
echo "🎉🎉🎉 TESTS PASSED 🎉🎉🎉"
