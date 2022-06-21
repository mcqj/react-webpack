const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const outDir = path.resolve(__dirname, 'dist')
const srcDir = path.resolve(__dirname, 'src')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: srcDir,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    static: outDir,
  },
})