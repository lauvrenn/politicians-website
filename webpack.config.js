module.exports = {
    entry: './pages/index.tsx',
    output: {
        path: `${__dirname}/dist`,
        publicPath: `${__dirname}/pages`,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }]
    }
};