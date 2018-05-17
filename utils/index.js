const chalk = require('chalk')
const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const glob = require('glob')
const postionModule = function (file_path) {
    let reg = /.*[\\\/]module[\\\/][\w-]*[\\\/]/g;
    let arr = file_path.match(reg) || [];
    let r_path = ''
    for (let path of arr) {
        r_path += path;
    }
    if (r_path) {
        return path.join(r_path, 'config/')
    } else {
        return utils.rootPathAdd('src/app/app-config/')
    }

}
const makeDir = function (dir_path, last_dir) {
    last_dir = last_dir == undefined ? dir_path : last_dir;
    let exists = fs.existsSync(path.dirname(dir_path));
    if (exists) {
        // 父文件夹 存在
        if (!fs.existsSync(dir_path)) {
            // 当前文件夹不存在 
            fs.mkdirSync(dir_path);
            if (dir_path != last_dir) {
                makeDir(last_dir)
            }
        }
    } else {
        makeDir(path.dirname(dir_path), last_dir)
    }
}
const fileCheck = function (file_path, file_name) {
    // 判断 文件是否存在  
    if (fs.existsSync(file_path)) {
        console.log(chalk.red('error'), 'The file is already exitst')
        return 'err';
    }
    // 创建各级文件夹
    makeDir(path.dirname(file_path));
    return 'success'
}
const utils = {
    rootPathAdd: add_path => path.resolve(add_path || ""),
    unHump: (str) => {
        let reg = /([A-Z])/g;
        let result = str.replace(reg, function ($, $1) {
            return '-' + $1.toLowerCase()
        })
        return result;
    },
    toHump: (str) => {
        let reg = /-(\w)/g;
        let result = str.replace(reg, function ($, $1) {
            return $1.toLocaleUpperCase()
        })
        return result;
    },
    addFile: (option) => {
        if (fileCheck(option.file_path, option.file_name) == 'err') return;
        dealFile(option)
    },
    addModule : (file_path, file_name)=>{
        if (fileCheck(file_path, file_name) == 'err') return;
        fsExtra.copy('../templates/module', file_path)
        .then(()=>{
            glob.sync(path.join(file_path, '**')).forEach((src) => {
               console.log(chalk.green('create success'), `${src}`)
            })
        })

        

    }
}
const dealFile = function (option) {

    let { tpl_file, rep_reg, file_path, file_name, config_dirname, arr_name } = option;
    // 读取文件
    let data = fs.readFileSync(tpl_file, 'utf8')
    // 内容替换
    file_name = utils.toHump(file_name)
    data = data.replace(rep_reg, file_name);
    // 写入新文件
    fs.writeFileSync(file_path, data)
    console.log(chalk.green('create success'), `${file_path}`)
    // config 目录  
    let config = path.join(postionModule(file_path), config_dirname);
    let relative_path = path.relative(postionModule(file_path), file_path).replace(/\\/g, '/');
    // 读取 config 文件  
    data = fs.readFileSync(config, 'utf8');
    // 追加 config 文件
    let add_str = `\nimport ${file_name} from '${relative_path}';\n${arr_name}.push({name : '${file_name}', content : ${file_name} })`
    if (arr_name == 'configs') {
        add_str = `\nimport ${file_name} from '${relative_path}';\n${arr_name}.push(${file_name})`
    }
    fs.appendFileSync(config, add_str, 'utf8');
    console.log(chalk.green('update success'), `${config}`)
}


module.exports = utils