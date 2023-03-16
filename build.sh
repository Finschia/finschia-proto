#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

echo "module update"
git submodule init
git submodule update
git submodule update --remote --merge

echo "build js types"
cd ./js
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