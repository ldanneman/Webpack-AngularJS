const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular Component Demo',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    publicPath: "/",
    contentBase: path.join(process.cwd(), "dist")
  }
}