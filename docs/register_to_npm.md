# How to register package to npm

Requires nodejs v14.x.
If you use a later version, packages.json/files may not work properly, and unwanted files may be packaged together.

## 1. npm login

```shell
npm login
```

check the id is right.

```shell
npm whoami
```

## 2. check the latest registered package.

```shell
npm info @finschia/finschia-proto
```

## 3. publish

```shell
npm publish
```

This doc is summary of [npm Docs](https://docs.npmjs.com/creating-a-new-npm-user-account)
