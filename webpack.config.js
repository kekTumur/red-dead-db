const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env = {}) => {

    const { mode = 'development' } = env;

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader: 'style-loader',
            'css-loader'
        ];
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: 'Webpack',
                buildTime: new Date().toISOString()
            })
        ];
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }));
        }
        return plugins;
    };

    return {
        mode: isProd ? 'production' : isDev && 'development',

        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined
        },

        module: {
            rules: [

                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },

                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: getStyleLoaders()
                },

                {
                    test: /\.(s[ca]ss)$/,
                    exclude: /node_modules/,
                    use: [ ...getStyleLoaders(), 'sass-loader' ]
                },
                

                // Loading fonts
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [ 
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                // Loading fonts
                {
                    test: /\.(ttf|otf|eot|woff|woff2|svg)$/,
                    use: [ 
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true
        }
    }
};