module.exports = (module, targetCommand) =>
    module
        .commands
        .find(({ command }) => command === targetCommand) !== undefined;
