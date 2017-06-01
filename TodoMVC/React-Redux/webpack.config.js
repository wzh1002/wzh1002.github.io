const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');

module.exports = {
    context: __dirname,
    entry: {
        app: [
            './src/index.js'
        ]
    },
    output: {
        path: dist,
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //exclude: /node_modules/,
                include: src,
                use: {
                    loader: 'babel'
                }
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                ]
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("css/[name].css")
    ],
    devtool: 'cheap-module-eval-source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        'director/build/director': 'window'
    },
    resolve: {

    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
    ]);
}