const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: {
    app: path.join(src, 'index.js')
  },
  output: {
    path: dist,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '~': src
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [src],
        exclude: [node_modules],
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|png|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    publicPath: '/',
    port: 3000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      template: path.join(src, 'index.ejs'),
      path: dist,
      title: 'React or Die',
      author: 'Jakub Barczyk',
      description: 'An up-to-date React starter kit with preconfigured Babel and Webpack.',
      keywords: 'Babel,React,Redux,Router,Webpack',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
