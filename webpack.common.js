const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/script.js",
    another: "./src/js/index.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/forms-playground.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "forms-playground.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/js-fun.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "js-fun.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Notatki-Grid.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "Notatki-Grid.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Notatki.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "Notatki.html",
    }),
  ],
};
