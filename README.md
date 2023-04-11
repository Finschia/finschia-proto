# FINSCHIA-PROTO

## Version of each module

finschia-proto version follows [line/finschia](https://github.com/line/finschia) version. Also the versions of submodules as well.

| finschia-proto | [line/lbm-sdk](https://github.com/line/lbm-sdk)                 | [line/wasmd](https://github.com/line/wasmd)         | [line/ibc-go](https://github.com/line/ibc-go)                                                                                   | [line/finschia](https://github.com/line/finschia)              |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| v1.0.0-rc2     | [v0.47.0-rc2](https://github.com/line/lbm-sdk/tree/v0.47.0-rc2) | [v1.0.0](https://github.com/line/wasmd/tree/v0.1.0) | [v3.3.1-d855e1d87f26f5a632fe43e6c58f8f7e6bc47bdf](https://github.com/line/ibc-go/tree/d855e1d87f26f5a632fe43e6c58f8f7e6bc47bdf) | [v1.0.0-rc2](https://github.com/line/finschia/tree/v1.0.0-rc2) |

## Maintenance

This section is for maintainers of this repo, not users.

1. Set desired version of each module at `env` file.

```
# Choose from https://github.com/line/finschia/releases
LBM_SDK_VERSION="v0.47.0-rc4"
WASMD_VERSION="514953c0b244dd297511f395106077aed5f2e7d7"
IBC_GO_VERSION="v3.3.2"
```

2. run build.sh

   Each module will be checkout to the version specified in the env file

```
./build.sh
```
