## angularjs-cli

[![npm](https://img.shields.io/npm/v/angular1.x-cli.svg?style=flat)](https://www.npmjs.com/package/angular1.x-cli?activeTab=versions)

[中文文档](https://github.com/xuMINGzhi9/angularjs-cli/blob/master/README-zh-cn.md)

## Introduction

* The generated project is developed with angular1.4.6;
* Routing configuration using `angular-ui-router`;
* Lazy loading width `ocLazyload` and `webpack`;
* Using `happypack` to speed up the packing speed;
* After packaging, it can be used directly for the generation of the environment;
* Support `ES6`

## Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Planning](#planning)
* [License](#license)

## Installation

```bash
npm install -g angular1.x-cli
```
## Usage

```bash
ang help
```

### Generating and serving an AngularJS project via a development server

```bash
ang new PROJECT-NAME
cd PROJECT-NAME
ang serve
```
Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

### Generating Controllers, Directives, Service, Filters , Configs and Modules

You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
Controller | `ang g controller <name>`
Directive | `ang g directive <name> `
Service | `ang g service <name>`
Filter | `ang g fiter <name>`
Config | `ang g config <name>`
Module | `ang g module <name>`

angularjs-cli will add reference to `controllers`, `directives`, `services`, `filters`, and `configs` automatically in the `app/app-config`. If you need to add this references to another custom module, follow this steps:

 1. `ang g module new-module` to create a new module
 2.  call `ang g controller module/new-module/new-controller`

This should add the new `controllers`, `directives`, `services`, `filters`, and `configs`  reference to the `new-module/config` you've created.
You need to manually introduce this module to `src/app/app-router.js`.
If you'll have other files to load with this module,you can introduce those files in `new-module/module-main.js` with `import`.
In`src/app/app-router.js`, you can configure it  according to the annotations in the file.

### Build

```bash
ang build
```

## Planning
* Upgrade `angularjs`to the latest edition;
* Support `component`;
* To make `webpack` reaches the optimization deploy;
* provide a configuration file named `angularjs-cli.json`;

## License
MIT

