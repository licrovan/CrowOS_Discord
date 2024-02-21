const {testServer} = require('../../../config.json');
const areCommandsDifferent = require('../../Utils/areCommandsDifferent');
const getApplicationCommands = require('../../Utils/getAplicationCommands');
const getLocalCommands = require('../../Utils/getLocalCommands');

module.exports = async (client) => {
    
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(
            client,
            testServer
          );


        for (const localCommand of localCommands) {
            const {name, description, options} = localCommand;

            const existingCommand = await applicationCommands.cache.find(
                (cmd) => cmd.name === name
            );


            if (existingCommand) {

                if (localCommand.deleted) {
                    await applicationCommands.delete(existingCommand.id);
                    console.log(`Deleted command: ${name}`);
                    continue;
                }

                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });

                    console.log(`the command "${name}" has been edited`);
                }


            } else {
                if (localCommand.deleted) {
                    console.log(`skipping the registering of ${name} as it will be deleted`);
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                });

                console.log(`registering command "${name}"`);
            }
        }
        
    } catch (error) {
        console.log(`there was an error in the registerCommands file: ${error}`);

    }


};