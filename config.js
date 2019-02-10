const path = require(`path`);

module.exports = {
  paths: {
    entry: {
      main: path.join(__dirname, `src`, `index.js`),
    },
    output: path.join(__dirname, `dist`),
    assets: path.join(process.cwd(), `site/data`),
    dev: {
      contentBase: path.join(process.cwd(), `./dist`),
      cleanPaths: [`dist/**/*.js`, `dist/**/*.css`, `site/content/webpack.json`],
    },
    src: {
      path: path.join(__dirname, `src`),
      scripts: path.join(__dirname, `src`, `js`),
      styles: path.join(__dirname, `src`, `css`),
    },
  },
  globs: {
    layouts: [`${path.join(__dirname, `site`, `layouts`)}/**/*.html`],
    content: [`${path.join(__dirname, `site`, `content`)}/**/*.md`],
    scripts: [`${path.join(__dirname, `src`, `js`)}/**/*.js`],
  },
};