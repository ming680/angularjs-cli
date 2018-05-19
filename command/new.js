// 提供 交互式的 命令  
const inquirer = require('inquirer');
const shell = require('shelljs');
const fsExtra = require('fs-extra');
const {rootPathAdd} = require('./../utils');
const ora = require('ora');
const path = require('path');

module.exports = function(){
    const defaultName = 'angularjs-pro';
    const question = [{
        type : 'input',
        name : 'projectName',
        message : `project-name`,
        default : defaultName
    }]
    inquirer
    .prompt(question)
    .then(answer=>{
        const {projectName} = answer;
        const spinner = ora('create template...');
        spinner.start()
        fsExtra.copy(path.join(__dirname, '../templates/angularjs-pro'), projectName)
        .then(function(){
            spinner.stop()
            shell.cd(projectName);
            shell.exec('npm install')
        })
    })
}