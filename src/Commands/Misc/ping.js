const  { ApplicationCommandOptionType, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    testOnly: false,
    // options: Object[],
    // deleted: true,
  
    callback: (client, interaction) => {
      interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
  };