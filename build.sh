#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

# shellcheck disable=SC1091
source ./env

echo "module update"
git submodule update --init --remote

echo "checkout to desired version"
echo "checkout to finschia-sdk $FINSCHIA_SDK_VERSION"
cd ./repositories/finschia-sdk 
git checkout "$FINSCHIA_SDK_VERSION"

echo "checkout to wasmd $WASMD_VERSION"
cd ../wasmd
git checkout "$WASMD_VERSION"

echo "checkout to ibc-go $IBC_GO_VERSION"
cd ../ibc-go
git checkout "$IBC_GO_VERSION"

echo "build js types"
cd ../../js
# install dependencies
yarn install
# Generate .ts files into ./src
yarn codegen
# Build .js/.d.ts files
yarn build
# Prepare publishing
yarn prepare

# Change version to latest
# shellcheck disable=SC2001
npm version "$(echo "$FINSCHIA_VERSION" | sed 's/^v//')"

echo "build java types"
cd ../java
# Generate .class and zip
./gradlew build

# Write new version info to README.md
cd ..
table_end_line=$(grep -n -m 1 "\-\-\-\-|\-\-\-\-" README.md | cut -d ":" -f 1)
content="| $FINSCHIA_VERSION | [$FINSCHIA_SDK_VERSION](https://github.com/Finschia/finschia-sdk/tree/$FINSCHIA_SDK_VERSION) | [$WASMD_VERSION](https://github.com/Finschia/wasmd/tree/$WASMD_VERSION) | [$IBC_GO_VERSION](https://github.com/Finschia/ibc-go/tree/$IBC_GO_VERSION) | [$FINSCHIA_VERSION](https://github.com/Finschia/finschia/tree/$FINSCHIA_VERSION) |"

# Insert the new row
sed -i "$((table_end_line+1))i\\
$content
" README.md
