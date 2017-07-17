var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'lte-earfcn-calculator.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babili']
                }
            }
        ]
    }
};