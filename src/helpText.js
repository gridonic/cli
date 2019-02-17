// @see https://github.com/chalk/chalk
const chalk = require('chalk');

const brand = require('./brand');
const printUsage = require('./printUsage');

module.exports = apps => chalk`${brand}
{blue Usage}
  {gray $} gridonic <app command> [args] [flags]

{blue Apps}

${apps.map(printUsage).join('\n\n')}
`;
