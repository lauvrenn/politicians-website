module.exports = {
    entry: './pages/index.tsx',
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.(tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }]
    }
};
