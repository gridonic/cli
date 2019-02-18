// @see https://github.com/chalk/chalk
const chalk = require('chalk');

// Used for String.padEnd too mimic a column and keep visual output structured
const firstColumn = 24;

// Helper function to format apps consistently during console output
module.exports = ({ name, version, global, commands, flags, status }) => {
    let location;

    if (global === true) {
        location = chalk`{yellow global}`;
    } else {
        location = chalk`{gray local}`;
    }

    // If version is null it means the app was not found
    if (status !== null) {
        return chalk`  {red.bold ${name}} {gray ${status}}`;
    }

    // Print app details
    let result = [chalk`  {white ${name}} {gray (${version}, ${location})}`];

    // Print app commands
    Object.entries(commands)
          .forEach(([key, { description }]) => result.push(
              `    ${key.padEnd(firstColumn)} ${description}`
          ));

    // Print app flags
    Object.entries(flags)
        .forEach(([key, { alias, description }]) => result.push(
            `    ${`--${key}, -${alias}`.padEnd(firstColumn)} ${description}`
        ));

    return result.join('\n');
};
