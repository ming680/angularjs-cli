const chalk = require('chalk');
const path = require('path');

const { rootPathAdd, addModule, unHump} = require('../utils');

module.exports = function (file_path) {
    // 转换成'-' 非驼峰写法
    file_path = unHump(file_path);
    // 获取文件名  
    const file_name = file_path.split('/')[file_path.split('/').length - 1];
    if(!/[A-z]/.test(file_name[0]) || !file_name){
        console.log(chalk.red('error'), ' The file_name must start with a letter')
        return 
    }
    // 要添加到的路径  
    let add_path = rootPathAdd(`src/app/${file_path}/../${file_name}`);
    let reg =/(module[\/\\][\w-]*)$/;
    // 判断 最后一位 之前是否有 module
    if(!reg.test(add_path)){
        add_path = rootPathAdd(`src/app/${file_path}/../module/${file_name}`);
    }
    addModule(add_path, file_name)
}