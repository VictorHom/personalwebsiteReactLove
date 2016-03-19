var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'browser'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
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
  ]
}
