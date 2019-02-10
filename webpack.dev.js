const merge = require(`webpack-merge`);
const CleanWebpackPlugin = require(`clean-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

const config = require(`./config`);

const common = require(`./webpack.common`);

module.exports = merge(common, {
  mode: `development`,

  output: {
    filename: `[name].js`,
    chunkFilename: `[id].css`,
  },

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: config.paths.dev.contentBase,
    watchContentBase: true,
    stats: `none`,
    quiet: false,
    open: true,
    historyApiFallback: {
      rewrites: [{from: /./, to: `404.html`}],
    },
  },

  plugins: [
    new CleanWebpackPlugin(config.paths.dev.cleanPaths),

    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[id].css`,
    }),
  ],
});
