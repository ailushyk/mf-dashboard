const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const config = {
    mode: mode,
    entry: './src/index.tsx',
    output: {
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg|svg)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json',
        '.css',
        '.scss',
        '.jpg',
        'jpeg',
        'png'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx']
      })
    ]

  };

  if (mode === 'development') {
    config.devtool = 'source-map';
    config.devServer = {
      static: path.join(__dirname, 'build'),
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true
    };
  }

  if (mode === 'production') {
    config.output = {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      publicPath: ''
    };
    config.plugins.push(new CleanWebpackPlugin())
  }

  return config;
};
