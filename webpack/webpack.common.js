const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


const { rootPathAdd, allFilesWithFilter } = require('../utils');
const glob = require('glob');


const is_dev = process.env.NODE_ENV == 'development';

const htmlCol = [];

module.exports = {
    entry: {
        index: rootPathAdd('src/main.js'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: rootPathAdd()
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: rootPathAdd('src/index.html'),
            chunks: ['index', 'vendors']
        }),
        new MiniCssExtractPlugin({
            filename: is_dev ? '[name].css' : '[name].[chunkhash:8].css',
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets',
                to: './assets'
            }
        ])
    ],
    output: {
        filename: is_dev ? '[name].js' : '[name].[chunkhash].js',
        path: rootPathAdd('dist')
    },
    resolve: {
        alias: {
            '@': rootPathAdd('src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env']
                        ],
                        plugins: [
                            'transform-runtime',
                            'transform-decorators-legacy'
                        ]
                    },
                }
            }, {
                test: /\.(png|svg|jpg|gif|webp)$/,
                use: [
                    'file-loader',
                ]
            }
        ],

    }
}