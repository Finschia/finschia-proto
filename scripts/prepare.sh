#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="cosmos cosmos_proto gogoproto google ibc lbm ostracon cosmwasm"

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done

rm proofs.d.ts proofs.js proofs.js.map
cp ./build/proofs.d.ts ./
cp ./build/proofs.js ./
cp ./build/proofs.js.map ./
