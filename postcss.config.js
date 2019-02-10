const postcssPresetEnv = require(`postcss-preset-env`);
const tailwindcss = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);

module.exports = () => {
  return {
    plugins: [
      tailwindcss(`./tailwind.config.js`),
      postcssPresetEnv({
        browsers: `last 2 versions`,
      }),
      autoprefixer(),
    ],
  };
};
