module.exports = {

    name:'ultraping',
    description: "replies with currant status of ping and server usage",
    
    callback: async(client, interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply(`UltraPong!
    Client Ping: ${ping} ms
    Websocket Ping ${client.ws.ping} ms`)
    }

};