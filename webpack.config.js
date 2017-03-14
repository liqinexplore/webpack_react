var path = require('path');
var webpack = require('webpack');
module.exports = {
    resolve: {
        root: [path.resolve('./app/_global/components')],
        extensions: ['', '.js', '.jsx'],
        alias: {//给index.js添加别称
        'rootIndex': path.resolve('./app/index.jsx')
      }
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './app/index.js')
    ],
    output: {
        //path: path.resolve(__dirname, 'build/bundles'),
        //filename:'bundle.js'
        path: __dirname + '/build',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        new webpack.HotModuleReplacementPlugin()
    ]
};
