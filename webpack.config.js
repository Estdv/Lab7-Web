const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    page1: "./PPolicia.js",
    page2: "./PAbogado.js",
    page3: "./PDoctor.js",
    page4: "./PIngeniero.js",
    page5: "./PContratista.js",
    page6: "./Villano.js",
    page7: "./Reunion.js",
    page8: "./Final.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./PPolicia.html",
      filename: 'PPolicia.html',
      chunks: ['page1']
    }),
    new HtmlWebpackPlugin({
      template: "./PAbogado.html",
      filename: 'PAbogado.html',
      chunks: ['page2']
    }),
    new HtmlWebpackPlugin({
      template: "./PDoctor.html",
      filename: 'PDoctor.html',
      chunks: ['page3']
    }),
    new HtmlWebpackPlugin({
        template: "./PIngeniero.html",
        filename: 'PIngeniero.html',
        chunks: ['page4']
      }),
      new HtmlWebpackPlugin({
        template: "./PContratista.html",
        filename: 'PContratista.html',
        chunks: ['page5']
      }),
      new HtmlWebpackPlugin({
        template: "./Villano.html",
        filename: 'Villano.html',
        chunks: ['page6']
      }),
      new HtmlWebpackPlugin({
        template: "./Reunion.html",
        filename: 'Reunion.html',
        chunks: ['page7']
      }),
      new HtmlWebpackPlugin({
        template: "./Final.html",
        filename: 'Final.html',
        chunks: ['page8']
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
