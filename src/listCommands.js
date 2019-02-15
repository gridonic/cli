// @see https://github.com/chalk/chalk
const chalk = require('chalk');

// Helper function to format commands consistently during console output
module.exports = modules => modules.map(
    module => module
        .commands
        .map(({ command, description }) => chalk`  ${command.padEnd(12)} {gray ${description}}`)
        .join('\n')
    ).join('\n');
