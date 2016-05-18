module.exports = {
  entry: ["webpack/hot/dev-server", "./app.js"],

  output: {
    filename: "app.js",
    path: __dirname + "/build",
  },

  watch: true,

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ["babel"],
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  }
}
