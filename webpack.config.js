const HTMLWebpackPlugin = require('webpack-plugin');
let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  // have webpack transform all JSX code found in this entry point to ES5
  entry: __dirname + '/app/app.js',
  // once webpack grabs the above files, you can tell it what to do in the below module prop.
  // Each "loader" that you add to the loaders array will represent a transformation that your 
  // code will go through before reaching the browser.
  module: {
    // every loader that you add to the loaders array will represent a transformation 
    // that your code will go through before it reaches the browser
    loaders: [
      {
        // the loader will perform all transformations on files that end in .js
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};