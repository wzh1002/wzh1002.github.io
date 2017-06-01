const webpack = require('webpack');
const { resolve } = require('path');

const vendors = [
    'react',
    'react-dom',
    'redux',
    'react-redux'
];

const dir = resolve(__dirname, 'static');

module.exports = {
    entry: {
        "lib": vendors
    },
    output: {
        path: dir,
        filename: 'react_[name].js',
        library: 'react_[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: 'react_[name]',
            context: __dirname
        }),
        //new webpack.optimize.UglifyJsPlugin({
        //    sourceMap: true,
        //    compress: {
        //        warnings: false
        //    }
        //}),
    ]
};
