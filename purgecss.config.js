const glob = require(`glob-all`);

const config = require(`./config.js`);

// explicit white list of classes
const whitelist = [
  `fade`,
  `show`,
];

// regex patterns to white list
const whitelistPatterns = [
  /^(fa|modal|text|bg|font|border|leading|tracking|object|cursor|d|align|headroom)-/,
  /^category(-.*)?$/,
];

// glob patterns for paths containing content
const content = config.globs.scripts
  .concat(config.globs.layouts)
  .concat(config.globs.content);

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  whitelist,
  whitelistPatterns,
  paths: glob.sync(content, {nodir: true}),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: [`js`, `html`, `md`],
    },
  ],
};
