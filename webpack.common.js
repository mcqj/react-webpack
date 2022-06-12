const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outDir = path.resolve(__dirname, 'dist')
const srcDir = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: `${srcDir}/index.js`,

  plugins: [
    new HtmlWebpackPlugin({
      title: 'JMQ Development',
      template: `${srcDir}/index.html`,
      favicon: `${srcDir}/assets/favicon.ico`,
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
        include: srcDir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
  },
}