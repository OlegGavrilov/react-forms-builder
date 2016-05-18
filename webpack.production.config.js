module.exports = {
  entry: {
    app: ["./src/index.jsx"]
  },

  output: {
    path: __dirname + "/lib",
    filename: "app.js",
    library: 'ReactFormBuilder',
    libraryTarget: 'umd',
  },

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'react',
    'react/addons': 'react/addons',
    'jquery': 'jquery',
    'bootstrap': 'bootstrap'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: ["babel"],
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  },
  sassLoader: {
    includePaths: [__dirname + "/css"]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
  }
}
