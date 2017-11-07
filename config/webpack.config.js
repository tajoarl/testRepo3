module.exports = {
    entry: './app/index.js',
    output: {
        path: process.cwd() + '/public/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        host: '0.0.0.0',
        contentBase: process.cwd() + '/public/',
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