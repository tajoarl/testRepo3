module.exports = {
    entry: '/app/index.js',
    output: {
        path: 'public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        contentBase: 'public',
        disableHostCheck: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}