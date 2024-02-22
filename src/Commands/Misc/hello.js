module.exports = {
    name: 'hello',
    description: 'a frienly reply back',
    // devOnly: Boolean,
    // testOnly: false,
    // options: Object[],
    // deleted: true,
  
    callback: (client, interaction) => {
      interaction.reply(`fuck you`);
    },
  };