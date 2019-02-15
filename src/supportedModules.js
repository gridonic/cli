// @see https://github.com/sindresorhus/import-cwd
const importCwd = require('import-cwd');

// @see https://github.com/gridonic/webpack
const { cli: webpack } = importCwd('@gridonic/webpack');

// @see https://github.com/gridonic/generator
// const { cli: generator } = require('@gridonic/generator');

module.exports = [
    webpack
];
