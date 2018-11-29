var path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "lte-earfcn-calculator.min.js",
    library: "",
    libraryTarget: "commonjs" // If remove this line then resolve : Uncaught ReferenceError: exports is not defined
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
