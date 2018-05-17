const path = require('path');
const shell = require('shelljs');
module.exports = function () {
    process.env.NODE_ENV = 'production';
    shell.exec(`node ${path.resolve(__dirname, '../node_modules/webpack/bin/webpack.js')} --config ${path.resolve(__dirname, '../webpack/webpack.prod.js')} --progress  --color`)
}