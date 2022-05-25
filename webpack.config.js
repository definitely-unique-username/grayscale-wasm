const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmWebpackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    entry: './public/main.js',
    devtool: 'eval-source-map',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new WasmWebpackPlugin({
            crateDirectory: resolve(__dirname, '.') // path to cargo.toml
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
}