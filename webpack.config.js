const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const __DEV__ = NODE_ENV === "development";

module.exports = {
  mode: NODE_ENV || "development",
  entry: ["./src/thrower-monitor.js", "./src/styles/styleClassNames.js"],
  output: {
    path: path.join(__dirname, "lib"),
    filename: "[name].bundle.js",
  },
  optimization: {
    minimize: false,
  },
  plugins: __DEV__
    ? [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
          template: path.join(__dirname, "example", "index.html"),
        }),
      ]
    : [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: __DEV__
    ? {
        hot: true,
        contentBase: path.join(__dirname, "example"),
        inline: false,
        port: 3000,
      }
    : {},
  watch: __DEV__,
};
