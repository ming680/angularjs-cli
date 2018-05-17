## AngularJS-CLI
通过`angularjs-cli`生成基础项目，开发，打包，命令行操作，自动化完成

### 安装
```
npm install -g angularjs-cli
```
### 使用
```
angularjs new 生成项目文件
angularjs serve 启动开发服务
angularjs g|generate c|controller <name> 生成一个controller
angularjs g|generate d|directive <name> 生成一个directive
angularjs g|generate s|service <name> 生成一个service
angularjs g|generate f|fiter <name> 生成一个filter
angularjs g|generate config <name> 生成一个config
angularjs g|generate m|module 生成一个模块，用于懒加载
angularjs build 打包压缩 生成dist目录
```
### 详解

声明：所有命令中的目录/文件，请使用驼峰写法，将生成非驼峰的文件，和以驼峰命名的变量添加到文件中

```
angularjs g c myController
```
在`src/app`文件夹下生成一个`my-controller.js`文件，同时添加一个名为`myController`的`controller`；

```
angularjs g c controllers/my-controller
```
在生成在`src/app/controllers`文件夹下；

```
angularjs g m myModule
```
在`src/app/module `生成一个`my-module`的模块；

```
angularjs g c module/myModule/myController
```
在`src/app/module/my-module`文件夹下生成`my-controller.js`，并添加一个名`myController`的`controller`；此controller将随此模块一并加载到文件中；如有随此模块一并引入的其他文件，通过`import`添加到`src/app/module/my-module/module-import.js`文件中，此文件需以懒加载分方式手动注入到路由配置中；


在`src/app/app-router.js中`配置路由，如懒加载模块，按照中文件中注释的引入方式配置即可；

