const webpack = require('webpack');
const path = require('path');
const merage = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.common.js');
const { rootPathAdd } = require('../utils');

const {
    port = '8080',
    proxy = {},
    open = true,
    hot = true,
    devtool = 'inline-source-map',
    publicPath = '/assets/'
} = {}

module.exports = merage.smart(common, {
    mode: 'development', //表明是开发环境
    devServer: {
        contentBase: rootPathAdd('dist'), // 将dist 目录下的文件作为可访问的文件
        port: port, // 端口 默认 8080
        open: open, // 是否自动打开浏览器 默认 是
        hot: hot, // 是否启用模块热替换 默认 是  // 需使用 webpack.HotModuleReplacementPlugin
        proxy: proxy, // 代理配置  默认 无
    },
    plugins:[
        new FriendlyErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

})