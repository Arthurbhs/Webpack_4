const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/Principal',
    output : {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css_loader',

            ]
        }]
    }
}