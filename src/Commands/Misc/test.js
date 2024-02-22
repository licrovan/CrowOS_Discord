module.exports = {
    name: 'test',
    description: 'a frienly reply back',
    // devOnly: Boolean,
    // testOnly: false,
    // options: Object[],
    // deleted: true,
  
    callback: (client, interaction) => {
      interaction.reply(`test complete`);
    },
  };