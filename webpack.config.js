var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: ['webpack/hot/only-dev-server', './app/main.js'],
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devServer: {
    hot: true // need to check if this works
     //can run webpack-dev-server and you get hot reloading
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot','babel-loader'],
      include: path.join(__dirname, 'app'),
      // query: {
      //   presets: ['es2015', 'react']
      // },
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style', // backup loader when not building .css file
        'css!sass' // loaders to preprocess CSS
      ),
      exclude: /node_modules/
    }]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.scss', '.css']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
