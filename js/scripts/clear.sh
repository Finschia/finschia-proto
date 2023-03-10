#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="cosmos cosmos_proto cosmwasm gogoproto google ibc lbm ostracon tendermint"
FILES="proofs.d.ts proofs.js proofs.js.map"

for dir in $DIRS; do
  rm -rf "$dir"
done

for f in $FILES; do
  rm -rf "$f"
done
