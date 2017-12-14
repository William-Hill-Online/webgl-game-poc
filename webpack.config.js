const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

//clean paths
let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root:     __dirname,
  verbose:  true,
  dry:      false //actually remove files 
}

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
},
   module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { 
                configFileName: 'tsconfig.json'
            }
          }]
      }]
   },
   plugins: [
      new CleanWebpackPlugin(pathsToClean, cleanOptions),
      new HtmlWebpackPlugin({
          template: './src/html/index.html',
          hash: true

      }),
      new CopyWebpackPlugin([
            { from: 'resources',
              to: 'resources'
            }
        ]),
    //   new webpack.LoaderOptionsPlugin({
    //        minimize: true,
    //        debug: false
    // }),
    //  new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   minimize: true,
    //   sourceMap: true,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true
    //   },
    //   compress: {
    //     screw_ie8: true
    //   },
    //   comments: false
    // })
  ]
};