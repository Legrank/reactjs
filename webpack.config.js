const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, 'static_src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js',
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                  presets: ['@babel/env', '@babel/react'],//пресеты бабеля
                  plugins: [
                    [
                        "@babel/plugin-proposal-class-properties", //npm install @babel/plugin-proposal-class-properties
                        {                                          //возможность обьявлять стейт вне конструктора
                            "loose": true
                        }
                    ]
                ]
                },
            },
            {
                test: /\.css$/,//npm install css-loader style-loader
                loader: 'style-loader!css-loader',//подключаем стили
            },
        ],
    },
    resolve: {//Авто импорт файлов с расширение jsx
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
     },
}