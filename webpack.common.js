const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(css)$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }]
        }, //css only files
        {
          test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
          use: {
          loader: 'file-loader',
          options: {
          name: '[name].[ext]',
          outputPath: 'images', // Guardará las imágenes en una carpeta "images" dentro de "dist"
        }
          }  
        }
        // { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png', '.jpg', '.jpeg', '.svg'],
    fallback: {
      "path": require.resolve("path-browserify"),
      "vm": require.resolve("vm-browserify"),
      buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify'),
            zlib: require.resolve('browserify-zlib'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
          }
  },
  
  
  plugins: [
    new HtmlWebpackPlugin({
        favicon: '4geeks.ico',
        template: 'template.html'
    }),
    new Dotenv({ safe: true, systemvars: true })
  ]
};