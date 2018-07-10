module.exports = {
  // have webpack transform all JSX code found in this entry point to ES5
  entry: __dirname + './app.js',
  // once webpack grabs the above files, you can tell it what to do in the below module prop.
  // Each "loader" that you add to the loaders array will represent a transformation that your 
  // code will go through before reaching the browser.
  module: {
    // every loader that you add to the loaders array will represent a transformation 
    // that your code will go through before it reaches the browser
    loaders: [
      {
        test: /\.js$/
      }
    ]
  }
};