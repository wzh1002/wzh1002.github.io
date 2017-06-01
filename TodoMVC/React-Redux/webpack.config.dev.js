const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mainfest = require('./manifest.json');

const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');
const port = 1010;
const publicPath = '/';

module.exports = {
    context: __dirname,
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },
    output: {
        path: dist,
        filename: 'js/[name].bundle.js',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //exclude: /node_modules/,
                include: src,
                use: [
                    'babel'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style',
                    'css'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)
        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
        new HtmlWebpackPlugin({
            template: './src/index.html',
            env: 'dev'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: mainfest
        }),
    ],
    devtool: '#cheap-module-source-map',
    externals: {
        //'react': 'React',
        //'react-dom': 'ReactDOM',
        //'redux': 'Redux',
        //'react-redux': 'ReactRedux',
        'director/build/director': 'window'
    },
    devServer: {
        port: port,
        hot: true,
        contentBase: __dirname,
        publicPath: publicPath,
        stats: {
            colors: true
        }
    },
    resolve: {

    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};