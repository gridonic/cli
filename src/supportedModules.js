// @see https://github.com/sindresorhus/import-cwd
const importCwd = require('import-cwd');

// @see https://github.com/sindresorhus/import-global
const importGlobal = require('import-global');

module.exports = [

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
            commands: []
        }
    }

    return {
        ...(local || global).cli,
        global: global !== null
    };
});
