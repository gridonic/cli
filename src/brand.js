// @see https://github.com/chalk/chalk
const chalk = require('chalk');

// Local package information
const pkg = require('../package.json');

module.exports = chalk`
{blue.bold Gridonic} 🖖
{gray.italic Command Line Interface (v${pkg.version})}

`;
