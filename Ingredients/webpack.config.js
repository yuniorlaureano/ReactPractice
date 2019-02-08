const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//webpack
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader', {
                    loader:'postcss-loader',
                    options:{
                        plugins: () => [require('autoprefixer')]
                    }
                }] 
            }
        ]
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
}