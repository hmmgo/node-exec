//import webpack and webpack-node-externals
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    // configuration
    {
    // source js file
    entry: './server.js',

    // output js file
    output: {
        path: __dirname + '/',
        filename: 'server.bundle.js',
    },
    // loaded module in this task only babel
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()]
    }
]