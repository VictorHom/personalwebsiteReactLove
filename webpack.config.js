var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/browser"
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
