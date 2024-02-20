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

client.on('ready', (cl) => {
    console.log(`${cl.user.username} is up and running`)
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    }
    console.log(msg.content)
})

client.login(process.env.TOKEN);