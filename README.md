# FINSCHIA-PROTO

## Version of each module

finschia-proto version follows [Finschia/finschia](https://github.com/Finschia/finschia) version. Also the versions of submodules as well.

| finschia-proto | [Finschia/finschia-sdk](https://github.com/Finschia/finschia-sdk)        | [Finschia/wasmd](https://github.com/Finschia/wasmd)     | [Finschia/ibc-go](https://github.com/Finschia/ibc-go)                                                                               | [Finschia/finschia](https://github.com/Finschia/finschia)          |
|----------------|--------------------------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| v1.0.0-rc2     | [v0.47.0-rc2](https://github.com/Finschia/finschia-sdk/tree/v0.47.0-rc2) | [v0.1.0](https://github.com/Finschia/wasmd/tree/v0.1.0) | [v3.3.1-d855e1d87f26f5a632fe43e6c58f8f7e6bc47bdf](https://github.com/Finschia/ibc-go/tree/d855e1d87f26f5a632fe43e6c58f8f7e6bc47bdf) | [v1.0.0-rc2](https://github.com/Finschia/finschia/tree/v1.0.0-rc2) |
| v1.0.0-rc6     | [v0.47.0-rc6](https://github.com/Finschia/finschia-sdk/tree/v0.47.0-rc6) | [v0.1.3](https://github.com/Finschia/wasmd/tree/v0.1.3) | [v3.3.3](https://github.com/Finschia/ibc-go/tree/v3.3.3)                                                                            | [v1.0.0-rc6](https://github.com/Finschia/finschia/tree/v1.0.0-rc6) |
| v1.0.0         | [v0.47.0](https://github.com/Finschia/finschia-sdk/tree/v0.47.0)         | [v0.1.3](https://github.com/Finschia/wasmd/tree/v0.1.3) | [v3.3.3](https://github.com/Finschia/ibc-go/tree/v3.3.3)                                                                            | [v1.0.0](https://github.com/Finschia/finschia/tree/v1.0.0)         |
| v2.0.0-rc1     | [v0.47.1-rc1](https://github.com/Finschia/finschia-sdk/tree/v0.47.1-rc1) | [v0.1.4](https://github.com/Finschia/wasmd/tree/v0.1.4) | [v3.3.3](https://github.com/Finschia/ibc-go/tree/v3.3.3)                                                                            | [v1.0.0](https://github.com/Finschia/finschia/tree/v1.0.0)         |

## Maintenance

This section is for maintainers of this repo, not users.

1. Set desired version of each module at `env` file.

```
# Choose from https://github.com/Finschia/finschia/releases
FINSCHIA_SDK_VERSION="v0.47.1-rc1"
WASMD_VERSION="v0.1.4"
IBC_GO_VERSION="v3.3.3"
```

2. run build.sh

   Each module will be checkout to the version specified in the env file

```
./build.sh
```
