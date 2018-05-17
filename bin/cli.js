#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk');

const version = require('../package').version
// 添加版本号
program.version(version, '-v, --version')
// 设置命令-新建项目模板
program.command('new').action(cmd => {
    require('../command/new')();
})
// 启动开发 服务
program.command('serve').action(cmd => {
    require('../command/serve')();
})
// 打包
program.command('build').action(cmd => {
    require('../command/build')();
})
// 生成controller
program.command('generate <generate-type> <file-name>').alias('g')
.action(function(command, fileName){
    if(command == 'c' || command == 'controller'){
        require('../command/controller')(fileName)
    }else if(command == 'f' || command == 'filter'){
        require('../command/filter')(fileName)
    }else if(command == 'd' || command == 'directive'){
        require('../command/directive')(fileName)
    }else if(command == 's' || command == 'service'){
        require('../command/service')(fileName)
    }else if(command == 'config' ){
        require('../command/config')(fileName)
    }else if(command == 'm' || command == 'module' ){
        require('../command/module')(fileName)
    }else{
        console.log(chalk.red('err'), `the command of ${command} is not exist`)
    }
})

program.parse(process.argv)