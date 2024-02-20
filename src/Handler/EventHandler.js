const path = require('path');
const getAllFiles = require('../Utils/GetAllFiles');

module.exports = (client) => {
    
    const EventFolders = getAllFiles(path.join(__dirname, '..', 'Events'), true);

    for (const EventFolder of EventFolders) {
        const eventFiles = getAllFiles(EventFolder);

        const eventName = EventFolder.replace(/\\/g, '/').split('/').pop();

        client.on(eventName, async (arg) => {

            for (const eventFile of eventFiles){
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }

        });
    }

};