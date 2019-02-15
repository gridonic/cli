// @see https://github.com/chalk/chalk
const chalk = require('chalk');

// Helper function to format modules consistently during console output
module.exports = modules => modules
    .map(({ name, version }) => chalk`{gray ${name} (v${version})}`)
    .join('\n');
