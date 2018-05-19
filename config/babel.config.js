const path = require('path');
module.exports = {
    filename: path.join(__dirname, '../config/babel.config.js'),
    presets: [
        'env',
    ],
    plugins: [
        'transform-runtime',
        'transform-decorators-legacy'
    ]
}
