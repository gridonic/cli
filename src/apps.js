// @see https://github.com/sindresorhus/import-cwd
const importCwd = require('import-cwd');

// @see https://github.com/sindresorhus/import-global
const importGlobal = require('import-global');

const brand = require('./brand');


// Apps supported by our CLI
const supported = [

    // @see https://github.com/gridonic/webpack
    '@gridonic/webpack',

    // @see https://github.com/gridonic/generator
    '@gridonic/generator',

].map((module) => {
    const local = importCwd.silent(module);
    const global = importGlobal.silent(module);

    if (local === null && global === null) {
        return {
            name: module,
            version: null,
            commands: {},
            flags: {}
        }
    }

    return {
        ...(local || global).cli,
        global: global !== null
    };
});

// Collects all flags from all supported apps
const flags = ((apps) => {
    const result = {};

    apps.forEach(
        ({ flags }) => Object.entries(flags).forEach(
            ([key, value]) => result[key] = value
        )
    );

    return result;
})(supported);

// Tries to run command by one of our supported apps
const run = (command, args = [], flags = {}) => {
    const app = supported.find(
        search => Object.keys(search.commands).find(key => key === command) !== undefined
    );

    if (app === undefined) {
        throw new Error(`${command} is unknown.`);
    }

    console.log(brand);

    app.commands[command].fn(args, flags);
};

module.exports = {
    supported,
    flags,
    run
};
