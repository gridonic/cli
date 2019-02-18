#!/usr/bin/env node

// @see https://github.com/sindresorhus/meow
const meow = require('meow');

const helpText = require('./helpText');
const { supported, flags, findByCommand, run } = require('./apps');

// Get meow object
const cli = meow(helpText(supported), {
        description: false,
        flags
    }
);

// Retrieve command and arguments for the command
const [command, ...args] = cli.input;

if (findByCommand(command) === undefined) {
    return console.log(cli.help);
}

run(command, args, cli.flags);
