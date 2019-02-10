const merge = require(`webpack-merge`);
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`); // minify js
const PurgecssPlugin = require(`purgecss-webpack-plugin`); // remove unnecessary CSS

const purgecssConfig = require(`./purgecss.config.js`);
const common = require(`./webpack.common.js`);

module.exports = merge(common, {
  mode: `production`,

  output: {
    filename: `[name].[hash:5].js`,
    chunkFilename: `[id].[hash:5].css`,
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 8,
          compress: {
            warnings: true,
            drop_console: true,
          },
        },
      }),

      new MiniCssExtractPlugin({
        filename: `[name].[hash:5].css`,
        chunkFilename: `[id].[hash:5].css`,
      }),

      new PurgecssPlugin(purgecssConfig),

      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
