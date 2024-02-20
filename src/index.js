require('dotenv').config();

const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.DirectMessageReactions,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildWebhooks,

    ]   
});

EventHandler(client);


client.login(process.env.TOKEN);