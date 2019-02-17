#!/usr/bin/env node

// @see https://github.com/sindresorhus/meow
const meow = require('meow');

const helpText = require('./helpText');
const apps = require('./apps');

// Get meow object
const cli = meow(helpText(apps.supported), {
        description: false,
        flags: apps.flags
    }
);

// Retrieve command and arguments for the command
const [command, ...args] = cli.input;

try {
    apps.run(command, args, cli.flags);
} catch (e) {
    console.log(cli.help)
}

