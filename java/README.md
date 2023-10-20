# finschia-proto for java, kotlin

## Build

You can build the project by following command, which also runs all the unit tests:

```shell
$ git submodule update --init
$ ./gradlew build
```

If you are a developer or contributor and trying to use another version of submodules, `git checkout`
the appropriate version in the submodule before building this repository. The following command is an example
of using finschia-sdk `v0.48.0`.

```shell
cd ../repositories/finschia-sdk && git checkout v0.48.0 && cd -
cd ../repositories/wasmd && git checkout v0.2.0 && cd -
cd ../repositories/ibc-go && git checkout v4.3.1 && cd -
```
