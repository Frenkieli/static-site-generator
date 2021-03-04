const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  publicPath: './',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
}