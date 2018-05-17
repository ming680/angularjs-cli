const webpack = require('webpack');
const path = require('path');
const merage = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const common = require('./webpack.common.js');
const { rootPathAdd } = require('../utils');



module.exports = merage.smart(common, {
    mode: 'production', //表明是生产环境
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 抽取
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                },
            }
        }
    }

})