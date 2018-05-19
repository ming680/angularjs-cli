## AngularJS-CLI

[![npm](https://img.shields.io/npm/v/angular1.x-cli.svg?style=flat)](https://www.npmjs.com/package/cli-angularjs?activeTab=versions)

通过`angularjs-cli`生成基础项目，开发，打包，命令行操作，自动化完成；

### 安装
```
npm install -g angular1.x-cli
```
由于重名，NPM包的名字是angular1.x-cli；

### 属性
* 生成的项目使用`angular1.4.6`进行开发；
* 使用`angular-ui-router`进行路由配置，文档；
* 使用`ocLazyLoad`配合`webpack`进行懒加载；
* 使用`happypack`加快打包速度；
* 打包后可以直接用于生成环境；
* 支持ES6语法；

### 使用
```
ang new 生成项目文件

ang serve 启动开发服务

ang g|generate c|controller <name> 生成一个controller

ang g|generate d|directive <name> 生成一个directive

ang g|generate s|service <name> 生成一个service

ang g|generate f|fiter <name> 生成一个filter

ang g|generate config <name> 生成一个config

ang g|generate m|module 生成一个模块，用于懒加载

ang build 打包压缩 生成dist目录
```

### 详解

声明：所有命令中的目录/文件，请使用驼峰写法，将生成非驼峰的文件，和以驼峰命名的变量添加到文件中

```
ang g c myController
```
在`src/app`文件夹下生成一个`my-controller.js`文件，同时添加一个名为`myController`的`controller`；

```
ang g c controllers/myController
```
在生成在`src/app/controllers`文件夹下；

```
ang g m myModule
```
在`src/app/module `生成一个`my-module`的模块；

```
ang g c module/myModule/myController
```
在`src/app/module/my-module`文件夹下生成`my-controller.js`，并添加一个名`myController`的`controller`；此controller将随此模块一并加载到文件中；如有随此模块一并引入的其他文件，通过`import`添加到`src/app/module/my-module/module-import.js`文件中，此文件需以懒加载分方式手动注入到路由配置中；


在`src/app/app-router.js中`配置路由，如懒加载模块，按照文件中注释的引入方式配置即可；

### 规划
* 未来将会对此脚手架升级到最新版`angularJs`；
* 支持`component`；
* 优化`webpack`配置；
* 提供配置文件`angularjs-cli.json`;
