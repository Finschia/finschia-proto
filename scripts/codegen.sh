#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"


OUT_DIR="./src"
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

TS_PROTO_OPTS="esModuleInterop=true,forceLong=long,useOptionals=true,useDate=false"

mkdir -p "$OUT_DIR"

echo "Processing LBM-SDK proto files ..."

LBMSDK_DIR="./lbm-sdk/proto"
LBMSDK_THIRD_PARTY_DIR="./lbm-sdk/third_party/proto"

# shellcheck disable=SC2046
protoc \
 --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
 --ts_proto_out="${OUT_DIR}" \
 --ts_proto_opt="${TS_PROTO_OPTS}" \
 --proto_path="$LBMSDK_DIR" \
 --proto_path="$LBMSDK_THIRD_PARTY_DIR" \
 $(find ${LBMSDK_DIR} ${LBMSDK_THIRD_PARTY_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)
