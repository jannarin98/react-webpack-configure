import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  './src/index.html',
            filename: 'index.html',
            hash: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
}