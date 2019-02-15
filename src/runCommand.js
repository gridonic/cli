// @see https://github.com/chalk/chalk
const chalk = require('chalk');

module.exports = (module, command, args) => {
    console.log(chalk`
{blue.bold ${module.name}}
{gray.italic ${module.description} (v${module.version})}

`);

    return module.run(command, ...args);
};
