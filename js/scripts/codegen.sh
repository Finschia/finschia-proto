#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"


OUT_DIR="./src"
#PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"
# On mac, install coreutils to use realpath. `brew install coretuils`
PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"

TS_PROTO_OPTS="esModuleInterop=true,forceLong=long,useOptionals=true,useDate=false"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."

LBMSDK_DIR="../repositories/lbm-sdk/proto"
LBMSDK_THIRD_PARTY_DIR="../repositories/lbm-sdk/third_party/proto"
IBC_GO_DIR="../repositories/ibc-go/proto"
WASMD_DIR="../repositories/wasmd/proto"

# shellcheck disable=SC2046
# --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
protoc \
 --plugin="$PLUGIN_PATH" \
 --ts_proto_yarn_2_out="${OUT_DIR}" \
 --proto_path="$LBMSDK_DIR" \
 --proto_path="$IBC_GO_DIR" \
 --proto_path="$WASMD_DIR" \
 --proto_path="$LBMSDK_THIRD_PARTY_DIR" \
 --ts_proto_yarn_2_opt="${TS_PROTO_OPTS}" \
 $(find ${LBMSDK_DIR} ${IBC_GO_DIR} ${WASMD_DIR} ${LBMSDK_THIRD_PARTY_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

