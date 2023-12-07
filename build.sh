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
