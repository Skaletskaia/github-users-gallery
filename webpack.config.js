const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: {
    main: "./src/script.tsx",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@components": path.resolve("./src/Components"),
    },
  },

  optimization: {
    runtimeChunk: mode === "production" ? false : "single",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash].css",
    }),
    new StylelintPlugin({
      files: "src/{**/*,*}.css",
    }),
    new ESLintPlugin({
      files: "src/{**/*,*}.{tsx,ts}",
    }),
  ],

  devServer: {
    client: {
      overlay: false,
    },
    hot: true,
    open: true,
  },
};
