const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/Principal',
    output : {
        filename: 'principal.js',
        path: __dirname + '/public'
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
        }]
    }
}