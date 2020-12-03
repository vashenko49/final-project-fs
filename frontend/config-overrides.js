const path = require('path')
const fs = require('fs')
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addWebpackPlugin,
} = require('customize-cra')

module.exports = (config, env) => {
    config.module.rules.push({
        exclude: /node_modules/,
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: '@svgr/webpack',
                options: {
                    babel: false,
                    icon: true,
                },
            },
        ],
    })

    return override(
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        }),
        addLessLoader({
            lessOptions: {
                modules: true,
                javascriptEnabled: true,
            },
        }),
    )(config, env)
}