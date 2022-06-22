import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';

const config: Configuration = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: path.resolve(__dirname, './src/index.ts'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  experiments: {
    topLevelAwait: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.mjs'],
    fallback: {
      "fs" : false,
      "crypto": false,
      "zstd-codec": false,
      "zlib": false,
      "stream": false,
      "url": false,
      "path": false,
      "util": false,
      "http": false,
       "https": false,
       "os": false,
       "net" : false,
       "tls": false,
       "assert": false,
       "atob": false,
       "btoa": false,
       "canvas": false,
       "gl": false,
       "jsdom": false,
       "mathjax": false,
       "tmp": false,
       "xhr": false,
       "xhr2": false,
       "child_process": false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new DefinePlugin({
       "process.env": {
          APP_ENV: JSON.stringify('browser')
      }})
  ],
};

export default config;
