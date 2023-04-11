#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

SCRIPT_DIR="$(realpath "$(dirname "$0")")"
# shellcheck source=./env
# shellcheck disable=SC1091
source "$SCRIPT_DIR"/env

echo "module update"
git submodule update --init --remote

echo "checkout to desired version"
echo "checkout to lbm-sdk $LBM_SDK_VERSION"
cd ./repositories/lbm-sdk 
git checkout "$LBM_SDK_VERSION"

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

echo "build java types"
cd ../java
# Generate .class and zip
./gradlew build