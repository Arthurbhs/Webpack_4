const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs--webpack-plugin')
const OptimizeCSSAssentsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/Principal',
    output : {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true 
            }),
            new OptimizeCSSAssentsPlugin({})
        ]
    },

    plugins: [
new MiniCssExtractPlugin({
    filename:'CssStyle.css'
})
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',
                'css_loader',
                'sass-loader',

            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['fle-loader']
        }]
    }
}