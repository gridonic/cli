#!/usr/bin/env node

// @see https://github.com/sindresorhus/meow
const meow = require('meow');

const helpText = require('./helpText');
const hasCommand = require('./hasCommand');
const runCommand = require('./runCommand');
const supportedModules = require('./supportedModules');

// Get meow object
const cli = meow(
    helpText(supportedModules), {
        description: false,
        flags: {}
    }
);

// Retrieve command and arguments for the command
const [command, ...args] = cli.input;

// Find a module that supports the requested command
const targetModule = supportedModules.find(module => hasCommand(module, command));

// Unknown command. Print help.
if (targetModule === undefined) {
    return console.log(cli.help);
}

runCommand(targetModule, command, args);

