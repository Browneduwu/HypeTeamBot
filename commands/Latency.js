const discord = require("discord.js");
const config = require("../config.json");
const bot = new discord.Client();
const loadingembed = new discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Calculating Latency')
    .setDescription('Please Wait')

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    };
    if (!message.deletable) {
        console.log(`${message.author}used this command but the message is not deletable`);
    };
    if (!message.guild) return;
    message.channel.startTyping();
    message.channel.send(loadingembed).then(async(msg) => {
        message.channel.stopTyping();
        const pingembed = new discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Latency')
            .addFields({ name: 'Your Latency', value: `${msg.createdTimestamp - message.createdTimestamp}ms`, inline: true }, { name: 'My Latency', value: `${Math.round(bot.ws.ping)}ms`, inline: true });
        msg.delete()
        message.channel.startTyping();
        message.channel.send(pingembed);
        message.channel.stopTyping();
    });
};

module.exports.help= {
    name: "latency"
}