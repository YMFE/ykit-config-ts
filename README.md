# ykit-config-ts

## Features

- 编译 ES6+, TypeScript 代码（不需单独引入 es6 插件）

## 安装

## Usage

如果是新项目，在一个空的目录下执行：

```shell
$ ykit init ts
```

会在当前目录下生成一个初始工程。

如果是已有项目，在项目中执行：

```
$ npm install ykit-config-ts --save
```

编辑 `ykit.js`，引入插件：

```
module.expor = {
    plugins: ['ts']
    // ...
};
```

## 示例

查看：https://github.com/roscoe054/ykit-starter-ts
