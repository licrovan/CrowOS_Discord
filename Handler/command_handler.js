require('dotenv').config();

const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'hello',
        description: 'Returns a greeting back',
        options: [
            {
                name: 'extratext',
                description: 'extra text that the bot will add to its response',
                type: ApplicationCommandOptionType.String,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {

        console.log('!..registering slash commands in process..!');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        
        console.log('Slash commands have been registered!');
        
    } catch (error) {
        console.log(`An error has aquirod in the command handler ${error}`);
    }
})();