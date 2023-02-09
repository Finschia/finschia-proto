# lbmjs-types

## Maintenance
This section is for maintainers of this repo, not users.

## requirements
* protoc
```shell
// Mac OS X
brew install protobuf

// Linux
PROTOC_ZIP=protoc-3.14.0-linux-x86_64.zip
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.14.0/$PROTOC_ZIP
sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'
rm -f $PROTOC_ZIP
```

## Getting started
```shell
# Pull external code
git submodule init
git submodule update

# Install dependencies
yarn install
```

### Rebuilding types

```shell
# Update git submodule
yarn lbmsdk_update

# Generate .ts files into ./src
yarn codegen

# Build .js/.d.ts files
yarn build

# Prepare publishing
yarn prepare
```
