1. npm i --save-dev @babel/core @babel/cli - установка зависимостей babel
2. npx babel src --out-dir build - указание места куда будут перекидываться оптимизированные файлы
3. npx babel src --out-dir build --plugins @babel/plugin-transform-template-literals,@babel/plugin-transform-classes 
,@babel/plugin-transform-block-scoping - длинющая команда
4. npx babel src --out-dir build ---- с .babelrc
5. "presets": ["@babel/env"] - все последние стандарты, не включая эксерементальный синтаксис
6. Можно миксовать плагины и пресеты
    "presets": ["@babel/env"],
    "plugins": ["@babel/proposal-class-properties"]
7. Вторым аргументом в presets выступает target, который обновляет код в зависимости от поддержки браузеров, указанных в массиве
   {
    "presets": [["@babel/env",
        {
            "targets": {
                "edge": 18,
                "chrome": 74
            }
        }]],
    "plugins": ["@babel/proposal-class-properties"]
    }
8. 
    {
    "presets": [["@babel/env",
        {
            "debug": true,
            "targets": [  
                "> 0.3%",  // более 0.3 процента используемых браузеров
                "not ie > 0",
                "last 2 chrome versions" // или так
            ]
        }]],
    "plugins": ["@babel/proposal-class-properties"]
    }
9. Вместо babelrc можно поместить их в package.json
 "browserslist": [
    "> 0.3%"
  ]
10. так же можно хранить версии браузеров в файле .browserslistrc
    last 2 chrome versions
    last 2 firefox versions
    last 1 edge versions
11. 
    npm i core-js
12. код добавляющий глобальную функцию если ее еще нет в браузере
    {
    "presets": [["@babel/env",
        {
            "corejs": 3,
            "useBuiltIns": "usage",
            "debug": true,
            "modules": false
        }]],
    "plugins": ["@babel/proposal-class-properties"]
    }
13. npm i react react-dom
14. npm i --save-dev @babel/preset-react
15. 
    {
    "presets": [["@babel/env",
        {
            "corejs": 3,
            "useBuiltIns": "usage",
            "debug": true,
            "modules": false
        }],
    "@babel/react"],
    "plugins": ["@babel/proposal-class-properties"]
    }

16. npm i --save-dev webpack webpack-cli
17. npx webpack // запуск
18. npx webpack --mode development // установка режима
19. можно добавить файл конфига
    module.exports = {
        mode: "production"
    };
20. в файле пакадже джейсон
    "scripts": {
        "start": "webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
21. npm i --save-dev file-loader // лоадер
22. Теперь мы можем импортировать картинки в формате пнг
    module.exports = {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.png$/,
                use: [ { loader: 'file-loader' } ]
            }
        ]
    }
};
23. 
    module.exports = {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.png$/,
                use: [ 
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                 ]
            }
        ]
    }
};
24. 
    module.exports = {
    mode: "production",

    module: {
        rules: [
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
                test: /\.(ttf|otf|eot|woff|woff2)$/,
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
    }
};

25. npm i --save-dev babel-loader // лоадер вебпак бабель
26. {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader'
            }
        ]
    },

27. npm i --save-dev css-loader
26. npm i --save-dev style-loader
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            { loader: 'style-loader'},
            { loader: 'css-loader'}
            
        ]
    },
27. npm i --save-dev node-sass sass-loader
    {
        test: /\.(s[ca]ss)$/,
        exclude: /node_modules/,
        use: [
            { loader: 'style-loader'},
            { loader: 'css-loader'},
            { loader: 'sass-loader'}
        ]
    },

import './main.scss'; // index.js

28. Упрощенная запись
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },

    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
    },

    {
        test: /\.(s[ca]ss)$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    },

29. const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Webpack',
            buildTime: new Date().toISOString()
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ]
