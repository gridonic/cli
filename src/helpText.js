// @see https://github.com/chalk/chalk
const chalk = require('chalk');

const brand = require('./brand');
const listCommands = require('./listCommands');
const listModules = require('./listModules');

module.exports = modules => chalk`${brand}
{blue Usage}
  {gray $} gridonic <command> <args>

{blue Commands}
${listCommands(modules)}


${listModules(modules)}
`;
