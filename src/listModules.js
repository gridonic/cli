// @see https://github.com/chalk/chalk
const chalk = require('chalk');

const nameColumn = 25;
const versionColumn = 12;
const notFound = 'not found'.padEnd(versionColumn);

// Helper function to format modules consistently during console output
module.exports = modules => modules
    .map(({ name, version, global }) => {
        let location;

        if (global === true) {
            location = chalk`{yellow global}`;
        } else {
            location = chalk`{gray local}`;
        }

        // If version is null it means the module was not found
        if (version === null) {
            return chalk`{red.bold ${name.padEnd(nameColumn)}} {gray ${notFound}}`;
        }

        return chalk`{gray ${name.padEnd(nameColumn)} ${`${version}`.padEnd(versionColumn)}} ${location}`;
    })
    .join('\n');
