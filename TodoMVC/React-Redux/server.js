const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const port = 1010;

config.entry.app.unshift( `webpack-dev-server/client?http://localhost:${port}`, "webpack/hot/only-dev-server", 'react-hot-loader/patch');
config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());

let compiler = webpack(config),
    server = new WebpackDevServer(compiler, {
        hot: true,
        contentBase: __dirname,
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        stats: {
            colors: true
        }
    });

server.listen(port, 'localhost', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log(`server is running at ${port} `);
});