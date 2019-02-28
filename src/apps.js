// @see https://github.com/sindresorhus/import-cwd
const importCwd = require('import-cwd');

// @see https://github.com/sindresorhus/import-global
const importGlobal = require('import-global');

// @see https://github.com/npm/node-semver
const semver = require('semver');

// Apps supported by our CLI
const supported = Object.entries({

    // @see https://github.com/gridonic/webpack
    '@gridonic/webpack': '>=0.4.0',

    // @see https://github.com/gridonic/generator
    '@gridonic/generator': '>=0.1.0',

}).map(([module, version]) => {
    const blank = {
        name: module,
        version: null,
        commands: {},
        flags: {},
        status: null,
        global: false
    };

    const local = importCwd.silent(module);
    const global = importGlobal.silent(module);
    const imported = local || global;

    // Module was not installed locally or globally
    if (imported === null) {
        const status = 'not installed';

        return { ...blank, status };
    }

    const { cli = { version: null } } = imported;

    // Module was found but is version is not supported by our CLI
    if (semver.satisfies(cli.version, version) === false) {
        let status = `not supported, expected ${version} but found `;

        // Given app was supported once since it’s returning a version.
        // Support has expired though.
        if (cli.version !== null) {
            status += cli.version;
        } else {
            status += 'very old version';
        }

        return { ...blank, status };
    }

    return {
        ...blank,
        ...cli,
        global: local === null
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

const findByCommand = command => supported.find(
    search => Object.keys(search.commands).find(key => key === command) !== undefined
);

// Tries to run command by one of our supported apps
const run = (command, args = [], flags = {}) => {
    const app = findByCommand(command);

    if (app === undefined) {
        return;
    }

    // Always print Gridonic CLI before running any app
    console.log(
        require('./brand')
    );

    app.commands[command].fn(args, flags);
};

module.exports = {
    findByCommand,
    supported,
    flags,
    run
};
