const  { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'pong!',

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping} ms`)
    },
};