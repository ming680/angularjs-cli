## Angular CLI

[![npm](https://img.shields.io/npm/v/angular1.x-cli.svg?style=flat)](https://www.npmjs.com/package/angular1.x-cli?activeTab=versions)

[Engulish](https://github.com/xuMINGzhi9/angularjs-cli/blob/master/README.md)

## 介绍
* 生成的项目使用angular1.4.6进行开发;
* 使用 `angular-ui-router` 进行路由配置;
* 使用 `ocLazyload` 配合 `webpack`进行懒加载;
* 使用 `happypack` 加快打包速度;
* 打包后的文件可以直接用于生产环境;
* 支持 `ES6`;

## 目录

* [安装](#安装)
* [使用](#使用)
* [规划](#规划)
* [许可证](#许可证)

## 安装

```bash
npm install -g angular1.x-cli
```
## 使用

```bash
ang help
```

### 创建项目并启动开发服务

```bash
ang new PROJECT-NAME
cd PROJECT-NAME
ang serve
```
服务起在 `http://localhost:8080/`。如果你更改了项目的文件，服务会自动更新。

### 生成 Controllers， Directives， Service， Filters ， Configs 以及 Modules

你可以在表中找到所有可能的命令：

类别  | 方法
---       | ---
Controller | `ang g controller <name>`
Directive | `ang g directive <name> `
Service | `ang g service <name>`
Filter | `ang g fiter <name>`
Config | `ang g config <name>`
Module | `ang g module <name>`

angularjs-cli 将会把生成的`controllers`， `directives`， `services`， `filters`，  `configs` 自动的添加到 `app/app-config` 文件夹中的相应文件中。如果你需要添加到其他的模块中，请按照以下步骤进行：
 1. `ng g module new-module` 创建一个新的模块
 2.  执行 `ng g controller module/new-module/new-controller`

新创建的 `controllers`， `directives`， `services`， `filters`， `configs` 将会被添加到你新创建的模块的`new-module/config` 文件夹中的相应文件中。你需要手动的引入这个模块到 `src/app/app-router.js` ，如果你有其他的文件要随此文件一并加载，一可以在 `new-module/module-main.js` 文件中通过 `import`引入这些文件。
在`src/app/app-router.js`中，你可以按照文件中的注释配置路由和懒加载。

### 打包

```bash
ang build
```

## 规划
* 升级 `angularjs` 到最新的版本；
* 支持 `component`；
* 优化 `webpack` 配置；
* 提供配置文件 `angularjs-cli.json`；

## 许可证
MIT

