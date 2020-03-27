const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
        components: path.resolve(__dirname, 'src/components'),
        shared: path.resolve(__dirname, 'src/shared'),
        helpers: path.resolve(__dirname, 'src/helpers')
    },
    extensions: ['.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};