const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outDir = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: outDir,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JMQ Development',
      template: './src/index.html',
      favicon: './src/assets/favicon.ico'
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: outDir,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}