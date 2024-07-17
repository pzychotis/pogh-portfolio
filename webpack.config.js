// Generated using webpack-cli https://github.com/webpack/webpack-cli

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.mjs',
    output: {
        path: resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
    ],
    module: {
        rules: [
            { test: /\.(mjs|mjsx|js|jsx)$/i, loader: 'babel-loader' },
            { test: /\.css$/i, use: ['style-loader','css-loader'] },
            { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i, type: 'asset' },
        ],
    },
};

module.exports = () => ({ ...config, mode: isProduction ? 'production' : 'development' });
