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

echo "--- npm linked ---"

## try the generate command
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
npx grouparoo upgrade $WORKDIR

## reset the NPM/NPX link
npm unlink
echo "--- npm unlinked ---"

echo ""
echo "🎉🎉🎉 TESTS PASSED 🎉🎉🎉"
