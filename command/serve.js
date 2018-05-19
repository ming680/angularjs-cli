const path = require('path');
const shell = require('shelljs');
module.exports = function () {
    process.env.NODE_ENV = 'development';
    
    shell.exec(`node ${path.join(__dirname, '../node_modules/webpack-dev-server/bin/webpack-dev-server.js')} --config ${path.join(__dirname, '../webpack/webpack.dev.js')} --color`)
}